import "../css/style.css";
const DOMSelectors = {
    form: document.querySelector("#form"),
    ChampName: document.querySelector(".Champ-Name"),
    ChampImage: document.querySelector("#ChampImage"),
    ChampTitle: document.querySelector("#ChampTitle"),
    gallery: document.querySelector("#gallery")
};

function card(Champ) {
    DOMSelectors.gallery.insertAdjacentHTML(
        "beforeend",
        `<div id="gall">
            <h2 class="card-title">${Champ.ChampName.value}</h2>
            <img src="${Champ.ChampImage.value}" alt="Champion Image" class="card-image"/>
            <h3 class="card-price">${Champ.ChampTitle.value}</h3>
            <button>dies</button>
        </div>`
    );
};

function remove(){
    let buttons = document.querySelectorAll("button")
    buttons.forEach((btn)=>
    btn.addEventListener("click", function(event){
        btn.parentElement.remove();
    })
    );
}
DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    card(DOMSelectors);
    clearFields();
    remove();
});
