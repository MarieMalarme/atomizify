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

const shades_amount = 9

const camaieu = (name, hue) =>
  array(shades_amount).map(i => [
    `${name}${i + 1}`,
    `hsl(${hue}, ${name === 'grey' ? '0' : '100'}%, ${(shades_amount - i) * 10}%)`,
  ])

const shades = Object.fromEntries(
  tints.flatMap((name, i) => camaieu(name, (i + 1) * 10)),
)

export const colors = Object.entries({
  ...shades,
  white: '#ffffff',
  black: '#000000',
})

export const colors_variables = colors.map(
  ([color, value]) => `  --${color}: ${value};`,
)
