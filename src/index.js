
exports.min = function min (array) {
 if (array === undefined || array.length === 0){
  return 0
  } else {
  return Math.min.apply(null, array);
}
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0){
    return 0
   
   } else {
    return Math.max.apply(null, array);
   }
}

exports.avg = function avg (array) {
  var sum = 0;
  if (array === undefined || array.length === 0){
    return 0;
   } else {
for(var i = 0; i < array.length; i++){
    sum += array[i];
    };
   
    
    return sum/array.length;
     }
}
