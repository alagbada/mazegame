import React, { Component } from 'react';
import { SPRITE_SIZE_PX } from '../config/constants';
import Attacker from './Attacker/Attacker';
import {connect} from 'react-redux'
import store from '../config/store';

export class BoxCollection extends Component {

    createJoinArray = (numRows, numColumns) => {
        const numJoin = parseInt(numRows) * parseInt(numColumns);
        let array = Array(numJoin).fill(null);
        for (let i = 0; i < Math.floor(Math.sqrt(numJoin)); i++) {
            array[Math.floor(Math.random()*(array.length-1))] = 1;
        }
        const xCenter = Math.ceil(numRows/2) - 1;
        const yCenter = Math.ceil(numColumns/2) - 1;
        let loc = xCenter * numColumns + yCenter;
        array[loc] = null;
        store.dispatch({
            type: 'UPDATE_ARR_POSITION',
            payload: {
                arr: array
            }
        });
    }

    componentWillMount() {
        this.createJoinArray(this.props.row, this.props.column);
    }

    handleAttacker = () => {
        let arr = store.getState().arr.arr;
        let rowCol = store.getState().rowCol.rowCol;
        let position = [];
        let allPositionPair = [];

        for (let i=0; i<rowCol[0]; i++) {
            let k=0, y= 0;
            while (k < rowCol[1]*(i+1)) {
                y = rowCol[1]*i;
                if (k>=y) {
                    if (arr[k] != null ) {
                        position = [i, k%rowCol[1]];
                        allPositionPair.push(position);
                        position = [];
                    }
                }
                k++;
            }
        }
        return allPositionPair;
    }


    render() {
       const {row, column} = this.props;

       store.dispatch({
            type: 'UPDATE_ATTACKER_POSITION',
            payload: {
                attacker: this.handleAttacker()
            }
        });

        return (
            <div style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${parseInt(column)}, ${SPRITE_SIZE_PX})`,
                    gridTemplateRows: `repeat(${parseInt(row)},  ${SPRITE_SIZE_PX})`
                }}>
               {
                    store.getState().arr.arr.map(function(row, index) {
                        if (row != null) {
                            return (
                                <div style={{border: '1px solid black'}} key={index}>
                                    <Attacker key={index} row={row} column={column} idx={index} />
                                </div>
                            )
                        }
                        return (<div style={{border: '1px solid black'}} key={index} />)
                    })

                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {arr: state.arr};
}


export default connect(mapStateToProps)(BoxCollection);