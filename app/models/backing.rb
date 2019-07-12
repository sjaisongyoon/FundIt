# == Schema Information
#
# Table name: backings
#
#  id         :bigint           not null, primary key
#  backer_id  :integer          not null
#  reward_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Backing < ApplicationRecord

    belongs_to :backer,
        foreign_key: :backer_id,
        class_name: 'User'

    belongs_to :reward,
        foreign_key: :reward_id,
        class_name: 'Reward'
end
