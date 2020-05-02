
let numeroE
cuadrados=[];
circulos=[];
posX=60;
posY=80;
crear=false;


function setup(){

    createCanvas (1200,600);
    pantalla=0;

    //Variable
     numeroE=0;
  
    }
    
    function draw() {

    
    background(0);

    //pantalla
    switch (pantalla){
        case (0): 
       
     
       background(0);
       fill (94,18,109);
       rect(505,210,150,150);

       //resta
       textSize(30);
       fill (241,23,16);
       text("Resta con la flecha izquierda",57,294);

       //suma
       fill (117,235,19);
       text("Suma con la flecha derecha",712,294);


          //Boton continuar
          fill (10,91,89);
          rect(461,458,250,60);
          fill (0);
          text("Continuar",510,500);
   

    //Variable del numero
    
    fill(255);
    textSize(40);
    text (numeroE,570,300);
    text("X:" + mouseX + "Y:" + mouseY, mouseX, mouseY);
    
             //try catch
             try{
                verificarNumero(numeroE);
            } catch (error){
             console.log(error.mensaje);
             text (error.mensaje,137,64);
           }

        
        
        break;
        case (1) :
            background(94,18,109);
            
         //Botones
         //AGREGAR
         noStroke();
         fill (10,91,89);
         rect(133,458,250,60);
         fill (0);
         text("Agregar",166,500);

                
         //ELIMINAR
         noStroke();
         fill (255,0,0);
         rect(465,458,250,60);
         fill (0);
         text("Eliminar",515,500);

         //DOBLAR TAMAÑO
         noStroke();
         fill (10,91,89);
         rect(840,458,260,60);
         fill (0);
         text("Doblar tamaño",840,500);

        //CREAR OTRO ARREGLO    
         noStroke();
         fill (255);
         rect(460,48,340,60);
         fill (0);
         text("Crear otro arreglo",469,90);        


         //Arreglo de cuadrados
            for(let i =0; i< cuadrados.length; i++){
                cuadrados[i].pintar();
                cuadrados[i].mover();
              
        }

        circulos.forEach(
            function (cuadrado) {
                cuadrado.pintar();
                cuadrado.mover();
            }
        );
        

        
    
            
            text("X:" + mouseX + "Y:" + mouseY, mouseX, mouseY);
            break;
    }
}
    


    function keyPressed(){
    if (keyCode == RIGHT_ARROW) {
        numeroE+=1;
        cuadrados.push(new Cuadrado(90*numeroE+8,150));
    }
    if (keyCode == LEFT_ARROW) {
        numeroE-=1;
        cuadrados.pop();
    }
    console.log(cuadrados);
}

function mousePressed(){

    switch (pantalla){

        //cambio de pantalla
        case (0):
    if((numeroE>0 && numeroE<=10) && (mouseX>464 && mouseX<709)&& (mouseY>457 && mouseY<517)){
        pantalla=1;
    } 
    break;

    case (1):
    //Aumentar elementos del arreglo
        if( (mouseX>132 && mouseX<382)&& (mouseY>456 && mouseY<517)){
            if(numeroE>0 && numeroE<10){
           numeroE+=1;
            cuadrados.push(new Cuadrado(90*numeroE+8,150));
            if (crear== true){
                circulos.push(new Circulo (100*numeroE,300));
            }
        }
            
        }  

         //Eliminar elementos del arreglo
         if( (mouseX>462 && mouseX<712)&& (mouseY>456 && mouseY<517)){
             numeroE-=1;
            cuadrados.pop();
            circulos.pop();
        }  
         //Duplicar tamaño
        if( (mouseX>836 && mouseX<1093)&& (mouseY>456 && mouseY<517)){
            cuadrados.forEach(duplicarTam);
            circulos.forEach(duplicarTam);
           }

         //Crear el otro arreglo de los ciculos 
      if( (mouseX>456 && mouseX<801)&& (mouseY>48 && mouseY<109)){
              console.log("holi");
             cuadrados.map(cambioCirculo);
             crear=true;

           }


}
}


 //Exception
    function verificarNumero(numeroE) {

    if(numeroE>10){
    throw new numberException ('El numero debe ser menor a 10 para para continuar');
    }

    if(numeroE<=0){
        throw new numberException ('El numero debe ser mayor a 0 para para continuar');
        }


    }



    function duplicarTam(element,index,array){

        array[index].setTam(array[index].getTam()*2);
        //array[index].pintar();
        //console.log(array[index]);
   
    }

    function cambioCirculo(element,index,array){

        circulos.push(new Circulo (50*index,300));
 
   
    }
    