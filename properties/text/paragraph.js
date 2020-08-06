import { assign_map, shorten_if_dash } from '../../functions/toolbox.js'
import { text_values } from './_values.js'
import { colors } from '../../variables/colors.js'

const {
  direction,
  text_align,
  text_decoration_line,
  text_decoration_style,
  text_decoration_thickness,
  text_decoration_skip_ink,
  text_orientation,
  text_overflow,
  text_transform,
  vertical_align,
  white_space,
  word_break,
  writing_mode,
  hyphens,
} = text_values

export const paragraph = {
  direction: assign_map(direction, (value) => ({
    [`text-dir-${value}`]: `text-direction: ${value}`,
  })),

  text_align: assign_map(text_align, (value) => ({
    [`text-${shorten_if_dash(value)}`]: `text-direction: ${value}`,
  })),

  text_decoration: { [`text-dec-none`]: `text-decoration: none` },

  text_decoration_color: assign_map(colors, ([color]) => ({
    [`text-dec-${color}`]: `text-decoration: var(--${color})`,
  })),

  text_decoration_line: assign_map(text_decoration_line, (value) => ({
    [value]: `text-decoration-line: ${value}`,
  })),

  text_decoration_style: assign_map(text_decoration_style, (value) => ({
    [value]: `text-decoration-style: ${value}`,
  })),

  text_decoration_thickness: {
    ...assign_map(text_decoration_thickness, (value) => ({
      [`text-dec-${value}`]: `text-decoration-thickness: ${value}`,
    })),
    ...assign_map(10, (i) => ({
      [`text-dec${i + 1}`]: `text-decoration-thickness: ${i + 1}px`,
    })),
  },

  text_decoration_skip_ink: assign_map(text_decoration_skip_ink, (value) => ({
    [`text-dec-skip-${value}`]: `text-decoration-skip-ink: ${value}`,
  })),

  text_underline_offset: assign_map(16, (i) => ({
    [`underline-offset${i}`]: `text-underline-offset: ${i}px`,
  })),

  text_orientation: assign_map(text_orientation, (value) => ({
    [`text-${shorten_if_dash(value)}`]: `text-orientation: ${value}`,
  })),

  text_overflow: assign_map(text_overflow, (value) => ({
    [`text-${value}`]: `text-overflow: ${value}`,
  })),

  text_transform: assign_map(text_transform, (value) => ({
    [`${value}`]: `text-overflow: ${value}`,
  })),

  line_height: {
    ...assign_map(21, (i) => ({
      [`lh${i + 10}`]: `line-height: ${i + 10}px`,
    })),
    [`lh-normal`]: `line-height: normal`,
  },

  vertical_align: assign_map(vertical_align, (value) => ({
    [`v-align-${shorten_if_dash(value)}`]: `vertical-align: ${value}`,
  })),

  letter_spacing: assign_map(21, (i) => ({
    [`ls${i}`]: `letter-spacing: ${i}px`,
  })),

  word_spacing: assign_map(11, (i) => ({
    [`ws${i * 5}`]: `word-spacing: ${i * 5}px`,
  })),

  white_space: assign_map(white_space, (value) => ({
    [`ws-${shorten_if_dash(value)}`]: `white-space: ${value}`,
  })),

  word_break: assign_map(word_break, (value) => ({
    [`wb-${shorten_if_dash(value)}`]: `word-break: ${value}`,
  })),

  writing_mode: assign_map(writing_mode, (value) => {
    const [orientation, direction] = value.split('-')
    const suffix = `${orientation[0]}-${direction}`
    return {
      [`wm-${suffix}`]: `writing-mode: ${value}`,
    }
  }),

  hyphens: assign_map(hyphens, (value) => ({
    [`hyphens-${value}`]: `hyphens: ${value}`,
  })),
}
