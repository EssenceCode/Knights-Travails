import KnightMoves from "./knight-travails";

export default function knightTest(x, y, maxTime = 8) {
    
    let counter = 0;
  
    if(!Array.isArray(x) && !Array.isArray(y)) {
        while(counter < maxTime) {
            
            const randomNum = Array.from({length: 2}, ()=> Math.floor(Math.random() * 8));
            const randomNum2 = Array.from({length: 2}, ()=> Math.floor(Math.random() * 8));
    
            console.log(KnightMoves(randomNum, randomNum2));
    
            counter += 1;
        }
        
        return true;
    };

    
   
    return KnightMoves(x, y);
};