class Circulo extends Cuadrado{
    super(posX,posY,vel,tam)  {
    
    this.posX=posX;
    this.posY=posY;
    this.vel=3;
    this.tam=25;
  
    }
    
    pintar (){
    
            fill(255);
            ellipse (this.posX,this.posY+60,this.tam,this.tam); 
            
        
    }
    

    setTam(tam){
        this.tam = tam;
    }
    getTam(){
        return this.tam;
    }
    
    }
