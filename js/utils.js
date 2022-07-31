function rectangularCollision({rectangle1, rectangle2}){
    return(
        rectangle1.attackedBox.position.x +rectangle1.attackedBox.width >= rectangle2.position.x && rectangle1.attackedBox.position.x <= rectangle2.position.x + rectangle2.width && 
        rectangle1.attackedBox.position.y+rectangle1.attackedBox.height >= rectangle2.position.y && rectangle1.attackedBox.position.y <= rectangle2.position.y + rectangle2.height 
    )
}

function determineWinner({player,enemy, timerId}){
    clearTimeout(timerId)
    document.querySelector('#result').style.display = 'flex'
    if(player.health === enemy.health){
        document.querySelector('#result').innerHTML = 'Tie'
    }else if(player.health > enemy.health){
        document.querySelector('#result').innerHTML = 'Player win'
    }else if(player.health < enemy.health){
        document.querySelector('#result').innerHTML = 'Enemy Wonn'
    }
}

let timer = 60
let timerId

function decreaseTimer(){
    if(timer > 0){
        timerId = setTimeout(decreaseTimer, 1000)
        timer--
        document.querySelector('#timer').innerHTML = timer
    }
    if(timer === 0){
        determineWinner({player,enemy, timerId})
    }
}
