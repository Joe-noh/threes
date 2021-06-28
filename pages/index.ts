import { routes } from '../lib/routes'

const ul = document.createElement('ul')
const canvas = document.querySelector('canvas')!

routes.forEach(route => {
  const li = document.createElement('li')
  const a = document.createElement('a')

  a.href = `./${route.path}.html`
  a.textContent = route.label

  ul.appendChild(li).appendChild(a)
})

document.body.replaceChild(ul, canvas)
