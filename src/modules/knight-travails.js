function reversePrint(arr) {

    const reverseArr = arr.reverse()
    console.log(`initial position: [${reverseArr[0]}] => destination: [${reverseArr[reverseArr.length - 1]}] `)    
    console.log(` => You made it in ${reverseArr.length - 1} moves!  Here's your path:`)
    reverseArr.forEach((val) => console.log(val))
};

export default function KnightMoves(startPos, endPos) {
    const board = Array.from({length: 8}, () => Array(8).fill(false));
    const knightsPath = Array.from({length: 8}, () => Array(8).fill(null));

    const dirX = [2, 2, - 2, - 2, 1, - 1, 1, - 1];
    const dirY = [1, - 1, 1, - 1, 2, 2, - 2, - 2 ];

    const queue = [startPos];

    board[startPos[0]][startPos[1]] = true;

    while(queue.length !== 0) {
        
        const currentMove = queue.shift();
      
        if(currentMove[0] === endPos[0] && currentMove[1] === endPos[1]) break;

        const row = currentMove[0];
        const col = currentMove[1];

        for (let i = 0; i < knightsPath.length; i += 1) {
            
            const newRow = row + dirX[i];
            const newCol = col + dirY[i];

            if(newRow >= 0 && newCol >= 0 && newRow <= 7 && newCol <= 7 && board[newRow][newCol] === false) {
                
                queue.push([newRow, newCol]);

                board[newRow][newCol] = true;
                knightsPath[newRow][newCol] = [row, col];
            };  
        };
        
    };

    let moveIndex = endPos;
    const pathway = [];

    while(moveIndex !== null) {
        
        pathway.push(moveIndex)
        moveIndex = knightsPath[moveIndex[0]][moveIndex[1]];
    };

    return reversePrint(pathway)
};