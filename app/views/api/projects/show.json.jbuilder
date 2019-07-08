json.project do
    json.partial! '/api/projects/project', project: @project
end

json.users do
    json.author_name @project.author.name
end