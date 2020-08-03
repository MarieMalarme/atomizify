import { assign_map, slice_prefix } from './toolbox.js'
import { pixels, percentages } from '../variables/measures.js'

export const to_pixel = (selector, suffix = '', direction = '') => {
  const prefix = slice_prefix(selector)
  return assign_map(pixels, (measure) => ({
    [`${prefix}${suffix}${measure}`]: `${selector}${direction}: ${measure}px`,
  }))
}

export const to_percentage = (selector) => {
  const prefix = slice_prefix(selector)
  return assign_map(percentages, (percentage) => ({
    [`${prefix}${percentage}p`]: `${selector}: ${percentage}%`,
  }))
}
