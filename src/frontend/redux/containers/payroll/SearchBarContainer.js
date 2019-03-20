import { reduxForm } from 'redux-form'
import SearchBar from '../../../components/payroll/SearchBar'

const Search = reduxForm({
	form: 'payrollSearch'
})(SearchBar)

export default Search
