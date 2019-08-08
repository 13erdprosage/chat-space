$(function() {
  function buildHTML(comment){
      var html = `<div class="comments__main__log">
                    <div class="contents__main__log--user_name">
                      ${comment.user_name}
                    </div>
                    <div class="contents__main__log--time">
                      ${comment.date}
                    </div>
                    <div class="contents__main__log--comment">
                      ${comment.content}
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
      $('.comments__main__log').append(html)
      $('.contents__main__log--comment').val('')
    })
  });
});
