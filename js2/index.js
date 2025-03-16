
let object = {
    "id":"1",
    "name":"Alvaro Bernabey Izquierdo",
    "person":0,
    "quantity":2,
    "done":false,
    "guests":[
       { "allergens":['leche'],
        "name":"Alvaro Bernabey Izquierdo",},
        {"allergens":[],"name":"Maria"}
        ]
}
const loadPrincipalObject = (guestData) =>object = guestData;



/*consts*/
const selectQuantity = document.getElementById('quantity');

const popUPAllergens = document.getElementById('popUPAllergens');
const form = document.getElementById('form');


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


const createAllergensPopUp = () =>{
    let options = `<form id="formAllergens" class="formAllergens"
        style="border:solid;">`;
    allergensData.forEach(element => {
        options +=`<label class="d-flex border">
            <img src="${element.img}" style="width: 30px; border:solid; border-radius: 100%;">
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
        console.log(object.guests[guest].allergens);
        for (let index = 0; index < object.guests[guest].allergens.length; index++) {
        listAllernger.forEach(e =>{
           if(e.defaultValue == object.guests[guest].allergens[index]){
            e.checked = true;
           }
        });
        }
    }
}

const addQuantity = () =>{
    const elementoOpcion = document.createElement('option');
        elementoOpcion.value = 0;
        elementoOpcion.textContent = "Selecione la Cantidad";
        selectQuantity.appendChild(elementoOpcion);
        const elementoOpcion2 = document.createElement('option');
        elementoOpcion2.value = "no";
        elementoOpcion2.textContent = "No Asistire";
        selectQuantity.appendChild(elementoOpcion2);

    for (let index = 0; index < object.quantity; index++) {
        const elementoOpcion = document.createElement('option');
        elementoOpcion.value = index+1;
        elementoOpcion.textContent = index+1;
        selectQuantity.appendChild(elementoOpcion);
    }
    
}
const qrGenerator = (qrList) =>{
    for (let index = 0; index < qrList.length; index++) {
        const url = "hola/"+object.id+"/"+index;
        new QRCode(document.getElementById('qrCodeId'+index),url);
    }
   
}

  const sliderGenerator = (qrList) =>{
    let print = `<div id="slider">`;
    for (let index = 0; index < qrList.length; index++) {
        if(index == 0){
            print+=` <input type="radio" name="slider" id="slide1" checked>`;
        }else{
            print+=`<input type="radio" name="slider" id="slide${index+1}">`;  
        }
       
    }
        print+=`<div id="slides">
                <div id="overflow">
                <div class="inner">
        `;
    for (let index = 0; index < qrList.length; index++) {
        print+=`
                <div class="slide slide_${index+1}">
                    <div class="slide-content">
                        <p>${qrList[index].name}</p>
                        <div id="qrCodeId${index}"></div>
                        <p>Esta es tu entrada, no la compartas</p>
                    </div>
                </div>`;  
    }
    print+=`</div></div></div><div id="controls">`;
    for (let index = 0; index < qrList.length; index++) {
        print+=`<label for='slide${index+1}'></label>`;  
    }
    print+=`</div><div id="bullets">`;
    for (let index = 0; index < qrList.length; index++) {
        print+=`<label for="slide${index+1}"></label>`;  
    }
    print+=`</div></div>`;
   document.getElementById('qrcode').innerHTML= print;
   qrGenerator(qrList);
  }
  

  export {loadPrincipalObject,addQuantity,createAllergensPopUp,sliderGenerator}