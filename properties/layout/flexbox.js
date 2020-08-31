import {
  assign_map,
  array,
  shorten,
  shorten_if_dash,
} from '../../functions/toolbox.js'

import { layout_values } from './_values.js'

const {
  flex_direction,
  flex_wrap,
  align_content,
  align_items,
  align_self,
  justify_content,
  justify_items,
  justify_self,
} = layout_values

let order = -10

export const flexbox = {
  flex: assign_map(11, (i) => ({
    [`flex${i}`]: `flex: ${i}`,
  })),

  flex_direction: assign_map(flex_direction, (value) => {
    const suffix = shorten_if_dash(value)
    return {
      [`flex-${suffix}`]: `flex-direction: ${value}`,
    }
  }),

  flex_grow: assign_map(11, (i) => ({
    [`flex-grow${i}`]: `flex-grow: ${i}`,
  })),

  flex_shrink: assign_map(11, (i) => ({
    [`flex-shrink${i}`]: `flex-shrink: ${i}`,
  })),

  flex_wrap: assign_map(flex_wrap, (value) => {
    const suffix = shorten_if_dash(value)
    return {
      [`flex-${suffix}`]: `flex-wrap: ${value}`,
    }
  }),

  align_content: assign_map(align_content, (value) => {
    const suffix =
      (value.includes('space') && value.replace('space-', '')) || value
    return {
      [`ac-${suffix}`]: `align-content: ${value}`,
    }
  }),

  align_items: assign_map(align_items, (value) => ({
    [`ai-${value}`]: `align-items: ${value}`,
  })),

  align_self: assign_map(align_self, (value) => ({
    [`as-${value}`]: `align-self: ${value}`,
  })),

  justify_content: assign_map(justify_content, (value) => {
    const suffix =
      (value.includes('space') && value.replace('space-', '')) || value
    return {
      [`jc-${suffix}`]: `justify-content: ${value}`,
    }
  }),

  justify_items: assign_map(justify_items, (value) => ({
    [`ji-${value}`]: `justify-items: ${value}`,
  })),

  justify_self: assign_map(justify_self, (value) => ({
    [`js-${value}`]: `justify-self: ${value}`,
  })),

  order: assign_map(21, () => {
    const value = order
    const suffix = (value < 0 && `-min${Math.abs(value)}`) || value
    order++
    return {
      [`order${suffix}`]: `order: ${value}`,
    }
  }),
}
