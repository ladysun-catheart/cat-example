import Contact from './contact'
import {connect} from 'react-redux'
import {ContactActions} from '../core/store/redux/actions'

const mapStateToProps = state => ({
  msg: state.contact.msg,
  error: state.contact.error,
})
const mapDispatchToProps = dispatch => ({
  sendMessage: msg => dispatch(ContactActions.sendMessage()),
  cleanContact: () => dispatch(ContactActions.cleanContact())
})

const ContactWrapper = connect(mapStateToProps, mapDispatchToProps)(Contact)

export default ContactWrapper
