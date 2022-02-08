let i=0;
document.querySelector(".btn").addEventListener("click",changeColors);
function changeColors(){
    var colors=["yellow","red","blue","pink","darkblue","cyan","brown","orange","green","white","lightgreen"];
    document.querySelector(".container").style.backgroundColor=colors[i++%(colors.length)];
}