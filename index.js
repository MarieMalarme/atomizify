import {
  assign_values,
  dash_to_snake,
  from_entries,
  entries,
} from './functions/toolbox.js'

import { colors_variables } from './variables/colors.js'
import {
  pixels_variables,
  percentages_variables,
} from './variables/measures.js'

import { base_sets } from './properties/sets.js'

const filter_object = (object, filters, { is_base_object } = true) => {
  const { type, names } = filters
  const to_remove = type === 'to_remove'
  object = is_base_object ? object : assign_values(object)

  if (!names) return object
  return from_entries(
    entries(object).filter(([key, value]) =>
      to_remove ? !names.includes(key) : names.includes(key),
    ),
  )
}

let classes = {}

export const generate_css = ({ filters = {}, typecase = 'snake' } = {}) => {
  const { sets = {}, subsets = {}, props = {} } = filters

  const filtered_sets = filter_object(base_sets, sets, { is_base_object: true })
  const filtered_subsets = filter_object(filtered_sets, subsets)
  const filtered_props = filter_object(filtered_subsets, props)
  const filtered_classes = assign_values(filtered_props)

  const dash_case = typecase === 'dash'

  classes = from_entries(
    entries(filtered_classes).map(([key, value]) => {
      const formatted_key = (dash_case && key) || dash_to_snake(key)
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
}
