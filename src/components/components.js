

  
  const generateUid = () => {
    const uid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return uid;
  }
  // funtion to to make a expirate date of 1 hour and return it
    const getExpireDate = () => {
    const date = new Date();
    date.setTime(date.getTime() + (50 * 60 * 1000));
    return date;
    }

  

  export { generateUid,getExpireDate };