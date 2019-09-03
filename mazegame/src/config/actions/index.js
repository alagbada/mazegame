const positionUpdate = (xPosition, yPosition) => {
    return {
        type: 'UPDATE_POSITION',
        payload: {
            position: [xPosition, yPosition]
        }
    }
}

export default positionUpdate;