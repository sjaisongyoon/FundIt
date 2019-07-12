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

require 'test_helper'

class BackingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
