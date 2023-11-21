import "../css/style.css";
import {Lux} from "./skins.js";

const DOMSelectors = {
    ChampName: document.querySelector(".SkinName"),
    ChampIMG: document.querySelector(".img"),
    ChampPrice: document.querySelector(".Price"),
    ChampOp: document.querySelector(".MyOpinion"),
    PasP: document.querySelector(".PPink"),
    PasB: document.querySelector(".PBlue"),
};
Lux.forEach((Champ) => {
 DOMSelectors.gallery.insertAdjacentHTML(
        "beforeend",
        `<div id="gallery">
            <h2 class="SkinName">${Champ.ChampName.value}</h2>
            <img src="${Champ.ChampIMG.value}" alt="Champion Image" class="img"/>
            <h3 class="Price">${Champ.ChampPrice.value}</h3>
            <h3 class="MyOpinion">${Champ.ChampOP.value}</h3>
            <button>dies</button>
        </div>`
 )});


function pas(){

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