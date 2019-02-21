# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create!(
  first_name: 'Dylan',
  last_name: 'Attal',
  picture_url: 'https://i.kinja-img.com/gawker-media/image/upload/s--_DBGLHVf--/c_scale,f_auto,fl_progressive,q_80,w_800/eibgv7kctah62iddzywm.jpg'
)

Goal.create!(
  name: 'Car Down Payment',
  target: 4000,
  saved: 3000,
  user_id: 1
)

Goal.create!(
  name: 'House Down Payment',
  target: 25000,
  saved: 10000,
  user_id: 1
)

Goal.create!(
  name: 'Bahamas Vacation',
  target: 3000,
  saved: 500,
  user_id: 1
)

Goal.create!(
  name: 'Roadtrip',
  target: 1000,
  saved: 200,
  user_id: 1
)

Goal.create!(
  name: 'Christmas Gifts',
  target: 500,
  saved: 450,
  user_id: 1
)