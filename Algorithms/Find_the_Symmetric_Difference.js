function sym(args) {

//create a 3D array with all arguments passed from args

var array3D = [];

for(var i=0; i<arguments.length; i++){
  array3D.push(arguments[i]);
}




//The function that finds the symmetrical difference between two arrays

function getDifference(a,b){

    var a = [...new Set(a)];
    var b = [...new Set(b)];
    var c = a.concat(b);
    var d =[];
  
  
    for( var j = 0; j < c.length ;j++){
      if (c.slice(0,j).concat(c.slice(j+1)).includes(c[j])==false){
        d.push(c[j]);
      } 
    }
    return d.sort();
  }

  
//Looping trought the arraylist list until reach the final symmetricall difference

while(array3D.length>1){

  var first = array3D[0];
  var second = array3D[1];
  var result = getDifference(first,second);
  findDifference()

}

//The function find difference takes the two first elements of the 3D array and convert to one with the symetrical difference.

function findDifference(){
  array3D.shift()
  array3D.shift()
  array3D.unshift(result)
}



//This is just to convert the 3D array to a 2D array
var symmetricDifference = array3D[0];








//Get final result

return symmetricDifference

}

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));