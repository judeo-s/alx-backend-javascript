/**
 * Function that returns a resolved promise
 * @param {*} firstName 
 * @param {*} lastName 
 * @returns 
 */
export default function signUpUser(firstName, lastName) {
    return Promise.resolve({ firstName, lastName });
}