function loadScript(src,callback){
    var script=document.createElement("script");
    script.src=src;
    script.onload=function(){
        console.log("Loaded script with src: "+src)
    }
    document.body.appendChild(script)
}
function hellow(){
    alert('Hellow World!');

}
function goodMorning(){
    alert('goodMorning')
}
loadScript()