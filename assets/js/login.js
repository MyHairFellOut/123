
$(function () {

  let url = ` http://big-event-vue-api-t.itheima.net`
  const layer = layui.layer


  $(`.go2reg`).on('click', function () {
    $(`.reg-wrap`).show()
    $(`.login-wrap`).hide()
    

  })

  $(`.go2login`).on('click', function () {
    console.log(1);
    $(`.reg-wrap`).hide()
    $(`.login-wrap`).show()

  })


  const form = layui.form
  form.verify({
    pass: [
      /^[\S]{6,12}$/
      , '密码必须6到12位，且不能出现空格'
    ],
    same: function (value) {
      if ($(`#password`).val() != value) return `2次密码不一样`
    }

  })


//  注册表单事件
  $(`#formReg`).on(`submit`, function (e) {
    e.preventDefault()


    $.ajax({
      method: `post`,
      url:  `/api/reg`,
       contentType: `application/json`,
      data:
        $(this).serialize()
      ,
      success(res) {
        if (res.code !== 0) return alert(res.message)

        layer.msg(res.message)
        $(`#go2login1`)[0].click()
        console.log(122);
        
      }
    })
  })

  // 登录事件

  $(`.loginform`).on(`submit`,function(e){
    e.preventDefault()

   $.ajax({
    method:`post`,
     url:  `/api/login`,
     contentType:`application/json`,
     data:
       $(this).serialize()
     ,
     success(res){
      if(res.code!=0) return layer.msg(res.message)
      localStorage.setItem(`big_news_token`,res.token)

      location.href=`/home.html`
      console.log(`登录成功`);
     }




   })





  })




















})