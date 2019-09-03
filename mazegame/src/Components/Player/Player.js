import React from 'react'
import { connect } from 'react-redux';
import walkSprite from './player_walk.png';
import handleMovement from '../Movement';
import { SPRITE_SIZE_PX } from '../../config/constants';


function Player(props) {
    return (
        <div style={{
            position: 'absolute',
            top: props.position.position[1],
            left: props.position.position[0],
            backgroundImage: `url('${walkSprite}')`,
            backgroundPosition: '0 0',
            width: SPRITE_SIZE_PX,
            height: SPRITE_SIZE_PX,
        }} />
        
    )
}

const mapStateToProps = (state) => {
    return {position: state.position}
}

export default connect(mapStateToProps)(handleMovement(Player))



    // componentWillMount() {
    //     this.getPositionCenter(this.props.row, this.props.column);
    // }

    // getPositionCenter = (x, y) => {
    //     let xCenter = Math.ceil(x / 2);
    //     let yCenter = Math.ceil(y / 2);
    //     this.setState({xPosition: xCenter, yPosition: yCenter});
    // }

    // handleMovement = 
