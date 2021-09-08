import React from 'react';
import './input_sp.css';

function InputSP(props) {
    return(
        <>
        <div className="input_sp">
        <label className="text_sp">{props.text}</label>
        </div>
            <div className='input_sp_container'>
                <input type='text' placeholder={props.placeholder} className='text_input'></input>
                    <svg className="svg" width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1.99984C10.5267 1.99984 12.78 3.41984 13.88 5.6665C12.78 7.91317 10.5267 9.33317 8 9.33317C5.47334 9.33317 3.22001 7.91317 2.12001 5.6665C3.22001 3.41984 5.47334 1.99984 8 1.99984ZM8 0.666504C4.66667 0.666504 1.82001 2.73984 0.666672 5.6665C1.82001 8.59317 4.66667 10.6665 8 10.6665C11.3333 10.6665 14.18 8.59317 15.3333 5.6665C14.18 2.73984 11.3333 0.666504 8 0.666504ZM8 3.99984C8.92 3.99984 9.66667 4.7465 9.66667 5.6665C9.66667 6.5865 8.92 7.33317 8 7.33317C7.08 7.33317 6.33334 6.5865 6.33334 5.6665C6.33334 4.7465 7.08 3.99984 8 3.99984ZM8 2.6665C6.34667 2.6665 5 4.01317 5 5.6665C5 7.31984 6.34667 8.6665 8 8.6665C9.65334 8.6665 11 7.31984 11 5.6665C11 4.01317 9.65334 2.6665 8 2.6665Z" fill="#515151"/>
                    </svg>
            </div>
        </>
    )
}

export default InputSP;