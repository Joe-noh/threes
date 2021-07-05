function toKebab(str: string) {
  return str.split('').map((char, index) => {
    if (char.toUpperCase() === char) {
      return `${index !== 0 ? '-' : ''}${char.toLowerCase()}`
    } else {
      return char
    }
  }).join('');
}

const labels = [
  'BasicGeometries',
  'Suzanne',
  'Clock',
  'Bone',
  'Can',
  'Cloth',
  'ToonShader'
]

export const routes = labels.map(label => {
  return { path: `./${toKebab(label)}`, label }
})
