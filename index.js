const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(string){
    return cats.push(string);
}
function destructivelyPrependCat(string){
    return cats.unshift(string);
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
}
function appendCat(string){  
    const newArray = [...cats];
    newArray.push(string);
    return newArray;
}
function prependCat(string){
    const newArray = [... cats];
    newArray.unshift(string);
    return newArray;
}
function removeLastCat(){
    const newArrray = [... cats];
    newArrray.pop();
    return newArrray;
}
function removeFirstCat(){
    const newArrray = [... cats];
    newArrray.shift();
    return newArrray;
}