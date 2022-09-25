$(function () {
  $(`#link_reg`).on(`click`, function (e) {
    $(`.login-box`).show()
    $(`.reg-box`).hide()

  })


  $(`#link_login`).on(`click`, function (e) {
    $(`.login-box`).hide()
    $(`.reg-box`).show()

  })


  let form = layui.form

  form.verify({
    pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],

    repwd: function (value) {
      let pwd = $(`.reg-box [name=password]`).val()
      console.log(pwd)
      if (pwd !== value) {
        return '俩次密码不一致'
      }
    }
  })

})