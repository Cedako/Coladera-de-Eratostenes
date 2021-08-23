
class App{
    constructor(){
        this.cero = new Array();
        this.uno = new Array();
        for(let i = 1; i < 20; i++){
            if(i){
                this.uno.push(i)
            }
        }
        this.eratostenes2ndTry();
        console.log(this.uno);
        console.log(this.cero);
        //Comprobación de que el vector con todos los números del 1 al 999 funciona
        
    }

    eratostenes2ndTry(){
        for(let i = 0; i<this.uno.length; i++){
            if ((this.uno[i]%2 === 0) && (this.uno[i]>2)){
                this.cero.push(this.uno[i])
                for(let j=i;j<this.uno.length;j+=2){
                    this.uno[i]=false;
                }
            }
            else if ((this.uno[i]%3 === 0) && (this.uno[i]>3)){
                this.cero.push(this.uno[i])
                for(let j=i;j<this.uno.length;j+=3){
                    this.uno[i]=false;
                }
            }
            else if ((this.uno[i]%5 === 0) && (this.uno[i]>5)){
                this.cero.push(this.uno[i])
                for(let j=i;j<this.uno.length;j+=5){
                    this.uno[i]=false;
                }
            }
        }
    }

}
new App;
