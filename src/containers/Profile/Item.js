import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

export class Container extends Component {
    componentDidMount = () => {
        
    }
    render() {
        const { match } = this.props;
        console.log(match.url.split('/')[3])
        return (
            <div className='profile_item'>Item</div>
        )
    }
}

const Item = withRouter(Container);

export default Item;