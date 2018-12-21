import {hashHistory} from 'dva/router'
//import {browserHistory} from 'dva/router'




const common = { 
    history: hashHistory,
    version: '0.0.1',
    image_cloud: 'http://web.file.myqcloud.com/files/v1/10053145/saiyao/v1/images/',
}

const config = {
    development: {
       // api: 'http://ljia.xyz/'
        api:'http://132.232.123.169/v0/',
        redit:'http://132.232.123.169/preview.html?id=',
    },
    production: {
      //  api: 'http://ljia.xyz/'
        api:'http://132.232.123.169/v0/',
        redit:'http://132.232.123.169/preview.html?id=',
    },
}

const mode = process.env.NODE_ENV || 'development'
const result = {...common, ...config[mode]}
export default result
