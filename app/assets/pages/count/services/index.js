// test
import request from "../../../utils/request";

export function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve();
        }, ms)
    })
}

// 获取用户数量
export function getUserNum() {
    return request('/api/users/count');
}