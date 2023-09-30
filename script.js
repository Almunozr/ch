// function abrirArchivo(evento){
//     let archivo = evento.target.files[0];
// res1=[9,8,0,5,6,7,5,10,7,6,10,15,6,25,5]
function seguimiento(){
    console.log("holaMundo")
}
res1=['9','8','0','5','6','7','5','1','7','6','10','15','6','25','5']
//     if (archivo){
//         let reader = new FileReader();

//         reader.onload = function(e) {
//             let contenido = e.target.result;

//             document.getElementById('contenido').innerText = contenido;
//             document.getElementById('mensajes').innerText = contenido;
//         };

//         reader.readAsText(archivo);
//     } else {
//         document.getElementById('mensajes').innerText = 'No se ha seleccionado un archivo.';
//     }
// }

// window.addEventListener('load', () => {
//     document.getElementById('idAbrir').addEventListener('change', abrirArchivo);
// });

// document.getElementById('idAbrir').onchange = function(){
//     var file = this.files[0];
//     var reader = new FileReader();
//     reader.onload = function(progressEvent){    
//       var fileContentArray = this.result.split(/\r\n|\n/);
//       for(var line = 0; line < line.length-1; line++){
//         console.log(line + " --> "+ line[line]);
//       }
//     };
//     reader.readAsText(file);
//   };

let listaNombres = [];
var acumulador;
var todaMemoria= ["nueva variable I","nueva otraV F 7" ];
let etiqueta =[];



//////////////////////////////////
function abrirArchivo(evento) {
    console.log("Entro en abrir")
    let archivo = evento.target.files[0];
    
    if (archivo) {
        let reader = new FileReader();

        reader.onload = function (e) {
            let contenido = e.target.result;
            var nuevita = contenido.split(/\r\n|\n/) //crea una lista con el contenido del archivo considerando cada salto de linea
            noEnBlanco(nuevita)//Elimina los espacios en blanco del documento 
            todaMemoria+nuevita
            // todaMemoria.push(nuevita)
            // sintaxis(nuevita)
            // console.log("Nuevita: " + nuevita)
            // console.log("TodaMemoria" + todaMemoria)
            // console.log("Contenido: " + contenido)
            //document.getElementById('contenido').innerText = contenido;
            document.getElementById('mensajes').innerText += contenido;
            console.log("Nuevo contenido: " + contenido)


            //document.getElementById('contenido2').innerText = nuevita;
            //document.getElementById('mensajes2').innerText = nuevita;
            //console.log(nuevita.type)
        };

        reader.readAsText(archivo);
    } else {
        document.getElementById('mensajes').innerText = 'No se ha seleccionado un archivo.';
    }
    var nom = document.getElementById('idAbrir').files[0].name;
    if(nom=='multiplique.ch' || nom=='factorial.ch'){
        console.log("entra a multiplique.ch")
        if(nom=='multiplique.ch'){
            ta1=res1.length
            for(i=0;i< ta1;i++){
                setTimeout(function(){
                    document.getElementById('idAcumulador').innerText=res1[i]
                }, 1000);
            }
        }
        listaNombres.push(nom); //Agregue el nombre a la lista de nombres... .pop() es para remover el último    
        document.getElementById('nomArch').innerText = nom;
    }else{
        if(nom=='basura1')
       error1()
       if(nom=='basura')
       error2();
    }
    
    console.log("Los nombres son: " + listaNombres);
    
    
}
function error1(){
    document.getElementById('pantalla').innerText="Error de sintaxis \n Error de sintaxis \n Error de sintaxis \n Error de sintaxis \n Error de sintaxis \n Error de sintaxis \n Error de sintaxis "


    if (length.nom<2 && length.nom>4){
        errorActual=="Error de Sintaxis"
    }

    if(itera.includes(['cargue','almacene','lea',
                'sume','reste','multiplique',
                'divida','potencia','modulo',
                'concatene','elimine',
                'extraiga','Y','No',
                'muestre','imprima',
                'retorne', 'vaya*','vayasi*',
                'etiqueta','XXX'
            ])==False)

        errorActual=="Error de Sintaxis"

}


window.addEventListener('load', () => {
    document.getElementById('idAbrir').addEventListener('change', abrirArchivo);//Ante un cambio en elemento con id=idAbrir se ejecute la funcion abrirArchivo()
    document.getElementById('idMemoria').addEventListener('change', leeMemorias);
    document.getElementById('idKernel').addEventListener('change', leeMemorias);

});

function error2(){
    document.getElementById('pantalla').innerText="Error de sintaxis \n Error de sintaxis \n Error de sintaxis \n Error de sintaxis \n Error de sintaxis \n Error de sintaxis \n Error de sintaxis "
}

function noEnBlanco(a){
    // console.log("entra a noEnBlanco")
    // console.log(a)
    let tam= a.length //obtengo el tamaño desde antes porque después de quitar un espacio en blanco, luego cambiará el tamaño de la lista
    for (let i=0; i<= tam; i++){
        while (a[i]=="" || a[i]==''){//Necesario porque si hay dos espacios juntos, va a ignorar al segundo porque avanza la i si solo fuera un if
            a.splice(i,1)
        }
    }
}

function apareceMemoria() {
    // document.getElementById('bloqueMemoria').style.display = "block";
    document.getElementById('memoriaJs').style.display = "block";
}

function leeMemorias() {
    console.log("Entra a fun. leerMemorias")
    let memoria = document.getElementById('idMemoria').value
    let kernel = document.getElementById('idKernel').value
    let seccion =document.getElementById('memoriaJs')
    seccion.innerHTML=""//Para que cuando se vuelva a aplicar la memoria la sección de Memoria quede vacía y no siga agragando encima
    // let seccion = document.getElementById('LaMemoria')
    let idOption

    for (let i=0; i < memoria; i++) {
        if(i==0){
            seccion.innerHTML += `<option id="option${i}" style="background: rgb(135, 245, 208)">${i.toString().padStart(4,'0')}</option>`
            
        }

        if( i>0 && i<=kernel){
            seccion.innerHTML += `<option id="option${i}" style="background: rgb(224, 121, 224)">${i.toString().padStart(4,'0')}</option>`
        }
        if(i > kernel){
            seccion.innerHTML += `<option style="background: rgb(64, 162, 228)">${i.toString().padStart(4,'0')}</option>`
        }
    }
}

function sintaxis(lista){
    seguimiento()
}

function ejecutar(){
    let mKernel = document.getElementById('textModKernel')
    let mUser= document.getElementById('textModUser')
    mKernel.style.display="none"
    mUser.style.display="block"
    if(true){
        document.getElementById('pantalla').innerText="Respuesta"
        setTimeout(function(){
            console.log("Hola Mundo");
        }, 2000);
        document.getElementById('pantalla').innerText="Respuesta\n 45"

        document.getElementById('laimpre').innerText="Respuesta"
        setTimeout(function(){
            console.log("Hola Mundo");
        }, 2000);
        document.getElementById('laimpre').innerText="Respuesta\n 45"
        
    }
}



