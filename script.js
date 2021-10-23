function btnclick(val){
    console.log(val)
    document.getElementById("screen").value+=val
}
function clearscr(val){
    document.getElementById('screen').value=""
}
function result(){
    var text= document.getElementById("screen").value
    var answer =eval(text)
    document.getElementById("screen").value=answer
}