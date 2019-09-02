export const arrayClassName = ['transfile', 'tranquil', 'red_ocean', 'shahabi', 'grey', 'blue', 'sweet_morning'];


export const addClass = payload => {
  if(payload !== undefined) {
    // console.log(payload)
    return payload = payload.map(element => {
      
      let className = random(1, 7)
      return element.className = arrayClassName[className]
    })
  }
    //
    // })
  }
  
  export const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
