$(function(){
 let layer = layui.layer

  getUserInfo()
  function getUserInfo() {
   $.ajax({
     method: `get`,
     url: `/my/userinfo`,
   
     success(res) {
       if (res.code !== 0) return layer.msg(res.message)
       renderAvatar(res)
       
     }





   })

 }
 const renderAvatar =(res) =>{
  
   if (res.user_pic) {
     $(`.text-avatar`).hide()
     $(`.user-box img`).css(`src`, res.user_pic)

   } else {
     $(`.layui-nav-img`).hide()
     const name =res.data.nikname || res.data.username
     const char = res.data.username.charAt(0).toUpperCase()
     $(`.text-avatar`).html(char)
   }

   $(`.text`).html(`欢迎&nbsp&nbsp;${res.data.username}`)

 }


  $(`#btnlogout`).on(`click`,function(){
    // const result = confirm(`确定退出？`)
    // if(confirm){
    //   localStorage.removeItem(`big_news_token`)
    //   location.href=`/login.html`
    // }


    layer.confirm(`你确认要退出？`,{icon:3,title:`提示`},function(index){
      localStorage.removeItem(`big_news_token`)
      location.href = `/login.html`
    })






  })





})