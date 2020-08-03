import { assign_map } from '../../functions/toolbox.js'

const display_values = ['none', 'block', 'inline', 'table', 'flex', 'grid']
const display = assign_map(display_values, (value) => ({
  [value]: `display: ${value}`,
}))

const visibility_values = ['visible', 'hidden', 'collapse']
const visibility = assign_map(visibility_values, (value) => ({
  [value]: `visibility: ${value}`,
}))

const box_sizing_values = ['content', 'border']
const box_sizing = assign_map(box_sizing_values, (value) => ({
  [`bs-${value}`]: `box-sizing: ${value}-box`,
}))

const object_fit_values = ['contain', 'cover', 'fill', 'none', 'scale-down']
const object_fit = assign_map(object_fit_values, (value) => ({
  [`obj-${value}`]: `object-fit: ${value}`,
}))

const object_position_values = ['top', 'right', 'bottom', 'left', 'center']
const object_position = assign_map(object_position_values, (value) => ({
  [`obj-${value[0]}`]: `object-position: ${value}`,
}))

export const displaying = {
  display,
  visibility,
  box_sizing,
  object_fit,
  object_position,
}
