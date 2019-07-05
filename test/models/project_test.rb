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

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
