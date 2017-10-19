import React from "react"
import PuerRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


import HomeHeader from '../../components/HomeHeader'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PuerRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (

            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        userinfo:state.userinfo
    }
}
function mapDispatchToProps(){
    return{

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps

)(Home)