import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { addTrack } from '../../../../store/actions/userMusicActions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const Container = props => {
    const { preview_tracks, data } = props;
    const location = props.history.location.pathname.split('/')[2]
    console.log(props)
    const handleClick = e => {
        console.log(e.target.id)
    }
    return (
        <div className='search_container_item'>
            <Link to={`${location}/tracks`}><h3>Tracks ></h3></Link>
            {
                preview_tracks ? preview_tracks.slice(0, 5).map((el, index) => {
                    return (
                        <div className='search_container_index' key={el.id} id={el.id}>
                            <div className='search_container_index_item' >
                                { index + 1 }
                            </div>
                            <div className='search_container_index_item plus_icon' id={el.id} onClick={handleClick}>
                                +
                                {/* <FontAwesomeIcon icon={ faPlus } id={el.id} size='1x'  onClick={handleClick}/> */}
                            </div>
                            <div className='search_container_index_item'>
                                <img src={el.album.cover_small} alt='exec' />
                            </div>
                            <div className='search_container_index_item'>
                                {el.title}
                            </div>
                            <div className='search_container_index_item'>
                                {el.album.title}
                            </div>
                        </div>
                    )
                }) : null
            }
        </div> 
    )
}

export const PreviewTracks = withRouter(Container)


const mapStateToProps = state => {
    return {
        userMusic: state.userMusic
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addTrack: url => (dispatch(addTrack(url))),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewTracks)