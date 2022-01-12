const widthh = window.innerWidth;
const heigtt = window.innerHeight;
let cordeX,
  cordeY,
  widthRepaldo = widthh;

window.addEventListener("resize", newPosition);

// function newPosition() {
//   for (let i = 1; i <= 3; i++) {
//     // Recuperamos medidas
//     let newWidth = window.innerWidth;
//     let newHeigt = window.innerHeight;

//     let withtRespaldo = newWidth;
//     // Recuperamos la etiqueta g
//     let g = document.getElementById(i);
//     let coordenadas = document.getElementById(i).getAttribute("transform");
//     // Recuperemos el radio.

//     newSeparador(coordenadas);

//     let disminuyeX;
//     // let disminuyeY;

//     if (newWidth > withtRespaldo) {
//       disminuyeX = cordeX + (widthh - newWidth);
//       // disminuyeY = cordeY + (heigtt - newHeigt);
//       console.log("Se hace más grande" + disminuyeX);
//     } else {
//       disminuyeX = cordeX - (widthh - newWidth);
//       // disminuyeY = cordeY - (heigtt - newHeigt) / 10;
//       console.log("Se hace más pequeño" + disminuyeX);
//     }

//     g.setAttribute("transform", `translate(${disminuyeX}, ${cordeY})`);

//     if (newWidth < 800) {
//       let circle = document.getElementById(`${i}.${i}`);
//       console.log(circle);
//       let radio = circle.getAttribute("r");
//       console.log(radio);
//       let newRadio = radio - 5;
//       console.log(newRadio);
//       circle.setAttribute("r", `${newRadio}`);
//     }
//   }
// }
function newPosition() {
  console.log(widthh);
  for (let i = 1; i <= 5; i++) {
    var newWidth = window.innerWidth;
    let disminuyeX;

    let g = document.getElementById(i);
    let coordenadas = document.getElementById(i).getAttribute("transform");

    newSeparador(coordenadas);

    let circle = document.getElementById(`${i}.${i}`);
    let radio = circle.getAttribute("r");

    disminuyeX = parseInt(cordeX);
    if ((newWidth <= 750 && newWidth >= 701) ||(widthh <= 950 && widthh >= 801)) {
      disminuyeX = parseInt(cordeX) - 30;
      console.log(disminuyeX);
    } else if ((newWidth <= 600 && newWidth >= 550) ||(widthh <= 800 && widthh >= 600)) {
      disminuyeX = parseInt(cordeX) - 3;
    }

    if(newWidth > 950 && newWidth < 1000){
      disminuyeX = parseInt(cordeX) + 3.5;
    } else if(newWidth > 1100 && newWidth <1200){
      disminuyeX = parseInt(cordeX) + 6;
    }
    // } else if(newWidth >= 950 && newWidth >= 1020){
    //   disminuyeX = cordeX + 4;
    // }
    // } else if (
    //   (newWidth <= 599 && newWidth >= 550) ||
    //   (widthh <= 599 && widthh >= 550)
    // ) {
    //   disminuyeX = cordeX - 30;
    //   newRadio = radio - 0.2;
    //   console.log(cordeX);
    //   console.log(radio);
    // } else if (
    //   (newWidth >= 1000 && newWidth <= 1020) ||
    //   (widthh <= 1000 && widthh >= 1020)
    // ) {
    //   disminuyeX = cordeX + 50;
    //   newRadio = radio + 0.5
    // }
    g.setAttribute("transform", `translate(${disminuyeX}, ${cordeY})`);
    circle.setAttribute("r", `${radio}`);
  }
  widthRepaldo = newWidth;
}

// Recuperamos las cordenadas actuales del objeto
function newSeparador(a) {
  let opcion1;
  let contenido = a.split("(");
  for (let i = 0; i < contenido.length; i++) {
    if (i == 1) {
      opcion1 = contenido[i];
    }
  }

  let opcion2 = opcion1.split(",");
  cordeX = opcion2[0];
  let opcion3 = opcion2[1];

  let newArray = opcion3.split(")");
  cordeY = newArray[0];
  console.log('Cordenadas X: ' + cordeX);
  console.log('Cordenadas Y: ' + cordeY);

}
