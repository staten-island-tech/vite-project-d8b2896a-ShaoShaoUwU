import "../css/style.css";
import { LuxSkins } from "./skins.js";

document. querySelector ("#change-theme"). addEventListener ("click", function (){
if (document.body.classlist.contains ("PasBlue")) {
document.body.classlist.add ("PasPink"); document.body.classlist.remove ("PasBlue");}
else {
document.body.classlist.add ("PasBlue"); 
document.body.classlist.remove("PasPink");
}
});
function populate(arr){
    arr.forEach((Lux) => {
    gallery.insertAdjacentHTML(
           "beforeend",
           `<div id="gall">
               <h2 class="SkinName">${Lux.SkinName}</h2>
               <img src="${Lux.img}" alt="Champion Image" class="img"/>
               <h3 class="Price">${Lux.Price}</h3>
               <h3 class="MyOpinion">${Lux.MyOpinion}</h3>
           </div>`
    )});}


populate(LuxSkins)

function filters(){
    let buttons = document.querySelectorAll(".btn")
    buttons.forEach((btn)=> btns.addEventListener("click", function() {
        let category = btn.textContent.toLowerCase()
        let newArr = items.filter((el)=>el.type.includes(category))
        document.querySelector("#gallery").innerHTML = ""
        populate(newArr)    
    }))
}
filters()

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