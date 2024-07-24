//Three handlers to the function
export function handleResponseFromAPI(promise){
  return promise
	.then(() => ({ status: 200, body: 'success' }))
	.catch(() => new Error())
	.finally(() => console.log('Got a response from the API'));
}
