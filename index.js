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

import { no_flags, dallas_missing } from './messages.js'

export const atomizify = ({ filters = {}, custom_classes = {}, typecase } = {}) => {
  const filtered_sets = filter_objects(sets, filters)
  const flattened_classes = flatten_classes({ ...filtered_sets, ...custom_classes })

  _classes = from_entries(
    entries(flattened_classes).map(([key, value]) => {
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
        entries(_classes)
          .map(([selector, rules]) => `.${selector} { ${rules}; }`)
          .join('\n'),
      ].join('\n'),
    }),
  )

  _typecase = typecase
  _filtered_sets = filtered_sets
  _custom_classes = custom_classes

  return _classes
}

export const flagify = () => {
  const flags = Object.keys(_classes)

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
export let _typecase
