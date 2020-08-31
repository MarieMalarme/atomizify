import { entries } from '../../functions/toolbox.js'

const flex_axis = {
  base: [
    'start',
    'end',
    'flex-start',
    'flex-end',
    'center',
    'normal',
    'baseline',
    'stretch',
  ],
  space: ['space-between', 'space-around', 'space-evenly'],
  selfs: ['self-start', 'self-end'],
  sides: ['left', 'right'],
}

const { base, space, selfs, sides } = flex_axis

export const layout_values = {
  display: ['none', 'block', 'inline', 'table', 'flex', 'grid'],
  visibility: ['visible', 'hidden', 'collapse'],
  box_sizing: ['content', 'border'],
  object_fit: ['contain', 'cover', 'fill', 'none', 'scale-down'],
  object_position: ['top', 'right', 'bottom', 'left', 'center'],
  flex_direction: ['row', 'row-reverse', 'column', 'column-reverse'],
  flex_wrap: ['wrap', 'nowrap', 'wrap-reverse'],
  align_content: [...base, ...space],
  align_items: [...base, ...selfs],
  align_self: [...base, ...selfs],
  justify_content: [...base, ...space, ...sides],
  justify_items: [...base, ...selfs, ...sides],
  justify_self: [...base, ...selfs, ...sides],
  position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
}
