import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import UserNavDropdown from '../user_nav/user_nav_dropdown';
import { logout } from '../../actions/session_actions';



function Modal({ modal, closeModal, logout }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'userNavDropdown':
            component = <UserNavDropdown closeModal={closeModal} />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
