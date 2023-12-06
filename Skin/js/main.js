
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

/* function card() {
    Luxskins.forEach((Lux) => {
        DOMSelectors.gallery.insertAdjacentHTML(
            "beforeend",
            `<div class="gall">
            <h2 class="SkinName">${Lux.SkinName}</h2>
            <img src="${Lux.img}" alt="Champion Image" class="img"/>
            <h3 class="Price">${Lux.Price}</h3>
            <h3 class="MyOpinion">${Lux.MyOpinion}</h3>
        </div>`
        )
    })
}
card() */
 

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
 function filters() {
    let buttons = document.querySelectorAll(".btn")
    buttons.forEach((btn) => btn.addEventListener("click", function () {
        let rarity = btn.textContent.toLowerCase()
        let newArr = LuxSkins.filter((Lux) => Lux.rank.includes(rarity))
        document.querySelector(".gallery").innerHTML = ""
        populate(newArr)
    }))
} 

/* function rare() {
    document.querySelector("#Rare")
    Rare.addEventListener("click", function () {
        let rare = LuxSkins.filter((Lux) => Lux.rank.includes('rare'))
        document.querySelector(".gallery").innerHTML = ""
        populate(rare)
    })
}
function epic() {
    document.querySelector("#Epic")
    Epic.addEventListener("click", function () {
        let epic = LuxSkins.filter((Lux) => Lux.rank.includes('epic'))
        document.querySelector(".gallery").innerHTML = ""
        populate(epic)
    })

}
function legendary() {
    document.querySelector("#Legendary")
    Legendary.addEventListener("click", function () {
        let legendary = LuxSkins.filter((Lux) => Lux.rank.includes('legendary'))
        document.querySelector(".gallery").innerHTML = ""
        populate(legendary)
    })

}
function mythic() {
    document.querySelector("#Mythic")
    Mythic.addEventListener("click", function () {
        let mythic = LuxSkins.filter((Lux) => Lux.rank.includes('mythic'))
        document.querySelector(".gallery").innerHTML = ""
        populate(mythic)
    })

}
function ultimate() {
    document.querySelector("#Ultimate")
    Ultimate.addEventListener("click", function () {
        let ultimate = LuxSkins.filter((Lux) => Lux.rank.includes('ultimate'))
        document.querySelector(".gallery").innerHTML = ""
        populate(ultimate)
    })

}
function all() {
    document.querySelector("#All")
    All.addEventListener("click", function () {
        let all = LuxSkins.filter((Lux) => Lux.rank.includes('all'))
        document.querySelector(".gallery").innerHTML = ""
        populate(all)
    })

} */

populate(LuxSkins)
filters() 
changetheme()
/* rare()
epic()
mythic()
legendary()
ultimate()
all()
 */


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