import React from 'react'

export const CountryChart = props => {
  // console.log(props)
  const handleClick = e => {
    props.history.push(`/expore/${e.target.id}`)
  }
    return (
      <div className='explore_container_content country_top_charts'>
        <div id='3155776842' className='country_top_charts explore_item worldwide_gr' onClick={handleClick} >
          Worldwide
        </div>
        <div id='1362526495' className='country_top_charts explore_item ukraine_gr' onClick={handleClick} >
          Ukraine
        </div>
        <div id='1313621735' className='country_top_charts explore_item usa_gr' onClick={handleClick} >
          USA
        </div>
        <div id='1111142221' className='country_top_charts explore_item uk_gr' onClick={handleClick} >
          UK
        </div>
      </div>
    )
}