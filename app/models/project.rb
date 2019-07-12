# == Schema Information
#
# Table name: projects
#
#  id             :bigint           not null, primary key
#  title          :string           not null
#  description    :string           not null
#  author_id      :integer          not null
#  amount_pledged :integer          default(0), not null
#  pledge_goal    :integer          default(0), not null
#  end_date       :date             not null
#  category_id    :integer          not null
#  location       :string           not null
#  campaign       :text
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Project < ApplicationRecord
    validates :title, :description, :author_id, :amount_pledged, :pledge_goal,
        :end_date, :category_id, :location, presence: true
    validates :title, uniqueness: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: 'User' 

    has_many :rewards,
        foreign_key: :project_id,
        class_name: 'Reward'

    has_many :backings,
        through: :rewards,
        source: :backings

    has_one_attached :photo

    # belongs_to :category,
    #     primary_key: :id,
    #     foreign_key: :category_id,
    #     class_name: 'Category'

end
