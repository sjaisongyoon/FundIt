json.project do
    json.partial! '/api/projects/project', project: @project
end

json.users do
    # json.author_name @project.author.name
    json.author do
        json.extract! @project.author, :name, :biography
    end
end