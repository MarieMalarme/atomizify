import {
  assign_map,
  array,
  shorten,
  shorten_if_dash,
} from '../../functions/toolbox.js'

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

const props_values = {
  flex_direction: ['row', 'row-reverse', 'column', 'column-reverse'],
  flex_wrap: ['wrap', 'nowrap', 'wrap-reverse'],
  align_content: [...base, ...space],
  align_items: [...base, ...selfs],
  align_self: [...base, ...selfs],
  justify_content: [...base, ...space, ...sides],
  justify_items: [...base, ...selfs, ...sides],
  justify_self: [...base, ...selfs, ...sides],
}

const {
  flex_direction,
  flex_wrap,
  align_content,
  align_items,
  align_self,
  justify_content,
  justify_items,
  justify_self,
} = props_values

let order = -10

export const flexbox = {
  flex: assign_map(11, (value) => ({
    [`flex${value}`]: `flex: ${value}`,
  })),

  flex_direction: assign_map(flex_direction, (value) => {
    const suffix = shorten_if_dash(value)
    return {
      [`flex-${suffix}`]: `flex-direction: ${value}`,
    }
  }),

  flex_grow: assign_map(11, (value) => ({
    [`flex-grow${value}`]: `flex-grow: ${value}`,
  })),

  flex_shrink: assign_map(11, (value) => ({
    [`flex-shrink${value}`]: `flex-shrink: ${value}`,
  })),

  flex_wrap: assign_map(flex_wrap, (value) => {
    const suffix = shorten_if_dash(value)
    return {
      [`flex-${suffix}`]: `flex-wrap: ${value}`,
    }
  }),

  align_content: assign_map(align_content, (value) => ({
    [`ac-${value}`]: `align-content: ${value}`,
  })),

  align_items: assign_map(align_items, (value) => ({
    [`ai-${value}`]: `align-items: ${value}`,
  })),

  align_self: assign_map(align_self, (value) => ({
    [`as-${value}`]: `align-self: ${value}`,
  })),

  justify_content: assign_map(justify_content, (value) => ({
    [`jc-${value}`]: `justify-content: ${value}`,
  })),

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
