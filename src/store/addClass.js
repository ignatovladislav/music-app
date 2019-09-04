export const arrayClassName = ['transfile', 'tranquil', 'red_ocean', 'shahabi', 'alihossein', 'sweet_morning', 'politics', 'blue'];


export const addClass = payload => {
  if (payload !== undefined) {
    payload = payload.data;
    return payload = payload.map(element => {
      
      let className = random(0, 7)
      return element.className = arrayClassName[className]
    })
  }

}
  
export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
