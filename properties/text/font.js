import { assign_map, shorten_if_dash } from '../../functions/toolbox.js'
import { text_values } from './_values.js'

const {
  font_family,
  font_size,
  font_stretch,
  font_style,
  font_weight,
} = text_values

export const font = {
  font_family: assign_map(font_family, (value) => ({
    [value]: `font-family: ${value}`,
  })),

  font_size: {
    ...assign_map(38, (i) => {
      const ten_interval = (i - 22) * 10
      const number = (i > 25 && ten_interval) || i + 5
      return {
        [`fs${number}`]: `font-size: ${number}px`,
      }
    }),
    ...assign_map(font_size, ([size, value]) => ({
      [`fs-${size}`]: `font-size: ${value}`,
    })),
  },

  font_stretch: assign_map(font_stretch, (value) => ({
    [`fs-${shorten_if_dash(value)}`]: `font-stretch: ${value}`,
  })),

  font_style: assign_map(font_style, (value) => ({
    [value]: `font-style: ${value}`,
  })),

  font_weight: {
    ...assign_map(9, (i) => ({
      [`fw-${(i + 1) * 100}`]: `font-weight: ${i + 1}00`,
    })),
    ...assign_map(font_weight, (value) => ({
      [`fw-${value}`]: `font-weight: ${value}`,
    })),
  },
}
