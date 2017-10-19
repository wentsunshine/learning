import React from 'react'
import { Router, IndexRoute, Route } from "react-router"

import App from '../containers'
import City from '../containers/City'
import Detail from '../containers/Detail'
import Home from '../containers/Home'
import Search from '../containers/Detail'
import User from '../containers/User'
import NotFound from '../containers/404'

class RouteMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home} />
                    <Route path="/city" component={City} />
                    <Route path="/user" component={User} />
                    <Route path="/detail/:id" component={Detail} />
                    <Route path="/search/:type(/:keyword)" component={Detail} />
                    <Route path="*" component={NotFound} />
                </Route>
            </Router>

        )
    }
}

export default RouteMap