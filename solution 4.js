
var names = ["John", "Jane", "Joe", "Jack"];
function func(name){
for (var i = 0; i < name.length; i++) {
  if (name[i].charAt(0).toLowerCase() == 'j') {
    console.log("Goodbye " + name[i]);
  } else {
    console.log("Hello " + name[i]);
  }
}
}
func(names);