export const array = number => [...Array(number).keys()]

export const assign_map = (data, mapper) => {
  const data_array = (Array.isArray(data) && data) || array(data)
  return Object.assign(...data_array.map(mapper))
}

export const assign_values = object => ({
  ...Object.assign({}, ...Object.values(object)),
})

export const entries = object => Object.entries(object)

export const from_entries = object => Object.fromEntries(object)

export const shorten = string => {
  const dash_index = string.indexOf('-') || 0
  return string.slice(0, dash_index + 2)
}

export const shorten_if_dash = value => (value.includes('-') ? shorten(value) : value)

export const split_colon = string => string.split(':')[0]

export const dash_to_snake = string => string.split('-').join('_')

export const dash_to_camel = string =>
  string.replace(/-([a-z])/g, pattern => pattern[1].toUpperCase())

export const format_key_to_case = (typecase, key) => {
  const dash_case = typecase === 'dash'
  const camel_case = typecase === 'camel'
  return (dash_case && key) || (camel_case && dash_to_camel(key)) || dash_to_snake(key)
}

export const filter_objects = (objects, filters) => {
  const filtered_entries = entries(objects).filter(([key, { _type }]) => {
    const filters_type = `${_type || 'propertie'}s`
    const matching_filters = filters[filters_type]
    if (!matching_filters) return true
    const { to_remove, names } = matching_filters
    const names_snake = names.map(n => dash_to_snake(n))
    const removed = !names_snake.includes(key)
    return to_remove ? removed : !removed
  })

  const filtered_objects = filtered_entries.map(entry => {
    const [key, value] = entry
    if (typeof objects[key] !== 'object' || key === '_type') return entry
    return [key, filter_objects(value, filters)]
  })

  return from_entries(filtered_objects)
}

export const flatten_classes = object => {
  const flattened = {}
  Object.keys(object).forEach(key => {
    if (key === '_type') return
    typeof object[key] === 'object'
      ? Object.assign(flattened, flatten_classes(object[key]))
      : (flattened[key] = object[key])
  })

  return flattened
}
