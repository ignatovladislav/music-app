import React, { Component } from 'react'

export default class AddAllPlaylist extends Component {
    render() {
        const { id, addPlaylist } = this.props;
        return (
            <div className='add_all' id={id} onClick={addPlaylist}>
                + Add all
            </div>
        )
    }
}