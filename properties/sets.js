import { assign } from '../functions/toolbox.js'

import { dimensions } from './layout/dimensions.js'
import { displaying } from './layout/displaying.js'
import { flexbox } from './layout/flexbox.js'
import { spacing } from './layout/spacing.js'

import { skinning } from './theming/skinning.js'
import { background } from './theming/background.js'
import { border } from './theming/border.js'

import { font } from './text/font.js'
// import { paragraph } from './text/paragraph.js'

// import { animation } from './interaction/animation.js'
// import { events } from './interaction/events.js'

const layout = assign({
  dimensions,
  displaying,
  flexbox,
  spacing,
})

const theming = assign({
  skinning,
  background,
  border,
})

const text = assign({
  font,
  // paragraph,
})

const interaction = assign({
  // animation,
  // events,
})

export const base_sets = assign({ layout, theming, text, interaction })
