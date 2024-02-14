


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

/**
 * Fetches data from a specified path with the given email.
 * @param {string} path - The API path to fetch data from.
 * @param {string} email - The email parameter to include in the request body.
 * @param {string} method - The method to use for the request.
 * @returns {Promise<any>} - A Promise that resolves to the JSON response body if the status is 200,
 * otherwise resolves to the status code. Returns null if an error occurs.
 */
const fetchData = async (path, email , method) => {
  try {
    const response = await fetch(`/api/${path}`, {
      method: `${method}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: `email=${email}`,
    });

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      return response.status;
    }
  } catch (error) {
    console.error(`Error fetching ${path}:`, error);
    return null;
  }
};





export { generateUid, getExpireDate , fetchData};