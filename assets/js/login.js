$(function () {


  $(`.go2reg`).on('click', function () {
    $(`.reg-wrap`).hide()
    $(`.login-wrap`).show()
    console.log(1);

  })

  $(`.go2login`).on('click', function () {
    console.log(1);
    $(`.reg-wrap`).show()
    $(`.login-wrap`).hide()

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





















})