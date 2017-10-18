import React from "react"
import PuerRenderMixin from 'react-addons-pure-render-mixin'

import HomeHeader from '../../components/HomeHeader'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PuerRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (

            <div>
                <HomeHeader />
            </div>
        )
    }
}

export default Home