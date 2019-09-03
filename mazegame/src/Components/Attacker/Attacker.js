import React from 'react';
import { SPRITE_SIZE_PX } from '../../config/constants';
import gooba from './Goomba.gif';
import store from '../../config/store';

function Attacker(props) {
    store.dispatch({
        type: 'UPDATE_ATTACKERS_POSITION',
        payload: {
            position: [props.row, props.column]
        }
    });
    return (
        <div style={{
            position: 'absolute',
            backgroundColor: 'black',
            width: SPRITE_SIZE_PX,
            height: SPRITE_SIZE_PX,
        }} >
            <img src={gooba} alt="" />
        </div>
    )
}

export default Attacker;