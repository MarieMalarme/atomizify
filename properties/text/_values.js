import { entries } from '../../functions/toolbox.js'

export const text_values = {
  font_family: [
    'serif',
    'sans-serif',
    'monospace',
    'cursive',
    'fantasy',
    'system-ui',
    'math',
    'emoji',
  ],
  font_size: entries({
    xxs: 'xx-small',
    xs: 'x-small',
    s: 'small',
    m: 'medium',
    l: 'large',
    xl: 'x-large',
    xxl: 'xx-large',
    xxxl: 'xxx-large',
  }),
  font_stretch: [
    'ultra-condensed',
    'extra-condensed',
    'condensed',
    'semi-condensed',
    'normal',
    'semi-expanded',
    'expanded',
    'extra-expanded',
    'ultra-expanded',
  ],
  font_style: ['italic', 'oblique'],
  font_weight: ['bold', 'lighter', 'bolder'],
}
