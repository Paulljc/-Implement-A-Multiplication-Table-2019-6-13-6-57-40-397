function createMultipleTable(start, end) {
  if(!isValid(start, end)){
    return null;
  }else{
    var table = getMultipleTable(start, end)
  }
  return table;
}

function isValid(start, end) {
  return start <= end && start > 0 && end < 1000;
}

function getMultipleTable(start, end) {
  var result = "";
  for (var i = start; i <= end; i++) {
    for (var j = start; j <= i; j++) {
      if(j < i){
        result += j + "*" + i + "=" + i * j + "\t";
      }else{
        result += j + "*" + i + "=" + i * j;
      }
    }
    result += "\n"
  }
  return result;
}

module.exports = {
  createMultipleTable,
  isValid,
  getMultipleTable
}