// 公共请求方法

import axios from "axios";
import base from './base'

const api = {
    /**
     * 首页
     */
    getHome(){
        return axios.get(base.home)
    },
    /**
     * 查询errors
     */
    getErrors(){
        return axios.get(base.errors)
    }
   

}
export default api