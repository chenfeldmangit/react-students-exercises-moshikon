import React from 'react';
import ButtonComponent from "./ButtonComponent";

GongModal.propTypes = {

};

function GongModal({title, value, onValueChange, onSubmit, onCancel}) {
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <h3>{title}</h3>
                <input className="tweeter-search-container-input" type="search" placeholder="name"
                       value={value}
                       onChange={(text) => onValueChange(text.target.value)}/>
                <ButtonComponent title="Submit" onClick={onSubmit}/>
                <ButtonComponent title="Cancel" onClick={onCancel}/>
            </div>
        </div>
    );
}

export default GongModal;