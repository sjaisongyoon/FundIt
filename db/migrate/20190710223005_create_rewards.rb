class CreateRewards < ActiveRecord::Migration[5.2]
  def change
    create_table :rewards do |t|
      t.integer :project_id, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.date :delivery_date, null: false
      t.string :ship_loc, null: false
      t.integer :cost, null: false
      t.timestamps
    end
    add_index :rewards, :project_id, unique: true
  end
end
