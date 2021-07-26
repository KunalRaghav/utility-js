It’s time to get our hands dirty with Javascript. Now that you have heard about TDD, let see if we can transfer our learning to another world of Javascript. 

________________________________

# Setup and Getting Started

We have created a dummy project for you. You’ll need `nodejs` pre installed to run this. Please check if it's installed by running `which node` on your terminal which should give you the path of `node`. If instead it comes up with a message like `node not found` then you should look online on how to install node. As such `brew install node` should work (if you're using Mac).

_________________________________

# Running tests

After this, run the `./go.sh` this should install any dependencies and then run the test. You should see one failing test and one passing test. Its good to get used to knowing how a passing/failing test looks with a particular tooling. Fix the test and move on to the next step.

_________________________________

# About the assignment

- In this assignment, we want you to understand that loops are an imperative way of programming. Usual use cases of loops can be classified as
	- Converting one collection to another collection - Typical use of map, return type is collection
	- Getting a subset of a collection - Typical use of filter, return type is collection.
	- Converting collection to a value - Typical use of reduce, return type maybe not a collection. 

## Keep in mind

- We want you to TDD and use Javascript to implement these functions. 
- Avoid using loops in your implementation as much as possible. 
	- Recursion is your friend
	- You can reuse a function that you have written yourself
- Make sure you have small commits (after each passing test and refactoring as necessary)

## Functions to implement

- head - returns first element
    - e.g. `head([1,2,3])` should be `1`
    - e.g `head([])` should be `null` or `undefined`
- tail  - returns everything except first element
    - e.g. `tail([1,2,3])` should be `[2,3]`
    - e.g `tail([])` should be `[]`
- map
    - e.g `map([], cube)` should give `[]`
    - e.g `map([1,2,3], identity)` should give `[1,2,3]`
    - e.g.`map([1,2,3], cube)` should give `[1,8,27]`
    - e.g. `map([a{x : 10}],someObject => someObject.x + 1)`  -> `[11]`
        - where  `identity` and `cube` are functions
- filter
    - e.g `filter([], x => true)` should give `[]`
    - e.g. `filter([1,2,3],x => true)` should give `[1,2,3]`
    - e.g. `filter([1,2,3],x => false`) should give `[]`
    - e.g. `filter([1,2,3],x => x > 1`) should give `[2,3]`
    - e.g. `filter(['a','B','c','D'], filterUpperCase)` should be `[B,D]`
- reduce
    - e.g. `reduce([],(x,y)=>x+y)` should be undefined
    - e.g. `reduce([],v(x,y)=>x+y,10)` should be 10
    - e.g. `reduce(['a','b','c'],(x,y)=>x+y)` should be `abc`
    - e.g. `reduce(['a','b','c'],(x,y)=>x+y,’z’),` should be `zabc`
- max
    - e.g. `max([1,2,3,4])` should be `4`
- min
    - same as above... return `1`
