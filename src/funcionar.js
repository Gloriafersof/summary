const button = document.getElementById("button")
const cambio= document.getElementById("cambio")
const otra =document.getElementById("verbal")
const memorie=document.getElementById("memory")
const visuale =document.getElementById("visual")
const resultado=document.getElementById("media")
const letra= document.querySelector(".status")
const color= document.getElementById("fondo") 
const backog= document.querySelector(".fondoco")
const parrafo= document.querySelector(".result-component-paragraph")

button.addEventListener("click", () => {
    const randomNumberGenerator= Math.floor(Math.random()*
    100);
    const verbal= Math.floor(Math.random()*
    100);
    const memory = Math.floor(Math.random()*
    100);
    const visual= Math.floor(Math.random()*
    100);
    const cuenta= [(randomNumberGenerator+verbal+memory+visual)/4]
   
    cambio.innerHTML= `<p><span class="cambio">${randomNumberGenerator}</span> /100</p> `;
    otra.innerHTML= `<p><span class="cambio">${verbal}</span> /100</p> `;
    memorie.innerHTML= `<p><span class="cambio">${memory}</span> /100</p> `;
    visuale.innerHTML= `<p><span class="cambio">${visual}</span> /100</p> `;
    resultado.innerHTML= parseInt(cuenta);

    button.addEventListener("click", () => {
      color.classList.remove("result-component")

    })

    if(cuenta>="75" ){
        color.classList.remove("yellow", "rojo", "fondoco") 
        button.classList.remove("yellow", "rojo", "button")
        button.classList.add("green") 
        color.classList.add("green") 
        letra.textContent= "Great:)"
        
    }
    else if(cuenta<="74" ){
        color.classList.remove("green", "rojo", "fondoco") 
        
        color.classList.add("yellow") ;
        letra.textContent= "So so:/"
        button.classList.remove("green", "rojo", "button")
        button.classList.add("yellow")
        parrafo.textContent= "Good, but you can do it better"

    }
    if(cuenta<="43" ){
        color.classList.remove("yellow", "green", "fondoco") 
        color.classList.add("rojo");
        letra.textContent= "Bad:("
        button.classList.remove("green", "yellow", "button")
        button.classList.add("rojo") 
        parrafo.textContent= "You should try again"
    }
   
    
}) 