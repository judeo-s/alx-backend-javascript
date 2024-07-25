/**
 * Attaches handlers to a given promise to handle resolution, rejection, and logging.
 * @param {Promise} promise
 * @returns {Promise}
 */
import { uploadPhoto, createUser } from "./utils.js"

export default async function handleProfileSignup(){
  try{
    const values = await Promise.all([uploadPhoto(), createUser()]);
    console.log(values);
  }catch(err){
    console.log('Signup service failed', err);
  }
}