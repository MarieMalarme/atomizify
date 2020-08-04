import { assign_map } from './toolbox.js'

export const generate_filters = ({ backdrop } = false) => {
  const prefix = backdrop ? `bdf` : `f`
  const selector = `${backdrop ? 'backdrop-' : ''}filter`

  return {
    ...assign_map(21, (i) => ({
      [`${prefix}-blur${i}`]: `${selector}: blur(${i}px)`,
    })),
    ...assign_map(21, (i) => ({
      [`${prefix}-bright${i * 25}`]: `${selector}: brightness(${i * 25}%)`,
    })),
    ...assign_map(21, (i) => ({
      [`${prefix}-contrast${i * 10}`]: `${selector}: contrast(${i * 10}%)`,
    })),
    ...assign_map(11, (i) => ({
      [`${prefix}-gray${i * 10}`]: `${selector}: grayscale(${i * 10}%)`,
    })),
    ...assign_map(36, (i) => ({
      [`${prefix}-hue${i * 10}`]: `${selector}: hue-rotate(${i * 10}deg)`,
    })),
    ...assign_map(11, (i) => ({
      [`${prefix}-invert${i * 10}`]: `${selector}: invert(${i * 10}%)`,
    })),
    ...assign_map(11, (i) => ({
      [`${prefix}-opacity${i * 10}`]: `${selector}: opacity(${i * 10}%)`,
    })),
    ...assign_map(21, (i) => ({
      [`${prefix}-saturate${i * 10}`]: `${selector}: saturate(${i * 10}%)`,
    })),
    ...assign_map(11, (i) => ({
      [`${prefix}-sepia${i * 10}`]: `${selector}: sepia(${i * 10}%)`,
    })),
  }
}
