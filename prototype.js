//Prototypal Inheritance
var parent = {
  value: "parentValue",
  obj: {
    objValue: "parentObjValue"
  },
  walk: function () {
    console.log("walking");
  }
};

var child = Object.create(parent);
console.log("CHILD - child.value: ", child.value);
console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
console.log("Parent: ", parent);
console.log("Child: ", child);

child.value = "childValue";
child.obj.objValue = "childObjValue"; // Since the obj property is still not a property of child object and still requires
                      //the JS engine to walk up the chain in order to look it up.This obj value will actually get changed to
                      //the string childObjValue on the parent itself thus child.obj.objValue = parent.obj.objValue
console.log("Changed CHILD - child.value: ", child.value);
console.log("Changed CHILD - child.obj.objValue: ", child.obj.objValue);
console.log("PARENT - parent.value: ", parent.value);
console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
console.log("Parent: ", parent);
console.log("Child: ", child);

console.log("child.obj === parent.obj ? ",child.obj === parent.obj);
