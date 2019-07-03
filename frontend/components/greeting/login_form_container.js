import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, resetSessionErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Login'
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    resetSessionErrors: () => dispatch(resetSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)