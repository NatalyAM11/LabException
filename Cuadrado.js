class Cuadrado {
constructor(posX,posY){

this.posX=posX;
this.posY=posY;
this.vel=3;
this.tam=25;

}

pintar (){
    fill(255);
    rect (this.posX,this.posY,this.tam,this.tam); 
    
    
   
}


mover(){

    this.posX+= this.vel;
    
 if(this.posX>1200){
     this.vel*=-1;
 }
 if(this.posX<0){
    this.vel*=-1;
}


}
    
setTam(tam){
    this.tam = tam;
}
getTam(){
    return this.tam;
}

}