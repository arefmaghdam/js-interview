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

## 004
![](./assets/json.jpg)

Encode: `JSON.stringify(obj);`
Decode: `JSON.parse(string);`

## 010
### Function

#### Use cases:
1. Define and call a function
2. Define and use in map function

#### Named Function
```js
function process(item) {
    ...
}
```

##### Examples
```js 
    // Define
    function process(item) {
        ...
    }

    // Call
    process(obj);

    // Use in map
    arr.map(process);
```
   
**Define and use in map function**

#### Arrow Function (lambda)
```js
(item) => {
    ...
}
```
##### Examples

```js 
    // Define
    const process = (item) => {
        ...
    }

    // Call
    process(obj);

    // Use in map
    // Solution 1
    arr.map((item) => {

    });

    // Solution 2
    arr.map(process);
```

#### Anonymous Function
```js
(name) {
    ...
}
```

##### Examples

```js 
    // Define
    const process = function(item) {
        ...
    }

    // Call
    process(obj);

    // Use in map
    // Solution 1
    arr.map(function(item) {

    });

    // Solution 2
    arr.map(process);
```