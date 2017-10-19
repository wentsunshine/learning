import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HomeHeader extends React.Component{
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="clear-fix" id="home-header">
                <div className="float-left home-header-left">
                    <span>{this.props.cityName}</span>
                    &nbsp;
                    <i className="iconfont icon-angle-down"></i>
                </div>
                <div className="float-right home-header-right">
                    <i className="iconfont icon-user"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-containers">
                        <i className="iconfont icon-tubiao17"></i>
                        <input type="text" placeholder="请输入关键字" />
                    </div>
                </div>

            </div>


        )
    }
}

export default HomeHeader