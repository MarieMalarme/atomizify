import { assign_map, shorten_if_dash } from '../../functions/toolbox.js'
import { colors } from '../../variables/colors.js'
import { positions } from '../../variables/orientations.js'
import { theming_values } from './_values.js'

const {
  background_attachment,
  blend_modes,
  background_clip,
  background_origin,
  background_repeat,
  background_size,
} = theming_values

export const background = {
  background_attachment: assign_map(background_attachment, (value) => ({
    [`bg-attach-${value}`]: `background-attachment: ${value}`,
  })),

  background_blend_mode: assign_map(blend_modes, (mode) => ({
    [`bg-blend-${shorten_if_dash(mode)}`]: `background-blend-mode: ${mode}`,
  })),

  background_clip: assign_map(background_clip, (value, i) => ({
    [`bg-clip-${value}`]: `background-clip: ${value}${i ? '-box' : ''}`,
  })),

  background_color: assign_map(colors, ([color]) => ({
    [`bg-${color}`]: `background-color: var(--${color})`,
  })),

  background_origin: assign_map(background_origin, (value) => ({
    [`bg-origin-${value}`]: `background-origin: ${value}-box`,
  })),

  background_position: assign_map(positions, (value) => ({
    [`bg-pos-${value[0]}`]: `background-position: ${value}`,
  })),

  background_repeat: assign_map(background_repeat, ([prefix, value], i) => ({
    [`bg-rep${i ? `-${prefix}` : ''}`]: `background-repeat: ${value}`,
  })),

  background_size: assign_map(background_size, (value) => ({
    [`bg-${value}`]: `background-size: ${value}`,
  })),
}
