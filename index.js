// Your code here
class Polygon {
    constructor(numArray){
        this.numArray = numArray;
    }

    get countSides(){
        return this.numArray.length;
    }

    get perimeter(){
    let sum = 0;
    for(let i=0; i<(this.numArray).length; i++){
        sum+= (this.numArray[i]);
    }
    return(sum);
    }
}

class Triangle extends Polygon {
    get isValid(){
        let side1 = this.numArray[0];
        let side2 = this.numArray[1];
        let side3 = this.numArray[2];
        
        if((side1+side2>side3)&&(side2+side3>side1)&&(side1+side3>side2)){
            return true;
        } 
        else{
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid(){
        let side1 = this.numArray[0];
        let side2 = this.numArray[1];
        let side3 = this.numArray[2];
        let side4 = this.numArray[3];
        
        if((side1===side2)&&(side3===side4)&&(side1===side3)&&(side2===side4)&&(side1===side4)){
            return true;
        } 
        else{
            return false;
        }
    }

    get area(){
        let side1 = this.numArray[0];

        if(this.isValid){
            return side1*side1;
        }
    }
}