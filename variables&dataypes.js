let a=null;
let b=345;
let c=true;
let d=BigInt("567")+BigInt("3");
let e="Sahil";
let f=Symbol("Im Coder")
let g
console.log(a,b,c,d,e,f,g);
console.log(typeof c)
// here key is item & rest of the stuff is objcts
const item={
    "Sahil":true,
    "Sunny":false,
    "You":undefined
}
console.log(item["Sahil"])
let boy1="promod"
let boy2="pratik"
let sentance= `${boy2} is a friend of ${boy1}`
console.log(sentance)

let name= "Sa hil"
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2,4))
console.log(name.replace("Sa","hi"))
for(let i=0;i<name.length;i++){
    console.log(i)
}