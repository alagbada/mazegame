import React, { Component } from 'react';
import Box from './Box';

export class BoxRow extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    
    render() {
        return (
            <div>
               {this.props.rows.map((row, index) => <Box key = {index} />)}
            </div>
        )
    }
}

export default BoxRow;


// const boxColl = Array.apply(null, Array(parseInt(row))).map((num, index) => 
        //     <Box key = {index} />
        // );