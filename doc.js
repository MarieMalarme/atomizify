import { format_key_to_case, entries } from './functions/toolbox.js'

import { _filtered_sets, _typecase, _custom_classes, _classes } from './index.js'
import { colors } from './variables/colors.js'

export const display_colors = ({ node, circles = false, open = true } = {}) => {
  const container = node || document.body

  create('colors_sheet', container)
  create_section_header('Generated colors', colors_sheet, 'colors_blocks_container', open)
  create('colors_blocks_container', colors_sheet)
  colors_blocks_container.classList.add(!open && 'none')
  create('colors_blocks', colors_blocks_container)

  colors.forEach(([color_name], i) => {
    const color = create('color', colors_blocks, { id: color_name })
    circles && color.classList.add('ai_center')
    color.style.width = `calc(100% / 9)`
    color.addEventListener('click', () => document.execCommand('copy'))
    color.addEventListener('copy', copy)

    const tint = create('tint', color, { id: color_name })
    tint.classList.add(`bg_${color_name}`, ...(circles ? ['w70', 'b_rad50p'] : 'w100p'))
    const is_white = color_name === 'white'
    is_white && tint.classList.add('ba', 'b_grey2')

    create(`name_${color_name}`, color, { text: color_name })
  })
}

export const display_classes = ({ node, open = true, flattened = false } = {}) => {
  const container = node || document.body
  create('classes_sheet', container)
  create_section_header('Generated CSS classes', classes_sheet, 'sets_container', open)
  create('sets_container', classes_sheet)
  sets_container.classList.add(!open && 'none')

  if (flattened) {
    create_classes(_classes, sets_container)
    return
  }

  const sets = [...entries(_filtered_sets)]
  sets.forEach(([name, subsets], i) => {
    const no_custom_classes = !Object.keys(_custom_classes).length
    const is_last = no_custom_classes && i === sets.length - 1
    const set = create_set(name, sets_container, { with_label: true, is_last })
    create_subsets(subsets, set, name)
  })

  create_custom_classes_set(sets_container)
}

const copy = event => {
  event.preventDefault()
  const { id } = event.target

  if (id !== 'copied_color') {
    const color_name = id.split('_')[1]
    event.clipboardData.setData('text/plain', color_name)
    const tint = document.getElementById(`tint_${color_name}`)
    const copied = create('copied_color', tint, { text: 'copied 📋' })
    const index = color_name[color_name.length - 1]
    const is_black = color_name === 'black'
    copied.className = `pl15 pt10 ${is_black || index > 5 ? 'white' : 'black'}`
    setTimeout(() => copied.remove(), 1000)
  }
}

const create = (name, container, { text, type = 'div', id } = {}) => {
  const element = document.createElement(type)
  element.id = id ? `${name}_${id}` : name
  element.textContent = text
  element.className = elements_style[name]
  container.append(element)
  return element
}

const create_section_header = (text, container, collapsible, _open) => {
  let open = _open
  const section_header = create('section_header', container, { id: text })
  open && section_header.classList.add('mb80')
  create(`section_title_${text}`, section_header, { text })
  const collapser = create('section_collapser', section_header, {
    id: text,
    text: get_collapser_sign(open),
  })

  section_header.addEventListener('click', () => {
    open = !open
    collapser.textContent = get_collapser_sign(open)
    const to_collpase = document.getElementById(collapsible)
    to_collpase.classList.toggle('none')
    section_header.classList.toggle('mb80')
  })
}

const create_set = (name, sets_container, { is_last, with_label } = {}) => {
  const set = create(`set_${name}`, sets_container)
  set.className = !is_last ? 'mb100' : ''
  const set_title = create('set_title', set, { text: name, id: name })
  set_title.style.boxShadow = '0px 15px 25px -20px rgba(0,0,0,0.2)'
  with_label && create_type_label('set', set_title, name)
  return set
}

const create_subsets = (subsets, set, name) => {
  const subsets_container = create('subsets_container', set, { id: name })

  entries(subsets).forEach(([name, properties]) => {
    if (name === '_type') return

    const subset = create('subset', subsets_container, { classe: name })
    const subset_title = create('subset_title', subset, { text: name, id: name })
    create_type_label('subset', subset_title, name)

    const properties_container = create('properties_container', subset, { id: name })
    create_properties(properties, properties_container)

    subset_title.addEventListener('click', () => {
      const { classList } = properties_container
      const visible = classList.contains('flex')
      classList.replace(visible ? 'flex' : 'none', visible ? 'none' : 'flex')
      subset_title.classList.toggle('indigo4')
    })
  })
}

const create_properties = (properties, container) => {
  entries(properties).forEach(([name, classes], i) => {
    if (name === '_type') return

    const property = create('property', container, { id: name })
    property.classList.add(`p${i % 2 ? 'l' : 'r'}25`)
    create('property_title', property, { text: name, id: name })
    create_classes(classes, property, { fixed_height: true })
  })
}

const create_classes = (classes, container, { fixed_height } = {}) => {
  const classes_container = create(`classes_container`, container)
  classes_container.classList.add(fixed_height ? 'h300' : 'mt65')
  entries(classes).forEach((classe, i) => {
    const is_last = i === entries(classes).length - 1
    create_classe(classe, classes_container, is_last)
  })
}

const create_classe = ([key, rule], container, is_last) => {
  const formatted_key = format_key_to_case(_typecase, key)
  const text = `.${formatted_key} { ${rule} }`
  const classe = create(`classe_${key}`, container, { text, id: key })
  !is_last && classe.classList.add('mb15')
}

const create_custom_classes_set = sets_container => {
  if (!Object.values(_custom_classes).length) return
  const custom_classes_set = create_set('custom', sets_container, { is_last: true })
  create_classes(_custom_classes, custom_classes_set)
}

const create_type_label = (text, container, name) => {
  create('type_span', container, { text, id: name, type: 'span' })
}

const get_collapser_sign = open => (open ? '-' : '+')

const elements_style = {
  section_header: 'flex jc_between fs60 sans_serif grey5 hover_indigo3 c_pointer',
  type_span: 'ml30 pv5 ph15 ls3 bg_grey1 grey5 uppercase fs12',
  colors_sheet: 'pa50 ba monospace b_grey1',
  colors_blocks: 'flex flex_wrap',
  color: 'flex flex_column mb60 fs13 c_pointer',
  tint: 'h70 mb10',
  classes_sheet: 'pa50 b_grey1 ba grey5 sans_serif fs15',
  set_title: 'fs40 bb b_grey2 pb30 mb20 grey6 monospace',
  subsets_container: 'fs25',
  subset: 'bb b_grey1',
  subset_title: 'pv30 c_pointer hover_indigo3 anim_color',
  properties_container: 'none flex_wrap mt10',
  property_title: 'fs20',
  property: 'fs14 mb50 mt10 w50p',
  classes_container: 'mt25 monospace bg_grey1 grey9 pa30 of_scroll ws_pre',
}
