# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

ActiveRecord::Base.transaction do
    User.destroy_all
    Project.destroy_all
    Category.destroy_all
    Reward.destroy_all
    Backing.destroy_all

    categories = ['Art',
        'Comics & Illustrations',
        'Design & Tech',
        'Film',
        'Food & Craft',
        'Games',
        'Music',
        'Publishing'
    ];

    categories.each do |category| 
        Category.create(category_name: category)
    end
    

    password = 'password'
    #User
    demoUser = User.create(name: "Big Funder", email: 'BigFunder@fundIt.com', password: password)

    names = ['John', 'Peter', 'Paul', 'David', 'Victoria', 'Chet', 'Lanre', 'Anacleto', 'Jacob']
    emails = names.map {|name| name + "@test.com" }

    (0...names.length).each do |i|
        User.create(name: names[i], email: emails[i], password: password )
    end
    # Art Projects
    ids = User.all.ids
    def generate_rand_attr(ids)

        attributes = Hash.new()
        attributes[:author_id] = ids.sample
        attributes[:pledge_goal] = rand(1000...1000000)
        attributes[:amount_pledged] = attributes[:pledge_goal]*(rand(0...101)/100.0)
        day = rand(1...30)
        month = rand(7...13)
        year = ['2019', '2020'].sample
        date_str = year + "-" + month.to_s + "-" + day.to_s
        attributes[:end_date] = Date.strptime(date_str, '%Y-%m-%d')
        attributes[:location] = ["Europe", "Asia", "Africa", "North America",
                            "Middle East", "East Asia", "South America",
                            "Oceania", "Central America", "Carribean", "Central Asia",
                            "North Africa", "Eastern Europe"].sample
        return attributes    
    end

    project1 = Project.create( **generate_rand_attr(ids), 
                    title: "Dwellings of Eldervale", 
                    description: "An epic worker placement fantasy game designed by Luke Laurie. Fight the beasts! Dwell the land! Claim the Magic!", 
                    category_id: 6,
                    campaign: "Giant elemental monsters roam while dragons, wizards and warriors battle for dominance over 8 elemental realms. Players control unique factions seeking to adventure, battle, grow in power and ultimately dwell in Everdale"
    )
    file = open('https://fundit-seeds.s3-us-west-1.amazonaws.com/Dwellings.jpg')
    project1.photo.attach(io: file, filename: 'dwelling')

    project2 = Project.create( **generate_rand_attr(ids), 
                    title: "Vector Synthesis Book", 
                    description: "A Media Archaeological Investigation into Sound-Modulated Light", 
                    category_id: 1,
                    campaign: "Vector Synthesis: a Media Archaeological Investigation into Sound-Modulated Light is a computational art project inspired by theories of media archaeology, by the history of computer and video art, and by the use of discarded and obsolete technologies such as the Cathode Ray Tube monitor. This text explores the military and techno-scientific legacies at the birth of modern computing, and charts attempts by artists of the subsequent two decades to decouple these tools from their destructive origins. Using this history as a basis, I then describe a media archaeological, real time performance system using audio synthesis and vector graphics techniques to investigate direct relationships between sound and image using analog CRT displays. Key to this system is a didactic, open source approach which encourages reuse and modification by other artists. The conclusion of the book reflects on how the project and the research surrounding it has contributed to the larger experimental audiovisual arts community through events such as the Vector Hack Festival."
    ) 
    file2 = open('https://fundit-seeds.s3-us-west-1.amazonaws.com/Vector.png')
    project2.photo.attach(io:file2, filename: 'vector')

    project3 = Project.create( **generate_rand_attr(ids), 
                    title: "LUMI: The smarter way to learn and play music", 
                    description: 'The illuminated keyboard and app that lets you play great songs and learn music as you go.', 
                    category_id: 3,
                    campaign: "Playing a musical instrument is one of the great joys of life. Only problem is, it takes years of practice. That’s why a lot of people don’t learn, even though they love music. But we’ve figured out a new, smarter way to learn and play. LUMI lets everyone play and jam along to hit songs. You’ll be more musical in minutes — and amazed at how quickly you progress! LUMI is a fully illuminated keyboard and interactive app. Everything is connected by light and color. Just follow the colors in the app and the lights on the keyboard, and you can’t go wrong."
    )
    file3 = open('https://fundit-seeds.s3-us-west-1.amazonaws.com/lumi.jpg')
    project3.photo.attach(io: file3, filename: 'lumi')
  

    project4 = Project.create( **generate_rand_attr(ids), 
                    title: 'LYRA | Handheld Game Console', 
                    description: 'Bring all the history of video gaming in the palm of your hands. Powered by Raspberry Pi CM3L.', 
                    category_id: 3,
                    campaign: 'Lyra can virtually emulate any game console of the classic era, making it possible for you to carry hundreds of them in your pocket. You can play your all-time favourite video games whenever you want, wherever you want.'
    )
    file4 = open('https://fundit-seeds.s3-us-west-1.amazonaws.com/lrya.jpg')
    project4.photo.attach(io: file4, filename: 'lyra')

    project5 = Project.create( **generate_rand_attr(ids), 
                    title: 'Brothers Bond - the collected edition', 
                    description: 'An exiled prince and his two blind samurai protectors set on a dangerous journey to reclaim their kingdom from demonic forces.', 
                    category_id: 2,
                    campaign: 'ABOUT BROTHERS BOND: Brothers Bond is a 2018 Eisner Award-nominated webcomic on LINE Webtoon currently with one season.  This is your chance to be the first to get your hands on the reformatted print edition of season 1, which collects all 26 chapters of Brothers Bond - approximately 100 pages of content - complete with behind the scenes designs, roughs, and interviews with the creator!'
    )
    file5 = open('https://fundit-seeds.s3-us-west-1.amazonaws.com/brothers.jpg')
    project5.photo.attach(io: file5, filename: 'brothers')

    project6 = Project.create( **generate_rand_attr(ids), 
                    title: 'Operation Cavity - A Gripping Heist Film', 
                    description: 'Operation Cavity is a heist short film about a group of kids who team up to rob the dentist that has traumatized their childhood.', 
                    category_id: 4,
                    campaign: 'This is a heist film. Think Stranger Things meets Oceans 11.  Or for the older crowd think 1980s-style adventure, like what Steven Spielbergs Amblin Entertainment started off creating. Operation Cavity is an unusual coming-of-age story that follows 11 year-old Douglas Maroney as he plots to rob the dentist who traumatized his childhood.'
    )
    file6 = open('https://fundit-seeds.s3-us-west-1.amazonaws.com/cavity.jpeg')
    project6.photo.attach(io: file6, filename: 'cavity')

    project7 = Project.create( **generate_rand_attr(ids), 
                    title: 'The Wigbold chef’s knife: lifetime sharp', 
                    description: 'Crowd Cookware’s ultimate chef’s knife. Trusted by Michelin star chefs and for a fair price. Let’s hack the cookware industry again!', 
                    category_id: 5,
                    campaign: "Together with the crowd we’re hacking the cookware industry. Like kitchen pirates we’re evading the big brands by creating chef-grade cookware for a fair price with top manufacturers who normally only produce for elite brands. Without paying for the big brand frills like marketing, middlemen and sky-high margins."
    )
    file7 = open('https://fundit-seeds.s3-us-west-1.amazonaws.com/knife.jpg')
    project7.photo.attach(io: file7, filename: 'knife')

    project8 = Project.create( **generate_rand_attr(ids), 
                    title: 'Strange Horizons 2020', 
                    description: 'A free weekly speculative fiction magazine with a global perspective.', 
                    category_id: 8,
                    campaign: "Strange Horizons is a speculative fiction magazine, available free online, published every Monday. We began in September 2000. In the last year, Strange Horizons and our translation-focused sibling magazine, Samovar, have published nearly a million words of speculative fiction, poetry, essays, roundtables, interviews, and reviews."
    )
    file8 = open('https://fundit-seeds.s3-us-west-1.amazonaws.com/horizons.png')
    project8.photo.attach(io: file8, filename: 'vinyl')

    project9 = Project.create( **generate_rand_attr(ids), 
                    title: "The Holy Quattro - 4 Jungle Rarities - Back 1, 2, 3 or 4!", 
                    description: "Limited Edition 'Acid House' Yellow vinyl of DJ H, Tone Def, 3rd Rail & Fugitive. Back 1, 2, 3 or all 4!", 
                    category_id: 7,
                    campaign: "DJ H was a 15 year old kid when he made this EP. His dad, Les Howlett, worked as a bouncer at Raindance and could see the potential in the up and coming Rave Scene, so he moved from London to Kings Lynn in East Anglia and set up a record shop, Dance Force Records. Inspired by his record shopping trips to Music Power in London he wanted to create something similar and build a brand, including a record label and in doing so, inspired his son, Danny, to start creating some tunes for his dads label."
    )
    file9 = open('https://fundit-seeds.s3-us-west-1.amazonaws.com/vinyl.jpg')
    project9.photo.attach(io: file9, filename: 'vinyl')

    project10 = Project.create( **generate_rand_attr(ids), 
                    title: 'Root - A robot to teach coding', 
                    description: "Let your kids fall in love with coding with Root, the robot that turns any surface into an interactive coding experience.", 
                    category_id: 3,
                    campaign: "Coding with Root is a dynamic and creative experience: Root reacts to things in the environment, people react to Root and the interplay is orchestrated with code. You can program Root to move, turn, draw, erase, scan colors, play music, light up, sense touches, feel bumps, detect magnetic surfaces, perceive light, and respond to sensors in your phone or tablet."
    )
    file10 = open('https://fundit-seeds.s3-us-west-1.amazonaws.com/root.jpg')
    project10.photo.attach(io: file10, filename: 'root')


    ### Rewards
    ship_loc = ['Anywhere In The World', 'USA Only', 'Mexico Only', 'Europe']
    
    cost = [*10..1000]


    def gen_rand_date
        day = rand(1...30)
        month = rand(7...13)
        year = ['2019', '2020'].sample
        date_str = year + "-" + month.to_s + "-" + day.to_s
        Date.strptime(date_str, '%Y-%m-%d')
    end
    
    reward1 = Reward.create(title: 'Deluxe Eldervale', 
                    project_id: 1, 
                    description: "The portal opens and presents to you a copy of Luke Laurie's epic worker placement fantasy game. Includes every thing in the standard edition and more! 8 elemental minis, 20 metal dragon coins and 100 wooden resources add a fun flair to your game, making it truly the deluxe way to experience Eldervale. Stretch goals will be added when appropriate. Shipping will be charged after the campaign, please see the shipping section.",
                    delivery_date: gen_rand_date,
                    ship_loc: ship_loc.sample,
                    cost: cost.sample
    )
    
    reward2 = Reward.create(title: 'Ultra Eldervale', 
                    project_id: 1, 
                    description: "The portal opens and presents to you a copy of Luke Laurie's epic worker placement fantasy game. Includes every thing in the standard, deluxe edition and more! 8 elemental minis, 50 metal dragon coins and 150 wooden resources add a fun flair to your game, making it truly the deluxe way to experience Eldervale. Stretch goals will be added when appropriate. Shipping will be charged after the campaign, please see the shipping section.",
                    delivery_date: gen_rand_date,
                    ship_loc: ship_loc.sample,
                    cost: cost.sample
    )

    reward3 = Reward.create(title: "Vector Synthesis Book",
                    project_id: 2,
                    description: "One copy of the Vector Synthesis book with economy postal delivery anywhere in the world. Please contact me if you need special postal services at an additional rate. European deliveries include 7% German VAT.",
                    delivery_date: gen_rand_date,
                    ship_loc: ship_loc.sample,
                    cost: cost.sample
    )

end

