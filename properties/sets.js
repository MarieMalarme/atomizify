import { entries, from_entries } from '../functions/toolbox.js'

import { dimensions } from './layout/dimensions.js'
import { displaying } from './layout/displaying.js'
import { flexbox } from './layout/flexbox.js'
import { spacing } from './layout/spacing.js'
import { positioning } from './layout/positioning.js'

import { skinning } from './theming/skinning.js'
import { background } from './theming/background.js'
import { border } from './theming/border.js'

import { font } from './text/font.js'
import { paragraph } from './text/paragraph.js'

import { animation } from './interaction/animation.js'
import { events } from './interaction/events.js'
import { hover } from './interaction/hover.js'

const base_sets = {
  layout: { dimensions, displaying, flexbox, spacing, positioning },
  theming: { skinning, background, border },
  text: { font, paragraph },
  interaction: { animation, events, hover },
}

const assign_set_types = subsets => ({
  ...from_entries(
    entries(subsets).map(([key, properties]) => {
      return [key, { ...properties, _type: 'subset' }]
    }),
  ),
  _type: 'set',
})

export const sets = from_entries(
  entries(base_sets).map(([key, subsets]) => {
    return [key, assign_set_types(subsets)]
  }),
)
