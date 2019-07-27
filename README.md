# README

# Database設計

## userテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|-|
|email|varchar|null: false, unique: true|
|password|char|null: false|
|nickname|varchar|null: false|

### Association
- has_many: comments
- has_many :user_groups

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|-|
|group_name|varchar|null: false|

### Association
- has_many: comments
- has_many :user_groups

## commentテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|-|
|text|varchar|null: false|
|image|image|-|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to: user
- belongs_to: group

## user-groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|-|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
