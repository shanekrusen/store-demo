class AddCategoryToItems < ActiveRecord::Migration[5.0]
  def change
    add_column :items, :category_id, :integer
    add_index :items, :category_id
  end
end
