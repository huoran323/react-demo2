import React from 'react';
import { Select } from 'antd'
const Option = Select.Option;

export default {
    formateDate(time) {
        //若时间为空，返回空
        if (!time) return '';
        let date = new Date(time);
        //月份是从0开始的，所以需要加1
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    },

    pagination(data, callback) {
        return {
            //current当前是第几页
            onChange:(current) => {
                //回调函数，告诉业务代码当前是第几页
                callback(current)
            },
            //参数key值为antd定义好的
            current: data.result.page, //当前页码
            pageSize: data.result.page_size, //page, page_size为业务代码返回的key值
            total: data.result.total,
            showTotal:() => {
              return `共${data.result.total_count}条`  
            },
            //是否可以快速跳转至某页
            showQuickJumper:true,
        }
    },

    getOptionList(data){
        if(!data){
            return [];
        }
        let options = [] //[<Option value="0" key="all_key">全部</Option>];
        data.map((item)=>{
            options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
        })
        return options;
    },
}