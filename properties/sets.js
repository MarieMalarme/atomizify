import { assign } from '../functions/toolbox.js'

import { dimensions } from './layout/dimensions.js'
// import { spacing } from './layout/spacing.js'
// import { flexbox } from './layout/flexbox.js'
// import { displaying } from './layout/displaying.js'

// import { skinning } from './layout/skinning.js'
// import { background } from './layout/background.js'
// import { border } from './layout/border.js'

// import { font } from './layout/font.js'
// import { paragraph } from './layout/paragraph.js'

// import { animation } from './layout/animation.js'
// import { events } from './layout/events.js'

const layout = assign({
  dimensions,
  // spacing,
  // flexbox,
  // displaying
})

const theming = assign({
  // skinning,
  // background,
  // border,
})

const text = assign({
  // font,
  // paragraph,
})

const interaction = assign({
  // animation,
  // events,
})

export const base_sets = assign({ layout, theming, text, interaction })
