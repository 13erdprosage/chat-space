$(function() {
  function buildHTML(comment){
    var i = comment.image ? `<img src =` + comment.image + `>` : "";
    var html = `<div class="contents__main__log">
                  <div class="contents__main__log--user_name">
                    ${comment.user_name}
                  </div>
                  <div class="contents__main__log--time">
                    ${comment.date}
                  </div>
                  <div class="contents__main__log--comment">
                    ${comment.text}
                    ${i}
                  </div>
                </div>`;
    return html;
  }
  $(".new_comment").on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.contents__main__logs').append(html);
      $('.new_comment')[0].reset();
      $('.form__submit').prop('disabled', false);
      $('.contents__main__logs').animate({scrollTop: $('.contents__main__logs')[0].scrollHeight}, 'fast');
    })
    .fail(function() {
      alert('error')
      $('.form__submit').prop('disabled', false);
    })
  });
});
