/**
 * Function that returns a rejected promise
 * @param {*} fileName
 * @returns 
 */
export default function uploadPhoto(fileName) {
    return Promise.reject(new Error(`${fileName} cannot be processed`));
}