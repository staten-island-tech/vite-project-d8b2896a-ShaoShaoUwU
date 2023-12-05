
import { LuxSkins } from "./skins.js";
import { DOMselectors } from "./dom.js";

function populate(arr) {
    arr.forEach((Lux) =>
        DOMselectors.gallery.insertAdjacentHTML(
            "beforeend",
            `<div class="gall">
               <h2 class="SkinName">${Lux.SkinName}</h2>
               <img src="${Lux.img}" alt="Champion Image" class="img"/>
               <h3 class="Price">${Lux.Price}</h3>
               <h3 class="MyOpinion">${Lux.MyOpinion}</h3>
           </div>`
        )
    );
}


function changetheme() {
    DOMselectors.Blue.addEventListener("click", function () {
        document.body.classList.add("Blue")
        document.body.classList.remove("Original")
        document.body.classList.remove("Pink")
    })
    DOMselectors.Pink.addEventListener("click", function () {
        document.body.classList.add("Pink")
        document.body.classList.remove("Original")
        document.body.classList.remove("Blue")
    })
    DOMselectors.Original.addEventListener("click", function () {
        document.body.classList.add("Original")
        document.body.classList.remove("Pink")
        document.body.classList.remove("Blue")
    })
}
/* function filters() {
    let buttons = document.querySelectorAll(".btn")
    buttons.forEach((btn) => btn.addEventListener("click", function () {
        let rarity = btn.textContent.toLowerCase()
        let newArr = LuxSkins.filter((Lux) => Lux.rank.includes(rarity))
        document.querySelector(".gallery").innerHTML = ""
        populate(newArr)
    }))
} */
function rare() {
    document.querySelector("#Rare")
    Rare.addEventListener("click", function () {
        const rare = LuxSkins.filter((Lux) => Lux.rank.includes(rare))
    })
}
function epic() {

}
function legendary() {

}
function mythic() {

}
function ultimate() {

}
function all() {

}

populate(LuxSkins)
/* filters() */
changetheme()
rare()
epic()
mythic()
legendary()
ultimate()
all()



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