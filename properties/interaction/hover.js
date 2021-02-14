import { assign_map } from '../../functions/toolbox.js'
import { colors } from '../../variables/colors.js'

export const hover = {
  hover_color: assign_map(colors, ([color]) => ({
    [`hover-${color}:hover`]: `color: var(--${color})`,
  })),

  hover_bg_color: assign_map(colors, ([color]) => ({
    [`hover-bg-${color}:hover`]: `background-color: var(--${color})`,
  })),

  hover_b_color: assign_map(colors, ([color]) => ({
    [`hover-b-${color}:hover`]: `border-color: var(--${color})`,
  })),

  hover_opacity: assign_map(11, i => ({
    [`hover-o${i * 10}:hover`]: `opacity: ${i / 10}`,
  })),
}
