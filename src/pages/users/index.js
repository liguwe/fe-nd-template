
import { connect } from 'dva';
import User from './components/User/index'

function mapStateToProps(state) {
    const { list, total, page } = state.users;
    return {
        list,
        total,
        page,
        loading: state.loading.models.users,
    };
}

export default connect(mapStateToProps)(User)