import { reduxForm } from 'redux-form'
import InventoryForm from '../../components/InventoryForm'

export default reduxForm({ form: 'addInventoryForm' })(InventoryForm)
