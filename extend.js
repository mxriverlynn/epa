// extend a target object with the attributes
// of one or more source objects
module.exports = function(target, sourceList){
  var sources = Array.prototype.slice.call(arguments, 1);
  for (var i=0; i<sources.length; i++){
    var source = sources[i];
    for(var n in source){
      if (source.hasOwnProperty(n)){
        target[n] = source[n];
      }
    }
  }
  return target;
};
