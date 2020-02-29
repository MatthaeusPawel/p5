
function check_array_identity(v, w){
  var v_length = v.length;

  if (v_length != w.length)
    return false;

  for (var k = 0; k < v_length; k++)
    if (v[k] != w[k])
      return false

  return true
}

function check_array_array_identity(A, v){

  var k = 0;

  for (k = 0; k < A.length; k++)
    if (check_array_identity(A[k], v))
      return true;

  return false;
}


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
