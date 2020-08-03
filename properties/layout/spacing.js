import { to_pixel } from '../../functions/measures.js'

const margin = {
  ...to_pixel('margin', { axes: true }),
}

const padding = {
  ...to_pixel('padding', { axes: true }),
}

export const spacing = {
  margin,
  padding,
}
