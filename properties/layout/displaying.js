import { assign_map } from '../../functions/toolbox.js'

const props_values = {
  display: ['none', 'block', 'inline', 'table', 'flex', 'grid'],
  visibility: ['visible', 'hidden', 'collapse'],
  box_sizing: ['content', 'border'],
  object_fit: ['contain', 'cover', 'fill', 'none', 'scale-down'],
  object_position: ['top', 'right', 'bottom', 'left', 'center'],
}

const {
  display,
  visibility,
  box_sizing,
  object_fit,
  object_position,
} = props_values

export const displaying = {
  display: assign_map(display, (value) => ({
    [value]: `display: ${value}`,
  })),

  visibility: assign_map(visibility, (value) => ({
    [value]: `visibility: ${value}`,
  })),

  box_sizing: assign_map(box_sizing, (value) => ({
    [`bs-${value}`]: `box-sizing: ${value}-box`,
  })),

  object_fit: assign_map(object_fit, (value) => ({
    [`obj-${value}`]: `object-fit: ${value}`,
  })),

  object_position: assign_map(object_position, (value) => ({
    [`obj-${value[0]}`]: `object-position: ${value}`,
  })),
}
