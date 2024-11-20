import './EditProfileModal.css'
import { useState, useContext, useEffect } from 'react'
import ModalWithForm from '../ModalWithForm/ModalWithForm.jsx'

export default function EditProfileModal( {isOpen, activeModal, closeActiveModal, isLoading, currentUser, handleProfileChange } ){
    const [data, setData] = useState({
        name: '',
        avatar: '',
    });

    const handleChanges = (evt) => {
        const { name, value } = evt.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleProfileChange(data.name, data.avatar);
      };

    useEffect(() => {
        if (isOpen) {
          setData({
            name: currentUser.name,
            avatar: currentUser.avatar,
          });
        }
    }, [isOpen, currentUser]);

    return(
        <ModalWithForm buttonText={isLoading ? 'Saving...' : 'Save'} title='Change profile data' activeModal={activeModal} closeActiveModal={closeActiveModal} isOpen={isOpen} onSubmit={handleSubmit}>
            <label className="modal__form-group" htmlFor="name" id="modal-name">
                <span className="modal__form-title">Name *</span>
                <input
                    type="text"
                    placeholder="Name"
                    className="modal__form-input"
                    name="name"
                    id="change-name"
                    onChange={handleChanges}
                    value={data.name}
                />
                <span className="modal__input-error"></span>
            </label>
            <label className="modal__form-group" htmlFor="avatar">
                <span className="modal__form-title">Avatar *</span>
                <input
                    type="url"
                    placeholder="Avatar URL"
                    id="change-avatar"
                    className="modal__form-input modal__input_type_url"
                    name="avatar"
                    onChange={handleChanges}
                    value={data.avatar}
                />
                <span
                    className="modal__input-error"
                    id="post-image-url-input-error"
                ></span>
            </label>
            <button className='button-logout'>or Logout</button>
        </ModalWithForm>
    )
}