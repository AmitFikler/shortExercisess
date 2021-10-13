/**
 * 
 * EXERCISE 1
 * 
 * @param {Promise} promise 
 * @param {function} asyncTransformer 
 */
function flatMapPromise(promise, asyncTransformer){
  return new Promise((resolve, reject) => {
    promise
      .then((ans) =>{
        resolve(asyncTransformer(ans))})
      .catch((err)=> reject(err))
        
    });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise} firstPromise 
 * @param {function} slowAsyncProcess 
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess){
  return firstPromise.then((value)=>{
    return slowAsyncProcess(value)
  });
}

/**
 * 
 * EXERCISE 3
 * 
 * @param {function} getUserById 
 * @param {function} getOrganizationById 
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById){
  return function getUserByIdWithOrganization(userId){
    return getUserById(userId).then(userObj =>{
      if (userObj){
        return getOrganizationById(userObj['organizationId']).then(orgObj => {
          userObj.organization = orgObj
          return userObj
        })
      }
    })
  };
}


module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};