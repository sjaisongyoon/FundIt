json.projects do 
    @projects.each do |project|
        json.set! project.id do 
            json.partial! '/api/projects/project.json.jbuilder', project: project
        end
    end
end

json.users do 
    @projects.each do |project|
        json.set! project.author_id do
            json.name project.author.name
        end
    end
end

json.set! @category.id do 
    json.extract! @category, :id, :category_name, :description
end

