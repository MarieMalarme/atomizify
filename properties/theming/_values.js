import { entries } from '../../functions/toolbox.js'

export const theming_values = {
  box_shadow: entries({
    a: [0, 0],
    t: [0, -15],
    r: [15, 0],
    b: [0, 15],
    l: [-15, 0],
    rt: [15, -15],
    rb: [15, 15],
    lb: [-15, 15],
    lt: [-15, -15],
  }),

  box_shadow_sizes: entries({
    s: { size: 25, opacity: 25 },
    m: { size: 50, opacity: 33 },
    l: { size: 75, opacity: 50 },
  }),

  blend_modes: [
    'normal',
    'multiply',
    'screen',
    'overlay',
    'darken',
    'lighten',
    'color-dodge',
    'color-burn',
    'hard-light',
    'soft-light',
    'difference',
    'exclusion',
    'hue',
    'saturation',
    'color',
    'luminosity',
  ],
}
