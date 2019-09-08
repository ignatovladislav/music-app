import React from 'react'

export const CountryChart = props => {
  const handleClick = e => {
    const country = e.target.className.split(' ')[3]
    props.history.push(`/${country}/${e.target.id}`)
  }
    return (
      <div className='explore_container_content country_top_charts'>
        <div id='3155776842' className='country_top_charts explore_item worldwide_gr worldwide' onClick={handleClick}>
          Worldwide
        </div>
        <div id='1362526495' className='country_top_charts explore_item ukraine_gr ukraine' onClick={handleClick} >
          Ukraine
        </div>
        <div id='1313621735' className='country_top_charts explore_item usa_gr usa' onClick={handleClick} >
          USA
        </div>
        <div id='1111142221' className='country_top_charts explore_item uk_gr uk' onClick={handleClick} >
          UK
        </div>
      </div>
    )
}