const objIntinerario = [
    {
        "img":"https://i.ibb.co/vHthT4j/sagrada-familia.png",
        "time":"16:00",
        "name":"Ceremonia"
        },
    {
        "img":"https://i.ibb.co/wB9KhVG/cocktail.png",
        "time":"17:00",
        "name":"Cocktail"
    },
    {
        "img":"https://i.ibb.co/P9XDJ8c/comida.png",
        "time":"19:00",
        "name":"Comida"
    },
    {
        "img":"https://i.ibb.co/jLZjsnw/baile.png",
        "time":"22:00",
        "name":"Baile"
    }
];

const intinerario = document.getElementById('intinerario');

const printIntinerario = () =>{
    let print = "";
    for (let index = 0; index < objIntinerario.length; index++) {
        if(index != 0){
        print += `<div> <section class="stick"></section>`;
        }else{
           print +=`<div>`; 
        }
        print +=`
        <p>${objIntinerario[index].name}</p>
        <img src="${objIntinerario[index].img}" style="width:80px; margin-top:5px;">
        <p>${objIntinerario[index].time}</p>
    </div>`;
        
    }
    intinerario.innerHTML = print;
}
printIntinerario();