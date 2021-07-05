import React from 'react'
import './FaceRecognition.css'
import { v4 as uuidv4 } from 'uuid'; // unique id for each key

const FaceRecognition = ({box, imageURL}) => {
    return (
        <div className = 'center ma'>
            <div className = 'absolute mt2'>
                <img id = "inputimage" src = {imageURL} alt = "img" width = '500px' height='auto'/>
                    {/* curly brackets for JS syntax */}
                    {
                    box.map( box => {
                        return (
                        <div key = {uuidv4()} className = 'bounding-box' style = {{top: box.topRow, right: box.rightColn, bottom: box.bottomRow, left:box.leftColn}}>
                        </div>
                            )
                        })
                    }
            </div>
        </div>
    );
}

export default FaceRecognition;
