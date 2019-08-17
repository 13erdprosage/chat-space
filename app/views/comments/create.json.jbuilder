json.(@comment, :content, :image)
json.created_at @comment.created_at
json.user_name @comment.user.name
json.id @comment.id