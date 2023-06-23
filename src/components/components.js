


/**
 * Generates a unique identifier (UID) using a random string of alphanumeric characters.
 *
 * @returns {string} The generated unique identifier.
 */
const generateUid = () => {
  const uid =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  return uid;
};

/**
 * Gets the expiration date for a cookie.
 *
 * @returns {Date} The expiration date for the cookie.
 */
const getExpireDate = () => {
  const date = new Date();
  date.setTime(date.getTime() + 50 * 60 * 1000);
  return date;
};



export { generateUid, getExpireDate };