import { assign_map, entries, assign_values } from './toolbox.js'
import { filters } from '../variables/filters.js'

export const generate_filters = ({ backdrop } = false) => {
  const prefix = backdrop ? `bdf` : `f`
  const selector = `${backdrop ? 'backdrop-' : ''}filter`

  const generated_filters = entries(filters).map(([name, value]) => {
    const { suffix, unit, inc, repeat } = value
    const filter = suffix || name
    const filter_entries = assign_map(repeat, i => {
      const multiplier = i * (inc || 10)
      const key = `${prefix}-${name}${multiplier}`
      const css_rule = `${selector}: ${filter}(${multiplier}${unit || '%'})`
      return {
        [key]: css_rule,
      }
    })
    return filter_entries
  })

  return assign_values(generated_filters)
}
