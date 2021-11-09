const objectName = {
         name: 'test',
         age: 21,
         country: 'Earth' 
     }; 
// expected output: // "name: test" // "age: 21" 

let obj = function(o){
   for(var object in o){
        return('name:' + o.name + ' age:' + o.age + ' ' + 'country:' + o.country);
   }
}

obj(objectName)
