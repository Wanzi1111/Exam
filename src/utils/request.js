import Cookie from "js-cookie"
import fetch from "dva/fetch"
function formatUrl(url,data){
  
    if(url.includes("?")){
        return url
    }
    return url+"?"+Object.keys(data).map((keys)=>{
        return `${keys}=${data[keys]}`
    }).join("&")
}
function request(method, url, data) {
  
    method = method.toUpperCase()
    url = method === "GET" ? formatUrl(url, data) : url;
   
    const options={
        method,
        headers:{
            authorization:Cookie.get('usertoken') ? Cookie.get('usertoken') : null
        }
    }
    if(method==="POST"){
        options.headers={
            ...options.headers,
            "content-type":"application/json;charset=utf8",
        }
        options.body=JSON.stringify(data)
    }else if(method==="DELETE"){
        options.headers={
            ...options.headers,
            "content-type":"application/json;charset=utf8",
        }
        options.body=JSON.stringify(data)
    }else if(method==="PUT"){
        options.headers={
            ...options.headers,
            "content-type":"application/json;charset=utf8",
        }
        options.body=JSON.stringify(data)
    }
//    fetch(url,options);
    // fetch的返回值是promise对象，参数一url地址，第二个参数是配置项
   return fetch(url,options).then(res => {
        if(res.status>=200&&res.status<300||res.status===304){
            return res.json()//promise对象
        }
    })
}
export default {
    get(url, params={}) {
        return request("get", url, params)
    },
    post(url, data={}) {
        return request("post", url, data)
    },
    put(url, params={}) {
        return request("put", url, params)
    },
    delete(url, data={}) {
        return request("delete", url, data)
    },
}