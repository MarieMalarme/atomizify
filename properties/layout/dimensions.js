import { to_percentage, to_pixel } from '../../functions/measures.js'

export const dimensions = {
  height: {
    ...to_percentage('height'),
    ...to_pixel('height'),
    h100vh: `height: 100vh`,
  },

  min_height: {
    ...to_percentage('min-height'),
    ...to_pixel('min-height'),
    min_h100vh: `min-height: 100vh`,
  },

  max_height: {
    ...to_percentage('max-height'),
    ...to_pixel('max-height'),
    max_h100vh: `max-height: 100vh`,
  },

  width: {
    ...to_percentage('width'),
    ...to_pixel('width'),
    w100vw: `width: 100vw`,
  },

  min_width: {
    ...to_percentage('min-width'),
    ...to_pixel('min-width'),
    min_w100vw: `min-width: 100vw`,
  },

  max_width: {
    ...to_percentage('max-width'),
    ...to_pixel('max-width'),
    max_w100vw: `max-width: 100vw`,
  },
}
