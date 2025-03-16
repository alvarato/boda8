const boda = {
    "boda1":"Sofia Pons",
    "boda2":"Juan Manuel Fernandez",
    "day":"Sábado",
    "date":"04 de Octubre de 2025",
    "text":{
        "t1":"Nos casamos",
        "t2":"Sofia y Juan",
        "t3":"Porque la felicidad es mucho más grande cuando la compartimos, te queremos en nuestra casamiento…",
        "t4":"Gracias por acompañarnos en este día, los esperamos para brindar juntos"
    },
    "info":{
        "salon":{
            "link":"https://maps.app.goo.gl/GZjo3qMk5162ZFrn8",
            "time":"16:00",
            "name":"Salón La Arboleda"
            },
        "iglesia":{
            "link":"https://maps.app.goo.gl/ZD67mwUVhi3bfabe9",
            "time":"17:00",
            "name":"Parroquia Nuestra Señora de la caridad"
            }
    }
    
}
const boda1 = document.getElementById('boda1');
const boda2 = document.getElementById('boda2');
const day = document.getElementById('day');
const date = document.getElementById('date');
const bodaText = document.getElementById('bodaText');
const text1 = document.getElementById('text1');
const principalDate = document.getElementById('principalDate');
const salon = document.getElementById('salon');
const iglesia = document.getElementById('iglesia');
const bodaInfo = document.getElementById('bodaInfo');


text1.innerHTML = boda.text.t1;

function loadBodaInfo(boda){

}
export {loadBodaInfo};

//loadBodaInfo();
/*
    let text = "";
    boda.text.forEach((e) => {
        text += `${e}<br><br>`;
    });
    bodaText.innerHTML = text;
    text = ` <h2>${boda.info.iglesia.name}</h2><h2>${boda.info.iglesia.time}</h2>
        <a href="${boda.info.iglesia.link}" target="_blank"><h2>Ver ubicación</h2></a>
        <h2>${boda.info.salon.name}</h2><h2>${boda.info.salon.time}</h2>
        <a href="${boda.info.salon.link}" target="_blank"><h2>Ver ubicación</h2></a>
    `;
    bodaInfo.innerHTML = text;
    text ="";
*/