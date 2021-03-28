import './style.css'

import {dom, library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'

import {solid, brands} from './icons'

library.add(fas, fab)
dom.watch()

const app = document.getElementById('app')

const append = (item: string, set: string) => {
    const i = document.createElement('div')
    i.classList.add('icon')

    const ic = document.createElement('i')
    ic.classList.add(set, item)
    i.appendChild(ic)

    const t = document.createTextNode(item)
    i.appendChild(t)

    app.appendChild(i)
}

Array.prototype.filter.call(solid, (item: string) => append(item, 'fas'))
Array.prototype.filter.call(brands, (item: string) => append(item, 'fab'))