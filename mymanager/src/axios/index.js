import JsonP from 'jsonp'

export default class Axios{
    //options传进来个对象，可以控制参数
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback' //callback接收回调
            }, function (err, response) {
                //to-do
                    if (response.status === 'success') {
                        resolve(response);
                    } else {
                        reject(response.message);
                }
            })
        })
    }
}