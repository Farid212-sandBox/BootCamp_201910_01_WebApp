console.table(data);
var shop = document.getElementById("shop");

data.map((el, key)=>{
    shop.innerHTML += `
            <li class="card" key="${key}">
                <img class="card-image" src="${el.imageUrl}"/>
                <h2 class="card-title">${el.name}</h2>
                <p class="card-subtitle">${el.rarity}</p>
            </li>`
}).join("");