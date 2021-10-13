/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return promise.then((value)=> transformer(value))
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
  return numberPromise
    .then((res)=>{
      if (!isNaN(res)) {
        return res*res
      }
      else{
        throw(`Cannot convert '${res}' to a number!`)
      }
    });
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){
  return squarePromise(promise)
    .catch(()=>{
      return new Promise((res) =>{
        res(0)
      })
    })
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return promise.then(
    (ans) => {
      return new Promise((resolve,reject) =>{
        reject(ans)
      })
    },
    (err) => {
      return new Promise((resolve, reject)  =>{
        resolve(err)
      })
    }
)};
/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};