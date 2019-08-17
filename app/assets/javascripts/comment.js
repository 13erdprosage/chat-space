$(function() {
  function buildHTML(comment){
    var i = comment.image ? `<img src =` + comment.image + `>` : "";
    var html = `<div class="contents__main__log" data-comment-id="${comment.id}">
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

  var reloadComments = function() {
    if (window.location.href.match(/\/groups\/\d+\/comments/)){
      var last_comment_id = $('.contents__main__log:last').data("data-comment-id");
      $.ajax({
        url: "api/comments",
        type: 'get',
        dataType: 'json',
        data: {id: last_comment_id} //id取れてない
      })
      .done(function(comments) {    
        console.log(comments);
        var insertHTML = '';
        comments.forEach(function (comment) {
          insertHTML = buildHTML(comment);
          $('.contents__main__logs').append(insertHTML);
        })
        $('.contents__main__logs').animate({scrollTop: $('.contents__main__logs')[0].scrollHeight}, 'fast');
      })
      .fail(function() {
        alert('自動更新に失敗しました');
      });
    }
  };
  // setInterval(reloadComments, 5000);
});
