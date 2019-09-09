import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

export class Container extends Component {
    handleClick = (e) => {
        this.props.history.push(`/artist/${e.target.id}`)
    }
    render() {
        const { preview_artist, data } = this.props;
        const location = this.props.history.location.pathname.split('/')[2]
        return (
            <div className='search_container_item'>
                <Link to={`/${location}/${data}`}><h3>Artist ></h3></Link>
                <div className='search_container_item_artist'>
                {
                    preview_artist ? preview_artist.slice(0, 5).map(el => {
                        return (
                            <div className='search_container_index' key={el.id} id={el.id} onClick={this.handleClick}> 
                                <div className='search_container_index_item' id={el.id}>
                                    <img src={el.picture_medium} alt='exec' id={el.id}/>
                                </div>
                                <div className='search_container_index_item' id={el.id}>
                                    <h4 id={el.id}>{el.name}</h4>
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

const PreviewArtist = withRouter(Container)

export default PreviewArtist