import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class PreviewArtist extends Component {
    state = { redirect: false, name: null }

    handleClick = (e) => {
        this.setState({ redirect: true, name: e.target.id })
    }
    render() {
        const { preview_artist } = this.props;
        const { redirect, name } = this.state;
        
        if ( redirect && name) return <Redirect to={`/user/artist/${name}`} />
        return (
            <div className='search_container_item'>
                <h3>Playlist ></h3>
                <div className='search_container_item_artist'>
                {
                    preview_artist ? preview_artist.slice(0, 5).map(el => {
                        return (
                            <div className='search_container_index' key={el.id} id={el.id} onClick={this.handleClick}> 
                                <div className='search_container_index_item' id={el.id}>
                                    <img src={el.picture_medium} alt='exec' id={el.id}/>
                                </div>
                                <div className='search_container_index_item' id={el.id}>
                                    <h4 id={el.id}>{el.title}</h4>
                                </div>
                            </div>
                        )
                    }) : null
                }
                </div>
            </div> 
        )
    }
    
}