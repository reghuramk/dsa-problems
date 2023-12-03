const duplicates = (dataSet) => {
    const dupArr = new Set();
  
    for (const item of dataSet) {
      if (dupArr.has(item)) {
        return true; 
      } else {
        dupArr.add(item);
      }
    }
  
    return false; 
  };
  
  module.exports = { duplicates }