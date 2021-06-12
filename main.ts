import 'ress'

import Navigo from 'navigo'
import index from './src/pages/index'
import basicGeometries from './src/pages/basic-geometries'

const router = new Navigo('/threes')

router.on('/', index)
router.on('/basic-geometries', basicGeometries)

router.resolve()
