export function Count({count, newProp, total, dispatch}) {
    return (
        <div>
            <h3>Count: {count}</h3>
            <h3>state.newProp: {newProp || 'not setted'}</h3>
            <h3>total number of user: {total}</h3>
            <button
                onClick={() => {
                    dispatch({
                        type: 'count/add',
                    });
                }}
            >
                Add
            </button>
            <button
                onClick={() => {
                    dispatch({
                        type: 'count/delayAdd',
                    });
                }}
            >
                delay 3s Add
            </button>
            <button
                onClick={() => {
                    dispatch({
                        type: 'count/getUserNum',
                    });
                }}
            >
                async get num of user
            </button>
            <button
                onClick={() => {
                    dispatch({
                        type: 'count/setNewProp',
                    });
                }}
            >
                Set New Prop
            </button>
        </div>
    );
}