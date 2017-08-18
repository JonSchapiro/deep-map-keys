const deepMapKeys = (obj, mod) => {
  if (obj === null || typeof obj !== 'object' && !Array.isArray(obj)) {
    throw new Error('You must provide initial argument as an object');
    return;
  }
  
  if (!mod || typeof mod !== 'function') {
    throw new Error('You must provide a modifier by which your keys will be changed');
    return;
  }

  function innerRoutine(obj, mod) {
    if (Array.isArray(obj)) {
        return obj.map(val => innerRoutine(val, mod));
    }
    if (obj != null && typeof obj === 'object') {
        return Object.keys(obj).reduce((accum, key) => {
            accum[mod(key)] = innerRoutine(obj[key], mod);
            return accum;
        }, { });
    }
    return obj;
  }

  return innerRoutine(obj, mod);
};

module.exports = deepMapKeys;

