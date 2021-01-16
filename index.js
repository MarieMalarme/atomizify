import {
  format_key_to_case,
  filter_object,
  assign_values,
  assign_map,
  dash_to_snake,
  dash_to_camel,
  from_entries,
  entries,
} from './functions/toolbox.js'

import {
  pixels_variables,
  percentages_variables,
} from './variables/measures.js'
import { colors_variables } from './variables/colors.js'

import { base_sets } from './properties/sets.js'

import { no_flags, dallas_missing } from './messages.js'

let classes = {}

export const atomify = ({ filters = {}, typecase, custom_classes } = {}) => {
  const { sets = {}, subsets = {}, props = {} } = filters

  const filtered_sets = filter_object(base_sets, sets, { is_base_object: true })
  const filtered_subsets = filter_object(filtered_sets, subsets)
  const filtered_props = filter_object(filtered_subsets, props)
  const filtered_classes = {
    ...assign_values(filtered_props),
    ...custom_classes,
  }

  const dash_case = typecase === 'dash'
  const camel_case = typecase === 'camel'

  classes = from_entries(
    entries(filtered_classes).map(([key, value]) => {
      const formatted_key = format_key_to_case(typecase, key)
      return [formatted_key, value]
    }),
  )

  document.head.appendChild(
    Object.assign(document.createElement('style'), {
      type: 'text/css',
      id: `css-flags`,
      innerHTML: [
        ':root {',
        '/* measures */',
        pixels_variables.join('\n'),
        percentages_variables.join('\n'),
        '/* colors */',
        colors_variables.join('\n'),
        '}\n',
        entries(classes)
          .map(([selector, rules]) => `.${selector} { ${rules}; }`)
          .join('\n'),
      ].join('\n'),
    }),
  )

  return classes
}

export const flagify = () => {
  const flags = Object.keys(classes)

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
