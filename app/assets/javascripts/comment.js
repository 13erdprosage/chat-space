$(function() {
  function buildHTML(comment){
    console.log(comment)
      var html = `<div class="contents__main__log">
                    <div class="contents__main__log--user_name">
                      ${comment.user_name}
                    </div>
                    <div class="contents__main__log--time">
                      ${comment.date}
                    </div>
                    <div class="contents__main__log--comment">
                      ${comment.text}
                    </div>
                  </div>`;
      return html;
  }
  function scroll() {
    $('.contents__main__logs').animate({scrollTop: $('.contents__main__log')[0].scrollHeight});
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
      $('.form__message').val('');
      $('.form__submit').prop('disabled', false);
      scroll();
    })
  });
});
