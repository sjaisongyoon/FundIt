json.extract! project, :id, :title, :description, :author_id, :amount_pledged,
    :pledge_goal, :end_date, :category_id, :location, :campaign

if project.photo.attached?
  json.photo url_for(project.photo)
end