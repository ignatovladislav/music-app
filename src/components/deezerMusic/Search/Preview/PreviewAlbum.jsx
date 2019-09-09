import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

export class Container extends Component {
    handleClick = (e) => {
        this.props.history.push(`/album/${e.target.id}`)
    }
    render() {
        const { preview_album, data } = this.props;
        const location = this.props.history.location.pathname.split('/')[2]
        return (
            <div className='search_container_item'>         
                <Link to={`/${location}/${data}`}><h3>Album ></h3></Link>
                <div className='search_container_item_artist'>
                {
                    preview_album ? preview_album.slice(0, 5).map((el, index) => {
                        return (
                            <div className='search_container_index' key={el.id} id={el.id} onClick={this.handleClick}>
                                <div className='search_container_index_item' id={el.id} >
                                    <img id={el.id} src={el.cover_medium} alt='exec' />
                                </div>
                                <div className='search_container_index_item' id={el.id}   >
                                    <h4 id={el.id}>{el.title}</h4>
                                    <p id={el.id}>{el.artist.name}</p>
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

const PreviewAlbum = withRouter(Container);

export default PreviewAlbum;