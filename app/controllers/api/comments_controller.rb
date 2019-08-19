class Api::CommentsController < ApplicationController
  def index
    @group = Group.find(params[:group_id])
    @comments = @group.comments.includes(:user).where('id > ?', params[:last_id]) 
  end
end