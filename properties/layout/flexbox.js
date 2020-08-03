import { assign_map, array, shorten } from '../../functions/toolbox.js'

const flex = assign_map(array(11), (value) => ({
  [`flex${value}`]: `flex: ${value}`,
}))

const flex_direction_values = ['row', 'row-reverse', 'column', 'column-reverse']
const flex_direction = assign_map(flex_direction_values, (value) => {
  const suffix = (value.includes('-') && shorten(value)) || value
  return {
    [`flex-${suffix}`]: `flex-direction: ${value}`,
  }
})

const flex_grow = assign_map(array(11), (value) => ({
  [`flex-grow${value}`]: `flex-grow: ${value}`,
}))

const flex_shrink = assign_map(array(11), (value) => ({
  [`flex-shrink${value}`]: `flex-shrink: ${value}`,
}))

const flex_wrap_values = ['wrap', 'nowrap', 'wrap-reverse']
const flex_wrap = assign_map(flex_wrap_values, (value) => {
  const suffix = (value.includes('-') && shorten(value)) || value
  return {
    [`flex-${suffix}`]: `flex-wrap: ${value}`,
  }
})

const flex_axis_values = {
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
const { base, space, selfs, sides } = flex_axis_values

const align_content_values = [...base, ...space]
const align_content = assign_map(align_content_values, (value) => ({
  [`ac-${value}`]: `align-content: ${value}`,
}))

const align_items_values = [...base, ...selfs]
const align_items = assign_map(align_items_values, (value) => ({
  [`ai-${value}`]: `align-items: ${value}`,
}))

const align_self_values = [...base, ...selfs]
const align_self = assign_map(align_self_values, (value) => ({
  [`as-${value}`]: `align-self: ${value}`,
}))

const justify_content_values = [...base, ...space, ...sides]
const justify_content = assign_map(justify_content_values, (value) => ({
  [`jc-${value}`]: `justify-content: ${value}`,
}))

const justify_items_values = [...base, ...selfs, ...sides]
const justify_items = assign_map(justify_items_values, (value) => ({
  [`ji-${value}`]: `justify-items: ${value}`,
}))

const justify_self_values = [...base, ...selfs, ...sides]
const justify_self = assign_map(justify_self_values, (value) => ({
  [`js-${value}`]: `justify-self: ${value}`,
}))

let count = -10
const order = assign_map(array(21), () => {
  const value = count
  const suffix = (value < 0 && `-min${Math.abs(value)}`) || value
  count++
  return {
    [`order${suffix}`]: `order: ${value}`,
  }
})

export const flexbox = {
  flex,
  flex_direction,
  flex_grow,
  flex_shrink,
  flex_wrap,
  align_content,
  align_items,
  align_self,
  justify_content,
  justify_items,
  justify_self,
  order,
}
