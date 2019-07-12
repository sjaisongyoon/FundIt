# == Schema Information
#
# Table name: rewards
#
#  id            :bigint           not null, primary key
#  project_id    :integer          not null
#  title         :string           not null
#  description   :string           not null
#  delivery_date :date             not null
#  ship_loc      :string           not null
#  cost          :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Reward < ApplicationRecord
    validates :title, :description, :delivery_date, :ship_loc, :cost, 
        presence: true
    
    belongs_to :project,
        primary_key: :id,
        foreign_key: :project_id,
        class_name: 'Project'

    has_many :backings,
        foreign_key: :reward_id,
        class_name: 'Backing'

    has_many :backers,
        through: :backings,
        source: :backer
end
