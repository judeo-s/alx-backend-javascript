import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

/**
 * Function that returns a promise with an array of objects
 * @param {*} firstName 
 * @param {*} lastName 
 * @param {*} fileName
 * @returns 
 */
export default async function handleProfileSignup(firstName, lastName, fileName) {
    const handlePromise = (promise) => promise
      .then((result) => ({ status: 'fulfilled', value: result }))
      .catch((error) => ({ status: 'rejected', error: `Error: ${error.message}` }));
  
    const promises = [
      handlePromise(signUpUser(firstName, lastName)),
      handlePromise(uploadPhoto(fileName)),
    ];
  
    return Promise.all(promises);
  }
