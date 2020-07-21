import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchVisible } from '../actions/index'
import VisibleObjects from '../components/visible/VisibleObjects'
 
class VisibleContainer extends Component {
    
    componentDidMount() {
        this.props.fetchVisible()
    }
    
    render() {
        return (
            <div>
                <VisibleObjects visibleObjects={this.props.visibleObjects}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        visibleObjects: state.all
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchVisible: () => dispatch(fetchVisible())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(VisibleContainer);