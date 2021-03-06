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
  direction: ['ltr', 'rtl'],
  text_align: [
    'left',
    'right',
    'center',
    'justify',
    'justify-all',
    'start',
    'end',
    'match-parent',
  ],
  text_decoration_line: ['underline', 'overline', 'line-through', 'blink'],
  text_decoration_style: ['solid', 'double', 'dotted', 'dashed', 'wavy'],
  text_decoration_thickness: ['auto', 'from-font'],
  text_decoration_skip_ink: ['auto', 'none', 'all'],
  text_orientation: [
    'mixed',
    'upright',
    'sideways-right',
    'sideways',
    'use-glyph-orientation',
  ],
  text_overflow: ['ellipsis', 'clip'],
  text_transform: ['capitalize', 'uppercase', 'lowercase'],
  vertical_align: [
    'baseline',
    'sub',
    'super',
    'text-top',
    'text-bottom',
    'middle',
    'top',
    'bottom',
  ],
  white_space: [
    'normal',
    'nowrap',
    'pre',
    'pre-wrap',
    'pre-line',
    'break-spaces',
  ],
  word_break: ['normal', 'break-all', 'break-word', 'keep-all'],
  writing_mode: [
    'horizontal-tb',
    'vertical-rl',
    'vertical-lr',
    'sideways-rl',
    'sideways-lr',
  ],
  hyphens: ['none', 'manual', 'auto'],
}
