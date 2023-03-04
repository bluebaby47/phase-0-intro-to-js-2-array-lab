// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.splice(0, 0, name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.splice(0, 1)
}

function appendCat(name){
    const array= [...cats]
    array.push(name)
    return array
}

function prependCat(name){
    const array= [...cats]
    array.splice(0, 0, name)
    return array
}

function removeLastCat(){
    return cats.slice(0, cats.length-1)
}

function removeFirstCat(){
    return cats.slice(1)
}