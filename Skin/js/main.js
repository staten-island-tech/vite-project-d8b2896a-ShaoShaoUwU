import "../css/style.css";
import { LuxSkins } from "./skins.js";

const DOMSelectors = {
    PasP: document.querySelector(".PPink"),
    PasB: document.querySelector(".PBlue"),
};
function populate(arr){
    arr.forEach((Lux) => {
    gallery.insertAdjacentHTML(
           "beforeend",
           `<div id="gallery">
               <h2 class="SkinName">${Lux.SkinName}</h2>
               <img src="${Lux.img}" alt="Champion Image" class="img"/>
               <h3 class="Price">${Lux.Price}</h3>
               <h3 class="MyOpinion">${Lux.MyOpinion}</h3>
               <button>dies</button>
           </div>`
    )});}


populate(LuxSkins)
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