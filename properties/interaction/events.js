import { assign_map } from '../../functions/toolbox.js'
import { interaction_values } from './_values.js'

const {
  overflow,
  overflow_wrap,
  overscroll_behavior,
  cursor,
  resize,
  touch_action,
} = interaction_values

export const events = {
  overflow: assign_map(overflow, (value) => ({
    [`of-${value}`]: `overflow: ${value}`,
  })),

  overflow_x: assign_map(overflow, (value) => ({
    [`ofx-${value}`]: `overflow-x: ${value}`,
  })),

  overflow_y: assign_map(overflow, (value) => ({
    [`ofy-${value}`]: `overflow-y: ${value}`,
  })),

  overflow_wrap: assign_map(overflow_wrap, (value) => ({
    [`ofw-${value.split('-')[0]}`]: `overflow-wrap: ${value}`,
  })),

  overscroll_behavior: assign_map(overscroll_behavior, (value) => ({
    [`osb-${value}`]: `overscroll-behavior: ${value}`,
  })),

  cursor: assign_map(cursor, (value) => {
    const suffix = (value.includes('zoom') && value) || value.split('-')[0]
    return {
      [`c-${suffix}`]: `cursor: ${value}`,
    }
  }),

  resize: assign_map(resize, (value) => ({
    [`resize-${value}`]: `resize: ${value}`,
  })),

  touch_action: assign_map(touch_action, (value) => {
    const suffix = (value.includes('zoom') && 'pinch') || value
    return {
      [`touch-${suffix}`]: `touch-action: ${value}`,
    }
  }),
}
