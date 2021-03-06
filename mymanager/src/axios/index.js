import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd';

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

    static ajax(options) {
        //自定义loading
        let loading;
        //isShowLoading 是否显示加载请求的loading,默认为true
        if (options.data && options.data.isShowLoading !== false) {
            loading = document.getElementById("ajaxLoading");
            loading.style.display = "block"; //设置为block,显示loading
        }
        let baseUrl = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api';
        return new Promise((resolve, reject) => {
             axios({
                 url: options.url,
                 method: 'get',
                 baseURL: baseUrl,
                 timeout: 5000,
                 params: (options.data && options.data.params) || '',
             }).then((response) => {
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById("ajaxLoading");
                    loading.style.display = "none"; //设置为none,隐藏loading
                }
                if (response.status == '200') {
                    let res = response.data;
                    if (res.code == '0') { //业务代码中定义的code值，根据不同的项目会有不同的code值
                         resolve(res);
                    }
                    else {
                        Modal.info({
                            title: "提示",
                            content: res.msg  //业务代码中 定义的错误提示
                        })
                    }
                }
                else {
                    reject(response.data)
                }
             })
        })
    }
}