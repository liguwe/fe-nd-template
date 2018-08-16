import * as service from '../services/index';

export default {
    namespace: 'count',
    state: {
        a: {
            b: {
                c: {
                    count: 0,
                },
            },
        },
        total: 0,
    },
    reducers: {
        add(state) {
            state.a.b.c.count += 1;
        },
        setNewProp(state) {
            state.newProp = 'hi new prop';
        },
        setUserNum(state, data) {
            // debugger;
            state.total = data.payload.total.data
        }
    },
    effects: {
        * delayAdd({}, {call, put}) {
            yield call(service.sleep, 3000);
            console.log('************');
            yield put({type: 'add'})
        },
        * getUserNum({}, {call, put}) {
            const data = yield call(service.getUserNum);
            yield put({
                type: 'setUserNum',
                payload: {
                    total: data.data
                },
            })
        }
    }
};
