import React from 'react'

export const CountryChart = props => {
  const handleClick = e => {
    props.history.push(`/expore/${e.target.id}`)
  }
    return (
      <div className='explore_container_content country_top_charts'>
        <div id='worldwide' className='country_top_charts explore_item worldwide_gr' onClick={handleClick} >
          Worldwide
        </div>
        <div id='ukraine' className='country_top_charts explore_item ukraine_gr' onClick={handleClick} >
          Ukraine
        </div>
        <div id='usa' className='country_top_charts explore_item usa_gr' onClick={handleClick} >
          USA
        </div>
        <div id='uk' className='country_top_charts explore_item uk_gr' onClick={handleClick} >
          UK
        </div>
      </div>
    )
}