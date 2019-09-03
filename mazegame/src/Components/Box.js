import React, { Component } from 'react'
import { SPRITE_SIZE_PX } from '../config/constants';

export class Box extends Component {
    render() {
        return (
            <div style = {
                {
                    width: SPRITE_SIZE_PX,
                    height: SPRITE_SIZE_PX,
                    display: 'inline-flex',
                    border: '1px solid black'
                }
            } />
            
        )
    }
}

export default Box;