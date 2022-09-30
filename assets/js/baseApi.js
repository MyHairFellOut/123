
$.ajaxPrefilter( function (config) {

 

  config.url =`http://big-event-vue-api-t.itheima.net` + config.url 
  config.contentType =`application/json`
  if (config.url.includes(`/my`)){

   config.headers={
     Authorization:localStorage.getItem(`big_news_token`) || ``
   }
    

  }

  config.error = function (err) {
    console.log(err);
    if (
      err.responseJSON?.code == 1 &&
      err.responseJSON?.message == "身份认证失败！"
    ) {
     
      localStorage.clear()
      location.href = `/login.html`
    }


  }
  // 表单内容改变成JSON方式发送
  const formt2Json = (source) => {
    let target = {}
    source.split(`&`).forEach((el) => {
      let kv = el.split(`=`)
      target[kv[0]] = kv[1]
    })
    console.log(target);
    return JSON.stringify(target)
  }
  config.data = config.data && formt2Json(config.data)
  
})