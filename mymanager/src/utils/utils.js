export default {
    formateDate(time) {
        //若时间为空，返回空
        if (!time) return '';
        let date = new Date(time);
        //月份是从0开始的，所以需要加1
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    }
}