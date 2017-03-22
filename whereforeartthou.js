function whatIsInAName(collection, source) {
    // What's in a name?
  var arr = [];
  // Only change code below this line

  var sourceKeys = Object.keys(source);
  arr = collection.filter(function(collectionItem) {

    function isPairMatchInCollectionItem(key) {
      return source[key] === collectionItem[key];
    }

    return sourceKeys.every(isPairMatchInCollectionItem);
  });

  // Only change code above this line
  return arr;
};

module.exports = whatIsInAName;