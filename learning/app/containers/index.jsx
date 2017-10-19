import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from '../util/localstore'
import {CITYNAME} from '../config/localStoreKey'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../actions/userinfo'

 class App extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            initDone:false
        }
    }

    render() {
        return (

            <div>{
                this.state.initDone ? this.props.children : <h1>loading....</h1>

            }</div>
        )
    }

    componentDidMount(){
        //获取位置信息
        let cityName = LocalStore.getItem(CITYNAME);
        if(cityName == null){
            cityName='杭州'
        }
        //触发action
        this.props.userInfoActions.update({
            cityName:cityName
        })
       /* setTimeout(() => {
            this.setState({
                initDone:true
            })
        },1000)*/
        this.setState({
            initDone:true
        })
    }
 }
//redux react 绑定
function mapStateToProps(state){
    return{

    }
}
function mapDispatchToProps(dispatch) {
    return{
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile,dispatch),//这里分发actions,传入reuders根据规则，store获取新的state，并将state传给组件，作为props
    }
}
 export default connect(
    mapStateToProps,
    mapDispatchToProps

)(App)