module.exports = function getZerosCount(number) {
  // your implementation
    var result = 0;
    var aux_number = 1;
    //result += Math.floor(number/5);
    while(aux_number * 5 < number){
        aux_number *= 5;
        result += Math.floor(number/aux_number);
    }
    return result;
}
