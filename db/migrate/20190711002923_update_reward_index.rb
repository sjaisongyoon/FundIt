class UpdateRewardIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :rewards, :project_id
    add_index :rewards, :project_id
  end
end
