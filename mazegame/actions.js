import {PLAYER_POSITION} from './constants';

export const setPlayerPosition = (text) => ({
    type: PLAYER_POSITION,
    payload: text
});