import { combineReducers } from 'redux';

const initialState = {
    position: [0, 0],
}

const initialDist = {
    distance: 0,
}

const positionReducer = (position=initialState, action) => {
    switch (action.type) {
        case 'UPDATE_POSITION':
            return action.payload
        default:
            return position;
    }
}

const getInitialRowColumnReducer = (initialRowCol = [0,0], action) => {
    if (action.type === 'UPDATE_ROW_COLUMN') {
        return action.payload;
    }
    return initialRowCol;
}

const getDistanceCoveredReducers = (distance=initialDist, action) => {
    if (action.type === 'UPDATE_DISTANCE') {
        return action.payload;
    }
    return distance;
}

const getAttackersPositionReducer = (state=[], action) => {
    if (action.type === 'UPDATE_ATTACKER_POSITION') {
        return action.payload;
    }
    return state;
}

const arrReducer = (state=[], action) => {
    if (action.type === 'UPDATE_ARR_POSITION') {
        return action.payload;
    }
    return state;
}

export default combineReducers({
    position: positionReducer,
    arr: arrReducer,
    distance: getDistanceCoveredReducers,
    rowCol: getInitialRowColumnReducer,
    attackerPos: getAttackersPositionReducer,
});