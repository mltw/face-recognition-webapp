import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onSubmit}) => {
    return (
        <div>
            <p className='f4'>
                {'This AI brain will detect faces in your pictures. Try it! (only allows .jpg format)'}
            </p>
            <div className = 'center'>
                <div className = 'center form pa4 br3 shadow-5'>
                    <input className = 'f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button className = 'w-50 grow f4 link ph3 pv2 dib white bg-light-purple' onClick = {onSubmit}>
                        Detect
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;