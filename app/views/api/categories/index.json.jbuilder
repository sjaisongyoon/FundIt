json.categories do 
    @categories.each do |category|
        json.set! category.id do
            json.extract! category, :id, :category_name, :description
        end
    end
end
