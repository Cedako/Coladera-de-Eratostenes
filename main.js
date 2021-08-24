
class App{
    constructor(){
        this.cero = new Array();
        this.uno = new Array();
        for(let i = 1; i < 1000; i++){
            if(i){
                this.uno.push(i)
            }
        }
        this.eratostenes2ndTry();
        //Imprime el arreglo con los números descartados del arreglo "uno"
        console.log(this.cero);

        //Eliminiación de "false" del array.
        for(let i = 0; i<this.uno.length; i++){
            if(this.uno[i]===false){
                this.uno.splice(i,1);
                i--
            }
        }
        //Imprime en la consola el arreglo con los números primos
        console.log(this.uno)
    }

    //Ineficiente como pocos métodos, pero hace la coladera hasta el 1000 correctamente.
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
            else if ((this.uno[i]%7 === 0) && (this.uno[i]>7)){
                this.cero.push(this.uno[i])
                for(let j=i;j<this.uno.length;j+=7){
                    this.uno[i]=false;
                }
            }
            else if ((this.uno[i]%11 === 0) && (this.uno[i]>11)){
                this.cero.push(this.uno[i])
                for(let j=i;j<this.uno.length;j+=11){
                    this.uno[i]=false;
                }
            }
            else if ((this.uno[i]%13 === 0) && (this.uno[i]>13)){
                this.cero.push(this.uno[i])
                for(let j=i;j<this.uno.length;j+=13){
                    this.uno[i]=false;
                }
            }
            else if ((this.uno[i]%17 === 0) && (this.uno[i]>17)){
                this.cero.push(this.uno[i])
                for(let j=i;j<this.uno.length;j+=17){
                    this.uno[i]=false;
                }
            }
            else if ((this.uno[i]%19 === 0) && (this.uno[i]>19)){
                this.cero.push(this.uno[i])
                for(let j=i;j<this.uno.length;j+=19){
                    this.uno[i]=false;
                }
            }
            else if ((this.uno[i]%23 === 0) && (this.uno[i]>23)){
                this.cero.push(this.uno[i])
                for(let j=i;j<this.uno.length;j+=23){
                    this.uno[i]=false;
                }
            }
            else if ((this.uno[i]%29 === 0) && (this.uno[i]>29)){
                this.cero.push(this.uno[i])
                for(let j=i;j<this.uno.length;j+=29){
                    this.uno[i]=false;
                }
            }
            else if ((this.uno[i]%31 === 0) && (this.uno[i]>31)){
                this.cero.push(this.uno[i])
                for(let j=i;j<this.uno.length;j+=31){
                    this.uno[i]=false;
                }
            }
            else if ((this.uno[i]%53 === 0) && (this.uno[i]>53)){
                this.cero.push(this.uno[i])
                for(let j=i;j<this.uno.length;j+=53){
                    this.uno[i]=false;
                }
            }
        }
    }
    //acabo de darme cuenta de que hay un numero extra en los primos porque está incluído el 1.

}
new App;
