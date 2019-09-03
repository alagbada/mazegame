import React, { Component } from 'react'
import {connect} from 'react-redux'
import BoxCollection from './BoxCollection';
import Player from './Player/Player';
import { SPRITE_SIZE } from '../config/constants';
import store from '../config/store';

export class Container extends Component {

    componentWillMount(){
        store.dispatch({
            type: 'UPDATE_ROW_COLUMN',
            payload: {
              rowCol: [this.props.row, this.props.column]
            }
          })
    }

    getInitialPlayerPosition = (initialRowCol) => {
        const xCenter = Math.ceil(initialRowCol[0]/2) - 1;
        const yCenter = Math.ceil(initialRowCol[1]/2) - 1;
        const xPos = xCenter*SPRITE_SIZE;
        const yPos = yCenter*SPRITE_SIZE;
        return [yPos, xPos];
    }

    render() {

        store.dispatch({
            type: 'UPDATE_POSITION',
            payload: {
              position: this.getInitialPlayerPosition(store.getState().rowCol.rowCol)
            }
          })
        const {row, column} = this.props;
        return (
            <div style = {{
                position: 'relative',
                margin: '20px auto',
                width: column*SPRITE_SIZE,
                height: row*SPRITE_SIZE,
                border: '2px solid red'
            }}>
                <BoxCollection column={column} row={row} />
                <Player getPos={this.getInitialPlayerPosition(store.getState().rowCol.rowCol)} column={column} row={row} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      rowCol: state.rowCol,
    }
}

export default connect(mapStateToProps)(Container);