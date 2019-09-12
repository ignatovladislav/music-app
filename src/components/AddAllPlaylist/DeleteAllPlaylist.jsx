import React, { Component } from 'react'

export default class DeleteAllPlaylist extends Component {
    render() {
        const { id, deletePlaylist } = this.props;
        return (
            <div className='add_all' id={id} onClick={deletePlaylist}>
                - Delete all
            </div>
        )
    }
}