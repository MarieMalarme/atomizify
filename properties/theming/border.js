import { assign_map } from '../../functions/toolbox.js'
import { directions } from '../../variables/orientations.js'
import { colors } from '../../variables/colors.js'
import { theming_values } from './_values.js'

const { border_style } = theming_values

export const border = {
  border: {
    ...assign_map(directions, ([suffix, direction]) => ({
      [`b${suffix}`]: `border${direction}: solid 1px black`,
    })),
    ...assign_map(directions, ([suffix, direction]) => ({
      [`b${suffix}0`]: `border${direction}: none`,
    })),
  },

  border_color: {
    ...assign_map(colors, ([color]) => ({
      [`b-${color}`]: `border-color: var(--${color})`,
    })),
    [`b-transparent`]: `border-color: transparent`,
  },

  border_radius: {
    ...assign_map(26, (i) => ({
      [`b-rad${i}`]: `border-radius: ${i}px`,
    })),
    br50p: `border-radius: 50%`,
  },

  border_style: assign_map(border_style, (value) => ({
    [`b-${value}`]: `border-style: ${value}`,
  })),

  border_width: assign_map(21, (i) => ({
    [`bw${i}`]: `border-width: ${i}px`,
  })),
}
