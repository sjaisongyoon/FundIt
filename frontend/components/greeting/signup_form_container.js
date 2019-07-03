import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, resetSessionErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) =>({
    errors: state.errors.session,
    formType: 'Signup'
});

const mapDispatchToProps = dispatch =>({
    processForm: (user) => dispatch(signup(user)),
    resetSessionErrors: () => dispatch(resetSessionErrors())
    
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)