const formGuests = document.getElementById('guests');
const popUPAllergens = document.getElementById('popUPAllergens');
const scriptTag = document.getElementById("dataObject");
const body = document.getElementById("body");

const editQuantityGuests = (quantity) =>{
    
    if(quantity == "no"){
        formGuests.innerHTML =`<br><br>
        <h2>Estas seguro que no asistiras?</h2>
        <br>
        <button onclick='alert("omg")'>Si</button>`;
        return;
    }else if(quantity == 0){
         formGuests.innerHTML ="";
        return;
    }
    const object = JSON.parse(scriptTag.textContent);
    object.guestData.guests = [];
    formGuests.innerHTML ="<div class='col'>";
    for (let index = 0; index < quantity; index++) {
        const newGuest = `<div class="row">
        <input placeholder="Nombre Completo" name="name${index}" id="name${index}" type="text" class="wd-80">
        <br>
        <br>
        <button onclick="allAllergens(${index})" class="wd-60">Selecionar Alergenos</button>
    </div><br>`;
    formGuests.innerHTML += newGuest;
    object.guestData.guests.push({"name:": "","allergens":[]});
    scriptTag.textContent = JSON.stringify(object, null, 2);
    }
    formGuests.innerHTML += `</div><button onclick="save()">save</button>`;
    if(quantity > 0){
        document.getElementById('name0').value = object.guestData.name;
    }
}

const createAllergensPopUp = () =>{
    const object = JSON.parse(scriptTag.textContent);
    let options = `<form id="formAllergens" class="formAllergens">`;
    allergensData.forEach(element => {
        options +=`<label>
            <img src="${element.img}">
            ${element.name}
             <input type="checkbox" name="alergenos" value="${element.name}" class="allergensSelector">
        </label>`;
    });

    options +="<button onclick='closePopUp()'>Cerrar</button>";
    options +="</form>";
    popUPAllergens.innerHTML = options;

    const listAllernger = document.querySelectorAll('.allergensSelector');
    const guest = document.getElementById('allergensGuestNum').value;
    if(guest >=0){
        for (let index = 0; index < object.guestData.guests[guest].allergens.length; index++) {
        listAllernger.forEach(e =>{
           if(e.defaultValue == object.guestData.guests[guest].allergens[index]){
            e.checked = true;
           }
        });
        }
    }
    scriptTag.textContent = JSON.stringify(object, null, 2);
}

const allAllergens = (num) =>{
    event.preventDefault();
    popUPAllergens.classList.remove('hide');
    document.getElementById('allergensGuestNum').value = num;
    createAllergensPopUp();
}

const closePopUp = () =>{
    event.preventDefault();
    const object = JSON.parse(scriptTag.textContent);
    popUPAllergens.classList.add('hide');
    const listAllernger = document.querySelectorAll('.allergensSelector');
    let list = [];
    listAllernger.forEach(e =>{
        if(e.checked){
            list.push(e.value);
        }
    });
    const guest = document.getElementById('allergensGuestNum').value;
    object.guestData.guests[guest].allergens = list;
    listAllernger.forEach(e =>e.checked = false);
    scriptTag.textContent = JSON.stringify(object, null, 2);
}


const save = () =>{
    const object = JSON.parse(scriptTag.textContent);
    console.log(object);
}

const allergensData = [
    {
        "name": "leche",
        "img": "https://i.ibb.co/R7gdswG/leche.png"
    },
    {
        "name": "glutten",
        "img": "https://i.ibb.co/vJBXrNd/glutten.png"
    },
    {
        "name": "frutosSeco",
        "img": "https://i.ibb.co/DpNLWN1/frutos-Seco.png"
    },
    {
        "name": "mostaza",
        "img": "https://i.ibb.co/xFP2YGv/mostaza.png"
    },
    {
        "name": "apio",
        "img": "https://i.ibb.co/pj43jgr/apio.png"
    },
    {
        "name": "altramuz",
        "img": "https://i.ibb.co/nPfv8kd/altramuz.png"
    },
    {
        "name": "cacahuetes",
        "img": "https://i.ibb.co/xghPNQX/cacahuetes.png"
    },
    {
        "name": "crustaceos",
        "img": "https://i.ibb.co/1Gk1TsH/crustaceos.png"
    },
    {
        "name": "huevo",
        "img": "https://i.ibb.co/1MrHwhn/huevo.png"
    },
    {
        "name": "pescado",
        "img": "https://i.ibb.co/0mgT83w/pescado.png"
    },
    {
        "name": "moluscos",
        "img": "https://i.ibb.co/8MZ64Hw/moluscos.png"
    },
    {
        "name": "sésamo",
        "img": "https://i.ibb.co/Mn7ybdr/sesamo.png"
    },
    {
        "name": "soja",
        "img": "https://i.ibb.co/3mLFP0g/soja.png"
    },
    {
        "name": "vegano",
        "img": "https://i.ibb.co/FKt0XhS/vegan.png"
    }
];