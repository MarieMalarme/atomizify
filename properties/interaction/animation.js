import { assign_map } from '../../functions/toolbox.js'
import { interaction_values } from './_values.js'

const { transition } = interaction_values

export const animation = {
  transition: assign_map(transition, (value) => ({
    [`anim-${value}`]: `transition: ${value} 0.2s ease-in-out`,
  })),
}
