import store from '../config/store';
import { SPRITE_SIZE } from '../config/constants';


export default function handleMovement(player) {

    function getNewPosition(direction){
        const oldPos = store.getState().position.position;

        switch (direction) {
            case 'LEFT':
                return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
            case 'RIGHT':
                return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
            case 'UP':
                return [oldPos[0], oldPos[1] - SPRITE_SIZE];
            case 'DOWN':
                return [oldPos[0], oldPos[1] + SPRITE_SIZE];
            default:
                return null;
        }
    }

    function observeBoundaryPos(oldPos, newPos) {
        return (newPos[0] >= 0 && newPos[0] < SPRITE_SIZE*store.getState().rowCol.rowCol[1])
            && (newPos[1] >= 0 && newPos[1] < SPRITE_SIZE*store.getState().rowCol.rowCol[0])
            ? newPos : oldPos;
    }

    function getNewDistance() {
        let count = store.getState().distance.distance;
        return count+1;
    }

    function dispatchMove(direction) {
        const oldPos = store.getState().position.position;
        store.dispatch({
            type: 'UPDATE_DISTANCE',
            payload: {
                distance: getNewDistance()
            }
        })
        store.dispatch({
            type: 'UPDATE_POSITION',
            payload: {
                position: observeBoundaryPos(oldPos, getNewPosition(direction))
            }
        });

        if ( Boolean(store.getState().attackerPos.attacker.find(x => 
            x[0] === store.getState().position.position[1]/40 &&
            x[1] === store.getState().position.position[0]/40)) ) {
                let idx = store.getState().attackerPos.attacker.findIndex(x => 
                    x[0] === store.getState().position.position[1]/40 &&
                    x[1] === store.getState().position.position[0]/40);
                let arrIndex = store.getState().attackerPos.attacker[idx];
                store.getState().attackerPos.attacker.pop(idx);
                let count = arrIndex[0] * store.getState().rowCol.rowCol[1] + arrIndex[1];
                let arrList = store.getState().arr.arr;
                arrList[count] = null;
                store.dispatch({
                    type: 'UPDATE_ARR_POSITION',
                    payload: {
                        arr: arrList
                    }
                });
                if (store.getState().attackerPos.attacker.length === 0) {
                    alert('hey game over! Number of moves made is: ' + store.getState().distance.distance);
                    window.location.reload();
                }
        }

    }

    function handleKeyDown(e) {
        e.preventDefault();
        switch(e.keyCode) {
            case 37:
                return dispatchMove('LEFT')
            case 38:
                return dispatchMove('UP')
            case 39:
                return dispatchMove('RIGHT')
            case 40:
                return dispatchMove('DOWN')
            default:
                console.log(e.keyCode);
        }
    }

    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    return player;
}