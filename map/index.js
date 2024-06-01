let arr=[45,23,21]
let a= arr.map((value,index)=>{
    console.log(value,index)
    // here all the array +1 element & stores it into return 
    return  value +1
    //return value+index

})
console.log(a)
// array filter
let arr2=[46,13,10,50,90,70]
let a2=arr2.filter((a2)=>{
    return a2>10
})
console.log(a2,arr2)
 
let arr3=[1,2,3,4,5,5,6,7]
let a3=arr3.reduce((h1,h2)=>{
    // it Add index 0+1=1 & 1+index1 i.e=1+3
    return h1+h2
})
console.log(a3)
