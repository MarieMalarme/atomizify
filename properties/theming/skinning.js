import { assign_map, shorten_if_dash } from '../../functions/toolbox.js'
import { colors } from '../../variables/colors.js'
import { theming_values } from './_values.js'
import { generate_filters } from '../../functions/filters.js'

const { box_shadow, box_shadow_sizes, blend_modes } = theming_values

export const skinning = {
  color: assign_map(colors, ([color]) => ({
    [color]: `color: var(--${color})`,
  })),

  opacity: assign_map(21, (i) => ({
    [`o${i * 5}`]: `opacity: ${(i * 5) / 100}`,
  })),

  box_shadow: assign_map(box_shadow_sizes, ([suffix, { size, opacity }]) =>
    assign_map(box_shadow, ([prefix, coords]) => ({
      [`shadow-${prefix}-${suffix}`]: `box-shadow: ${coords[0]}px ${coords[1]}px ${size}px hsla(0, 0%, 0%, 0.${opacity})`,
    })),
  ),

  outline: { [`ol-none`]: `outline: none` },

  mix_blend_mode: assign_map(blend_modes, (mode) => ({
    [`blend-${shorten_if_dash(mode)}`]: `mix-blend-mode: ${mode}`,
  })),

  filter: generate_filters(),

  backdrop_filter: generate_filters({ backdrop: true }),
}
