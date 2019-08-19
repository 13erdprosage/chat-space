json.array! @comments do |comment|
  json.content    comment.content
  json.image      comment.image.url
  json.date       comment.created_at.strftime("%Y/%m/%d %H:%M")
  json.user_name  comment.user.name
  json.id         comment.id
end