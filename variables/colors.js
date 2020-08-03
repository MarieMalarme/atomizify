import { array } from '../functions/toolbox.js'

const tints = [
  'grey',
  'red',
  'scarlet',
  'sanguine',
  'orange',
  'saffron',
  'yellow',
  'canary',
  'lime',
  'chartreuse',
  'spring',
  'grass',
  'neon',
  'green',
  'meadow',
  'parrot',
  'alga',
  'mint',
  'jade',
  'cyan',
  'cerulean',
  'azur',
  'king',
  'electric',
  'deepsea',
  'blue',
  'sapphire',
  'indigo',
  'purple',
  'violet',
  'fuschia',
  'magenta',
  'candy',
  'pink',
  'barbie',
  'raspberry',
  'cherry',
]

const camaieu = (name, hue) =>
  array(9).map((i) => [
    `${name}${i + 1}`,
    `hsl(${hue}, ${name === 'grey' ? '0' : '100'}%, ${(i + 1) * 10}%)`,
  ])

const shades = Object.fromEntries(
  tints.flatMap((name, i) => camaieu(name, (i + 1) * 10)),
)

export const colors = Object.entries({
  white: '#ffffff',
  black: '#000000',
  ...shades,
})

export const colors_variables = colors.map(
  ([color, value]) => `  --${color}: ${value};`,
)
