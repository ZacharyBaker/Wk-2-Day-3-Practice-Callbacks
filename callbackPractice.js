/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){alert(thingToSay);});
   

and what you should write is the sayHi function that makes the code above work, 
    
    
   function sayHi(str, cb){
    cb(str);
   }


   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
     
     
  
    
*/



  //Code Here for first
  
 function first(arr, cb){
   cb(arr[0]);
 } 
  

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last

function last(arr, cb){
  cb(arr[arr.length - 1]);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});










/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply
function multiply(num1, num2, cb){
  cb(num1 * num2);
}


multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains
function contains(arr, item, cb){
  var result;
  for (var i = 0; i < arr.length; i++){
    if (arr[i] === item){
    return cb(true);
    }
  } 
  cb(false);
}



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Colt', 'Colt', 'Colt', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq
function uniq(arr, cb){
  arr.sort();
  for (var i = 0; i < arr.length; i++){
    if (arr[i] === arr[i + 1]){
      arr.splice(i+1, 1);
    }
  }
  cb(arr);
}


//-----------------------------------------
// function uniq(arr, cb){
//  var newArr = [];
//   for (var i =arr.length - 1; i > 0; i--){
//     for (var j = arr.length - 2; j > 0; j--){
//       if (arr[i] === arr[j]){
//         arr.splice(j, 1);
//       }
//     }
//   }
//   newArr = arr;
//   cb(newArr);
// }
//--------------------------------------------

function uniq(arr, cb){
  var newArr = [];
  for (var i = 0; i < arr.length; i++){
    if (newArr.indexOf(arr[i]) === -1){
      newArr.push(arr[i]);
    }
  }
  cb(newArr);
}




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each

function each(arrNam, cb){
  for (var i = 0; i < arrNam.length; i++){
    cb(arrNam[i], i);
  }
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById
function getUserById(arr, varId, cb){
  for (var i = 0; i < arr.length; i++){
    if (arr[i].id === varId){
     return cb(arr[i]);
    }
  }
}


var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});


//---------------------------------------------

var animal = {
  name: "linx",
  sayName: function(greeting){
    alert(greeting + this.name);
  }
};

