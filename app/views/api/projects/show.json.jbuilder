json.project do
    json.partial! '/api/projects/project', project: @project
end

json.users do
    # json.author_name @project.author.name
    json.author do
        json.extract! @project.author, :name, :biography
    end
end

# json.rewards @rewards

json.rewards do 
    @project.rewards.each do |reward|
        json.set! reward.id do 
            json.extract! reward, :id, :title, :description, :cost, :ship_loc, :delivery_date, :project_id
        end
    end
end

json.backings do
    @project.backings.each do |backing|
        json.set! backing.id do
            json.extract! backing, :id, :reward_id, :backer_id
        end
    end
end

