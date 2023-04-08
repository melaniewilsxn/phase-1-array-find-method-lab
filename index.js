// code your solution here
// function superbowlWin(record) {
//     for (let item of record){
//         if(item.result === "W"){
//             return item.year
//             break
//         }
//     }
// }

function superbowlWin(array) {
    const winningObj = array.find(findWin)
    if (winningObj === undefined){
        return winningObj
    } else return winningObj.year
}

function findWin (foundWin) {
    return foundWin.result === "W"
}