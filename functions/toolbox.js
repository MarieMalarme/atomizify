export const array = (number) => [...Array(number).keys()]

export const assign_map = (data, mapper) => Object.assign(...data.map(mapper))

export const assign_values = (object) => ({
  ...Object.assign({}, ...Object.values(object)),
})

export const assign = (objects) => ({
  ...Object.assign({}, objects),
})

export const entries = (object) => Object.entries(object)

export const from_entries = (object) => Object.fromEntries(object)

export const slice_prefix = (selector) => {
  const dash_index = selector.indexOf('-') || 0
  return selector.slice(0, dash_index + 2)
}

export const split_colon = (string) => string.split(':')[0]

export const dash_to_snake = (string) => string.split('-').join('_')
