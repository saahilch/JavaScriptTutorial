console.log("log")
console.info("info")
console.warn("warn")
console.error("err")
console.assert("err"!=false)
console.assert("err"==false)
console.timeEnd("forLoop")
console.timeEnd("whileLoop")
for(let i=0;i<5;i++){
    console.log(233)
}
console.timeEnd("whileLoop")

let i=0;
while(i>=5){
    console.log(i)
}