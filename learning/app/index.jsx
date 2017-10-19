import React from 'react'
import { render } from 'react-dom'
import {hashHistory} from 'react-router'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import Home from './containers/Home'
import RouteMap from './router/routeMap'

import './static/css/common.less'
import './static/css/iconfont.css'

const store = configureStore()

render(
    <Provider store={ store }>
        <RouteMap history={hashHistory} />
    </Provider>,
    document.getElementById('root')
)
