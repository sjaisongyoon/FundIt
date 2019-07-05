class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :author_id, null: false #foreign key
      t.integer :amount_pledged, null: false, :default => 0
      t.integer :pledge_goal, null: false, :default => 0
      t.date :end_date, null: false
      t.integer :category_id, null: false #foreign key
      t.string :location, null: false 
      t.text :campaign
      t.timestamps
    end

    add_index :projects, :title, unique: true
    add_index :projects, :author_id
    add_index :projects, :category_id

  end
end
