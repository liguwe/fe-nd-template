import {connect} from 'dva';
import {Count} from './components/Count/index'


function mapStateToProps(state) {
    return {
        count: state.count.a.b.c.count,
        newProp: state.count.newProp,
        total: state.count.total
    };
}

export default connect(mapStateToProps)(Count);
