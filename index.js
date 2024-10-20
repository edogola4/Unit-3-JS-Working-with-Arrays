// Write your solution here!
let cats = ["Milo", "Otis", "Garfield", ]; // I defined cats using the let keyword .... const keyword once declared cannot be reassigned

// implementing the functions

//1 : destructivelyAppendCat(name)
function destructivelyAppendCat(name){
    cats.push(name); // This one will add a new cat at the end of the array
}


// destructivelyPrependedCat(name.)
function destructivelyPrependCat(name){
    cats.unshift(name); // adds a new cat list at the start/ beginning of an array
}


// .destructivelyremovelastcat().
function destructivelyRemoveLastCat(name){
    cats.pop(name); // removes the last item/cat from the array.

}


// . destructivelyremovefirstCat()
function destructivelyRemoveFirstCat(name){
    cats.shift(name); // removes the first cat from the cats array
}


// appendCats(name)
function appendCat(name){
    return [... cats, name] // used the spread operator(...). It returns a new array with the new cat at the end
}


// prependCat(name)
function prependCat(name){
    return [name, ... cats] // used the spread operator(...). It returns a new array with the new cat at the beginning
}

// removeLastCat.()
function removeLastCat(){
    return cats.slice(0, cats.length - 1); // returns a new array with the last cat removed
}



// removeFirstCat()
function removeFirstCat(){
    return cats.slice(1);
}