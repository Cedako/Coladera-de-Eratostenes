class App{
    constructor(){
        this.cero = new Array();
        this.uno = new Array();
        for(let i = 1; i < 1000; i++){
            if(i<1000){
                this.uno.push(i)
            }
        }
        //Comprobación de que el vector con todos los números del 1 al 999 funciona
        for(let i = 1; i < 1000; i++){
            if(this.uno[i]){
                for(let j = 1 + this.uno[i];j < 1000; j++){
                    this.cero.push(this.uno[j]);
                    this.uno[j] = false;
                }
            }
        }
        console.log(this.cero);
        console.log(this.uno[1]);
    }
}
new App;
