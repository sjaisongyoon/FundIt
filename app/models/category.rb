# == Schema Information
#
# Table name: categories
#
#  id            :bigint           not null, primary key
#  category_name :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  description   :string
#

class Category < ApplicationRecord
    validates :category_name, presence: true

    has_many :projects,
        primary_key: :id,
        foreign_key: :category_id,
        class_name: 'Project'
end
