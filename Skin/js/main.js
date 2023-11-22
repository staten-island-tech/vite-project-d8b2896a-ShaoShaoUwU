import "../css/style.css";
import { Lux } from "./skins.js";

const DOMSelectors = {
    PasP: document.querySelector(".PPink"),
    PasB: document.querySelector(".PBlue"),
};
Lux.forEach((Champ) => {
 DOMSelectors.gallery.insertAdjacentHTML(
        "beforeend",
        `<div id="gallery">
            <h2 class="SkinName">${Champ.SkinName}</h2>
            <img src="${Champ.img}" alt="Champion Image" class="img"/>
            <h3 class="Price">${Champ.Price}</h3>
            <h3 class="MyOpinion">${Champ.MyOpinion}</h3>
            <button>dies</button>
        </div>`
 )});


function Blue(){

};
DOMSelectors.form.addEventListener("click", function(event){

});


/* function remove(){
    let buttons = document.querySelectorAll("button")
    buttons.forEach((btn)=>
    btn.addEventListener("click", function(event){
        btn.parentElement.remove();
    })
    ); */

/* DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    card(DOMSelectors);
    clearFields();
    remove();
}); */