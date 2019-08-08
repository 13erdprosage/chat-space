$(function() {
  $(".form__message").on("submit", function() {
    var input = $(".form__message").val();
    console.log(input);
  })
})