let fruits = ["apple", "banana"];

console.log(fruits); // return apple, banana


// Push = Add an item to the end of an Array


function addNewFruit(fruit){
    fruits.push(fruit);
    console.log(fruits); // return apple, banana, orange
}

addNewFruit("orange")


// forEach = Loop over an Array


fruits.forEach((item, index)=>{
    console.log(index, item); // 0 apple, 1 banana, 2 orange
})


// Pop = delete a last item of an Array


function removeLastFruit(){
    fruits.pop();
    console.log(fruits); // return apple, banana
}

removeLastFruit();


// Shift = Remove an item from the beginning of an Array


function removeFirstFruit(){
    fruits.shift();
    console.log(fruits); // return banana
}

removeFirstFruit();


// Unshift = Add an item in the beginning of Array


function addFruit(fruit){
    fruits.unshift(fruit);
    console.log(fruits); // return strawberry, banana
}

addFruit("Strawberry");


// indexOf = Find the index of an item in the Array


function findBananaPosition(){
    console.log(fruits.indexOf("banana")); // return 1
}

findBananaPosition()


// Splice = Remove an item by index position


function removeIndex(){
    
    fruits.splice(1); // will remove banana
    console.log(fruits); // strawberry
}

removeIndex();

function removeVegetables(){
    let vegetables = ["carrot", "rice", "potato"];
    
    let pos = 1;
    let n = 2;

    vegetables.splice(pos, n);

    // this is how to remove items, n defines the number of items to be removed,
    // starting at the index position specified by pos and progressing toward the end of array.

    console.log(vegetables); // return carrot

    
}

removeVegetables()


// Slice = It will copy an array inside other.

const copyFruits = fruits.slice();
console.log(copyFruits); // fruits


