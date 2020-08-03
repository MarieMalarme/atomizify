export const array = (number) => [...Array(number).keys()]

export const split_colon = (string) => string.split(':')[0]

export const assign_map = (data, mapper) => Object.assign(...data.map(mapper))

export const assign_values = (object) => ({
  ...Object.assign({}, ...Object.values(object)),
})

export const assign = (objects) => ({
  ...Object.assign({}, objects),
})

export const set_prefix = (selector) => {
  const is_composed = selector.includes('-')
  if (is_composed) {
    const [first, second] = selector.split('-')
    const prefix = `${first}_${second[0]}`
    return prefix
  }
  return selector[0]
}
