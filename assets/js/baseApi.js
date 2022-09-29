
$.ajaxPrefilter( function (config) {


  config.url =`http://big-event-vue-api-t.itheima.net` + config.url 
  config.contentType =`application/json`
  const formt2Json = (source) => {
    let target = {}
    source.split(`&`).forEach((el) => {
      let kv = el.split(`=`)
      target[kv[0]] = kv[1]
    })
    console.log(target);
    return JSON.stringify(target)
  }
  config.data = formt2Json(config.data)
  
})