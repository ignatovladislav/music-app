export const arrayClassName = ['transfile', 'tranquil', 'red_ocean', 'shahabi', 'grey', 'blue', 'sweet_morning'];


export const addClass = payload => {
    return payload = payload.map(item => {
      let className = random(1, 7)
      return item.className = arrayClassName[className]
    })
  }
  
  export const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
