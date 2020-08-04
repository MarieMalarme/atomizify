import { assign_map } from '../../functions/toolbox.js'
import { layout_values } from './_values.js'

const {
  display,
  visibility,
  box_sizing,
  object_fit,
  object_position,
} = layout_values

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
