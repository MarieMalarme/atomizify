import { assign_map, shorten } from './toolbox.js'
import { pixels, percentages } from '../variables/measures.js'

const directions = Object.entries({
  a: '',
  t: '-top',
  r: '-right',
  b: '-bottom',
  l: '-left',
})

export const to_pixel = (selector, { axes } = false) => {
  const prefix = shorten(selector)

  if (axes) {
    return assign_map(pixels, (measure) => ({
      [`${prefix}v${measure}`]: `${selector}-top: ${measure}px; ${selector}-bottom: ${measure}px;`,
      [`${prefix}h${measure}`]: `${selector}-left: ${measure}px; ${selector}-right: ${measure}px;`,
      ...assign_map(directions, ([suffix, direction]) => ({
        [`${prefix}${suffix}${measure}`]: `${selector}${direction}: ${measure}px`,
      })),
    }))
  }

  return assign_map(pixels, (measure) => ({
    [`${prefix}${measure}`]: `${selector}: ${measure}px`,
  }))
}

export const to_percentage = (selector) => {
  const prefix = shorten(selector)
  return assign_map(percentages, (percentage) => ({
    [`${prefix}${percentage}p`]: `${selector}: ${percentage}%`,
  }))
}
