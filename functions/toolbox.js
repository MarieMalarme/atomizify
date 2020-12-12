export const array = (number) => [...Array(number).keys()]

export const assign_map = (data, mapper) => {
  const data_array = (Array.isArray(data) && data) || array(data)
  return Object.assign(...data_array.map(mapper))
}

export const assign_values = (object) => ({
  ...Object.assign({}, ...Object.values(object)),
})

export const assign = (objects) => ({
  ...Object.assign({}, objects),
})

export const entries = (object) => Object.entries(object)

export const from_entries = (object) => Object.fromEntries(object)

export const shorten = (string) => {
  const dash_index = string.indexOf('-') || 0
  return string.slice(0, dash_index + 2)
}

export const shorten_if_dash = (value) =>
  value.includes('-') ? shorten(value) : value

export const split_colon = (string) => string.split(':')[0]

export const dash_to_snake = (string) => string.split('-').join('_')

export const dash_to_camel = (string) =>
  string.replace(/-([a-z])/g, (pattern) => pattern[1].toUpperCase())

export const filter_object = (object, filters, { is_base_object } = false) => {
  const { to_remove, names } = filters
  object = is_base_object ? object : assign_values(object)
  if (!names) return object
  const names_snake = names.map((n) => dash_to_snake(n))

  return from_entries(
    entries(object).filter(([key, value]) =>
      to_remove ? !names_snake.includes(key) : names_snake.includes(key),
    ),
  )
}
