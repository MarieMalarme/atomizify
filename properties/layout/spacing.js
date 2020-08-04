import { to_pixel } from '../../functions/measures.js'

export const spacing = {
  margin: to_pixel('margin', { axes: true }),
  padding: to_pixel('padding', { axes: true }),
}
