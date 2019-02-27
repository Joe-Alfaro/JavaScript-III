/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding happens when 'this' is in a global scope
* 2. implicit binding is when a method is invoked using dot notation
* 3. a new binding is when using .bind()
* 4. Explicit binding is when .call() or .apply() are specifically used
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const MyObject = function(attr) {
    this.name = attr.name;
    this.favActivity = attr.favActivity;
};
MyObject.prototype.doStuff = function() {
    console.log(`${this.name}'s favorite activity is ${this.favActivity}`);
};

// Principle 3

// code example for New Binding
let talking = function() {
    console.log(`My name is ${this.name}`);
}
talking = talking.bind({name: 'Bob'});
talking();

// Principle 4

// code example for Explicit Binding

const me = {name: 'Joe', favActivity: 'woodworking'};
MyObject.prototype.doStuff.call(me, me.favActivity);