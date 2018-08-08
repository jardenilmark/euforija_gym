import { reduxForm } from 'redux-form'
import InventoryForm from '../../../components/inventory/InventoryForm'

export default reduxForm({ form: 'addInventoryForm' })(InventoryForm)
