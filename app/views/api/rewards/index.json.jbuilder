json.rewards do 
    @rewards.each do |reward|
        json.set! reward.id do 
            json.extract! reward, :id, :title, :description, :cost, :ship_loc, :delivery_date
        end
    end
end 
