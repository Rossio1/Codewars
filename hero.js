// Assuming he's gonna grab a specific given number of bullets and move forward to fight
// another specific given number of dragons, will he survive?









function hero(bullets, dragons){
if(bullets < dragons * 2){
return false
}
return true
}







// it takes 2 bullets to kill 1 dragon, we know he carries x amount of bullets,
// we know there are y amount of dragons, how do we know we saved the castle
