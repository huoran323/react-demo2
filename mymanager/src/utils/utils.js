
export default {
    formateDate(time) {
        //若时间为空，返回空
        if (!time) return '';
        let date = new Date(time);
        //月份是从0开始的，所以需要加1
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    },

    pagination(data, callback) {
        let page = {
            //current当前是第几页
            onChange:(current) => {
                //回调函数，告诉业务代码当前是第几页
                callback(current)
            },
            //参数key值为antd定义好的
            current: data.result.page, //当前页码
            pageSize: data.result.page_size, //page, page_size为业务代码返回的key值
            total: data.result.total,
            show
        }
    }
}