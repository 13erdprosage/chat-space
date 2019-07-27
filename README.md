# README

# Database設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|varchar|null: false, unique: true|
|password|string|null: false|
|nickname|varchar|null: false|

### Association
- has_many: comments
- has_many: user_groups
- has_many :groups, through: :user_groups

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|varchar|null: false|

### Association
- has_many: comments
- has_many: user_groups
- has_many :users, through: :user_groups

## commentsテーブル

|Column|Type|Options|
|------|----|-------|
|text|text|-|
|image|image|-|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to: user
- belongs_to: group

## user-groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to: group
- belongs_to: user