import React from "react"
import PuerRenderMixin from 'react-addons-pure-render-mixin'



class City extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PuerRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (

            <div>
                <h1>city</h1>
            </div>
        )
    }
}

export default City