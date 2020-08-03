import { array } from '../functions/toolbox.js'

export const pixels = array(101).map((m) => m * 5)
export const pixels_variables = pixels.map((p) => `  --px${p}: ${p}px;`)

export const percentages = array(21).map((p) => p * 5)
export const percentages_variables = percentages.map(
  (p) => `  --percentage${p}: ${p}%;`,
)
