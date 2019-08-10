json.text       @comment.content
json.date       @comment.created_at.strftime("%Y/%m/%d %H:%M")
json.user_name  @comment.user.name