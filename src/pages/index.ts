function linkTitle(kebab) {
  return kebab.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

function createLink(name) {
  const link = document.createElement('a')
  link.href = `/threes/${name}`
  link.text = linkTitle(name)

  const listItem = document.createElement('li')
  listItem.appendChild(link)

  return listItem
}

export default function() {
  const container = document.querySelector('#app')
  const list = document.createElement('ul')
  list.style.padding = '2rem'

  const routes = [
    'basic-geometries'
  ]

  routes.forEach(name => {
    list.appendChild(createLink(name))
  })

  container.appendChild(list)
}