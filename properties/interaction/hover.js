import { assign_map } from '../../functions/toolbox.js'
import { colors } from '../../variables/colors.js'

export const hover = {
  hover_color: assign_map(colors, ([color]) => ({
    [`hover-${color}:hover`]: `color: var(--${color})`,
  })),

  hover_opacity: assign_map(11, (i) => ({
    [`hover-o${i * 10}:hover`]: `opacity: ${i / 10}`,
  })),
}
