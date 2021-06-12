import 'ress'

import Navigo from 'navigo'
import basicGeometries from './src/pages/basic-geometries'

const router = new Navigo('/threes')

router.on('/basic-geometries', basicGeometries)

router.resolve()