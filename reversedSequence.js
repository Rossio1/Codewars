instructions:
Get the number n (n>0) to return the reversed sequence from n to 1.

Example : n=5 >> [5,4,3,2,1]



solutions:
const reverseSeq = n => {
const myArray = []
for(let i = n; i > 0; i--){
myArray.push(i)
}
  return myArray
}
