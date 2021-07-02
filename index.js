import {
  format_key_to_case,
  flatten_classes,
  filter_objects,
  assign_map,
  from_entries,
  entries,
} from './functions/toolbox.js'

import { pixels_variables, percentages_variables } from './variables/measures.js'
import { colors_variables } from './variables/colors.js'
import { sets } from './properties/sets.js'

import { no_flags, dallas_missing } from './variables/messages.js'

export const atomizify = (user_custom_properties = {}) => {
  const { filters = {}, typecase } = user_custom_properties
  const { custom_classes = {}, media_queries = {} } = user_custom_properties
  const filtered_sets = filter_objects(sets, filters)
  const flattened_classes = flatten_classes({ ...filtered_sets, ...custom_classes })

  _classes = from_entries(
    entries(flattened_classes).map(([key, rules]) => {
      const selector = format_key_to_case(typecase, key)
      return [selector, rules]
    }),
  )

  // create the html style tag element, set its properties
  // & fill its innerHTML with all the CSS variables, rules, & media queries
  const style_tag = document.createElement('style')
  const style_tag_content = {
    type: 'text/css',
    id: `css-flags`,
    innerHTML: [
      ':root {',
      '/* measures */',
      pixels_variables,
      percentages_variables,
      '\n',
      '/* colors */',
      colors_variables,
      '}\n',
      '\n',
      // generate the rulesets for all the classes
      '/* basic classes */',
      entries(_classes).map(([selector, rules]) => `.${selector} { ${rules} }`),
      '\n',
      // generate the rulesets for all the classes in each media query
      ...entries(media_queries).map(([identifier, { query, description }]) =>
        [
          `/* ${description} */`,
          `@media (${query}) {`,
          entries(_classes).map(([selector, rules]) => {
            const [prefix, pseudo_class] = selector.split(':')
            const suffix = pseudo_class ? `:${pseudo_class}` : ''
            return `  .${prefix}${identifier}${suffix} { ${rules} }`
          }),
          '}',
          '\n',
        ].flat(),
      ),
    ]
      .flat()
      .join('\n'),
  }

  document.head.appendChild(Object.assign(style_tag, style_tag_content))

  _typecase = typecase
  _filtered_sets = filtered_sets
  _media_queries = media_queries
  _custom_classes = custom_classes

  return _classes
}

export const flagify = () => {
  const flags = [
    ...Object.keys(_classes),
    // generate the flags for all the classes for each media query
    // example for XL screens: 'height_100__xl'
    ...Object.keys(_media_queries).flatMap(identifier =>
      Object.keys(_classes).map(selector => `${selector.split(':')[0]}${identifier}`),
    ),
  ]

  try {
    const dallas = require('dallas')
    const { wrapper } = dallas

    if (!flags) {
      console.log(...no_flags)
      return wrapper({ consume: true })
    }

    const flags_to_object = assign_map(flags, flag => {
      const flag_name = flag.split(':')[0]
      return {
        [flag_name]: flag_name,
      }
    })

    const Component = wrapper({ ...flags_to_object, consume: true })
    const Div = Component.div()
    const Span = Component.span()

    return { Component, Div, Span, flags }
  } catch (error) {
    console.log(...dallas_missing)
    console.log(error)
  }
}

export let _classes = {}
export let _custom_classes = {}
export let _filtered_sets = {}
export let _media_queries = {}
export let _typecase
