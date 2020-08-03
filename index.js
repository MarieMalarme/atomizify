import { assign_values } from './functions/toolbox.js'

import { colors_variables } from './variables/colors.js'
import {
  pixels_variables,
  percentages_variables,
} from './variables/measures.js'

import { base_sets } from './properties/sets.js'

const filter_object = (object, filters, is_base_object) => {
  const { type, names } = filters
  const to_remove = type === 'to_remove'
  object = is_base_object ? object : assign_values(object)

  if (!names) return object
  return Object.fromEntries(
    Object.entries(object).filter(([key, value]) =>
      to_remove ? !names.includes(key) : names.includes(key),
    ),
  )
}

let classes = {}

export const generate_css = ({ sets = {}, subsets = {}, props = {} } = {}) => {
  const filtered_sets = filter_object(base_sets, sets, true)
  const filtered_subsets = filter_object(filtered_sets, subsets)
  const filtered_props = filter_object(filtered_subsets, props)

  classes = assign_values(filtered_props)

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
        Object.entries(classes)
          .map(([selector, rules]) => `.${selector} { ${rules}; }`)
          .join('\n'),
      ].join('\n'),
    }),
  )
}
