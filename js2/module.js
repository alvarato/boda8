import {loadBodaInfo} from './boda.js';
import { loadIntinerario } from './intinerario.js';
import { loadPrincipalObject,addQuantity,createAllergensPopUp} from './index.js';

const object = {
    "day":"Sábado",
    "date":"04 de Octubre de 2025",
    "text":[
        "Nos casamos",
        "Sofia y Juan",
        "Porque la felicidad es mucho más grande cuando la compartimos, te queremos en nuestra casamiento…",
        "Gracias por acompañarnos en este día, los esperamos para brindar juntos"
    ],
    "info":{
        "salon":{
            "link":"https://maps.app.goo.gl/Do3erMRwskRgXVVE9",
            "time":"16:00",
            "name":"Salón La Arboleda"
            },
        "iglesia":{
            "link":"https://maps.app.goo.gl/h83QYJo3NkEotb837",
            "time":"17:00",
            "name":"Parroquia Nuestra Señora de la caridad"
            }
    },
    "intinerario" : [
        {
            "img":"img/icon/iglesia.png",
            "time":"16:00",
            "name":"Ceremonia"
            },
        {
            "img":"img/icon/copas.png",
            "time":"17:00",
            "name":"Cocktail"
        },
        {
            "img":"img/icon/comida.png",
            "time":"19:00",
            "name":"Comida"
        },
        {
            "img":"img/icon/musica.png",
            "time":"22:00",
            "name":"Baile"
        }
    ],
    "guestData" : {
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

}

let indexImg = 1;
const changeImg = () =>{
    var imagen = document.getElementById('principalImg');
    imagen.src =  "img/bg/i"+indexImg+'.jpg';
    indexImg = (indexImg < 16)?indexImg+1:1;
}

//setInterval(changeImg, 3000);
window.load
document.addEventListener('DOMContentLoaded', function() {
    console.log(object);
    loadBodaInfo(object);
    loadIntinerario(object.intinerario);
    loadPrincipalObject(object.guestData);

    const scriptTag = document.getElementById("dataObject");
   // const jsonData = JSON.parse(scriptTag.textContent);
    scriptTag.textContent = JSON.stringify(object, null, 2);

    if(!object.guestData.done){
        addQuantity();
        createAllergensPopUp();
    }else{
        form.innerHTML =`<div id="qrcode"></div>`;
        sliderGenerator(object.guestData.guests);
    }
    
  });

