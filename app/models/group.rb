class Group < ApplicationRecord
  has_many :group_users
  has_many :users, through: :group_users
  has_many :comments
  validates :name, presence: true, uniqueness: true

  def show_last_comment
    if (last_comment = comments.last).present?
      last_comment.content? ? last_comment.content : '画像が投稿されています'
    else
      'まだメッセージはありません'
    end
  end
end
