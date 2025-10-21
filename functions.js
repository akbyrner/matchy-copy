/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(array, string) {
    for (i = 0; i < array.length; i++) {
        if (array[i].name.toLowerCase() === string.toLowerCase()){
        return array[i];
    }
}
 return null;
}
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {
    for (i = 0; i < animals.length; i++)
        if (name === animals[i].name) {
            animals[i] = replacement;
            return;
        }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
    for (i = 0; i < animals.length; i++){
        if (name === animals[i].name){
            animals.splice(i, 1);
        return

        }
    }
}
//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
    // Check if animal has name and species properties with length > 0
    if (animal.name.length === 0 || animal.species.length === 0) {
        return false;
    }
    
    // Check if animal has unique name
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name === animal.name) {
            return false;
        }
    }
    
    // Add the animal to the array
    animals.push(animal);
    return true;
}
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}