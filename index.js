// function changeButtonStyle(){
//     button.style.backgroundColor = "red"
//     button.style.color = "white";
// }
// let button = document.querySelector("button");
// button.addEventListener("click", changeButtonStyle);

//view image that has disappear
function showItems(){
    let image = document.querySelector(".view");
    image.style.display = "block";
    let close1 = document.querySelector(".close1");
    close1.style.display = "block";
}

let open1 = document.querySelector(".open1");
open1.addEventListener("click", showItems);


function hideItems(){
    let imageone = document.querySelector(".view");
    imageone.style.display = "none";
    let hide =document.querySelector(".close1");
    hide.style.display="none";
}
// adding EventListener to the close button
let close2 = document.querySelector(".close1");
close2.addEventListener("click",hideItems);




