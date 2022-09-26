$(function(){


  $(`.go2reg`).on('click',function(){
    $(`.reg-wrap`).hide()
    $(`.login-wrap`).show()
    console.log(1);

  })

  $(`.go2login`).on('click',function(){
    console.log(1);
    $(`.reg-wrap`).show()
    $(`.login-wrap`).hide()

  })
























})