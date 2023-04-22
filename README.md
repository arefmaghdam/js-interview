# js-interview

## 001
### Static Methods vs Normal Methods (ts)
#### Normal method
const obj1 = new Person("Alex")
const obj2 = new Person("Jorien")
obj1.print(); // Alex
obj2.print(); // Jorien

#### Static method:
Person.create(); // Creates an object of type Person
Person.create(); // Same as the above statement

## 003
### Call
`Call` changes the method's context

`Apply` is same as `Call`, except it accepts parameters as an array

`Bind` creates a method which is uses the object as its context permanently

