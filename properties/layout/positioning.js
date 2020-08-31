import { assign_map } from '../../functions/toolbox.js'
import { layout_values } from './_values.js'

const { position } = layout_values

export const positioning = {
  position: assign_map(position, (value) => ({
    [value]: `position: ${value}`,
  })),

  top: assign_map(11, (i) => ({
    [`t${i * 10}`]: `top: ${i * 10}px`,
  })),

  right: assign_map(11, (i) => ({
    [`r${i * 10}`]: `right: ${i * 10}px`,
  })),

  bottom: assign_map(11, (i) => ({
    [`b${i * 10}`]: `bottom: ${i * 10}px`,
  })),

  left: assign_map(11, (i) => ({
    [`l${i * 10}`]: `left: ${i * 10}px`,
  })),

  z_index: assign_map(22, (i) => ({
    [`zi${i - 1 < 0 ? '_min' : i - 1}`]: `z-index: ${i - 1}`,
  })),
}
