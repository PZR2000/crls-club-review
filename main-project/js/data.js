const clubsArray = [
    {
        "club": "Book Club",
        "advisor": "Emily Houston",
        "location": "CRLS Library",
        "tags": [
            "ela"
        ],
        "time": "1-2 Wednesdays per month, 3:00 PM",
        "img": "bookClub.png",
        "desc": "The CRLS Library Book Club is for any and all students who like to read. The book club will meet during all three lunches and include book discussions, Skypes with authors, and lots of food!"
    },
    {
        "club": "Literary Magazine",
        "advisor": "Jennifer Sarmiento",
        "location": "2212",
        "tags": [
            "ela"
        ],
        "time": "Fridays 4:00 PM",
        "img": "litMag.png",
        "desc": "Description Not Provided"
    },
    {
        "club": "Poetry Club",
        "advisor": "Emmanuel Yeboah",
        "location": "2320",
        "tags": [
            "ela"
     
        ],
        "time": "Wednesdays 1:00 PM",
        "img": "poetry.png",
        "desc": "Poetry Club is a place for students to create, share and listen to poetry! Each week there is a focus on a different poetic style and/or poetic device for students to explore and then practice. The students that run the club are passionate about helping others through the writing process and creating a comfortable environment to share written work. Poetry Club is a great place for students to express themselves creatively through writing and is always looking for new members to join!"
    },
    {
        "club": "Register Forum",
        "advisor": "Steven Matteo",
        "location": "3401",
        "tags": [
            "ela"
        ],
        "time": "First Thursday of each month, 2:30 PM",
        "img": "regForum.png",
        "desc": "Convey the message of social and civic responsibility to each reporter/writer and bring issues to the readership that are especially pertinent to the school community. Our motto, \"Listening to every voice, printing what you need to hear,\" forms the core of our principles and demonstrates our responsiveness and responsibility to our readership. Editor - in -Chief: Sun - jung Yum and Cecilia Barron, Editors - in -Chief Managing Editors: Isabelle Agee - Jacobson and Vera Targoff. Established in 1891 as the C.M.T.S. Register. \"Listening to every voice, printing what you need to hear.\" "
    },
    {
        "club": "Debate Club",
        "advisor": "Erik Scott",
        "location": "1105",
        "tags": [
            "ela"
        ],
        "time": "Wednesdays and Saturdays, 4:00 PM",
        "img": "debateClub.png",
        "desc": "Come become a quick thinker and an effective speaker, while winning a few trophies and becoming a part of our close-knit team! Members of the Speech and Debate are welcome to attend any or all of the tournaments that our team goes to (which are held once or twice a month). We guarantee you'll love it, so come just give it a try!"
    },
    {
        "club": "History Club",
        "advisor": "Lily Read",
        "location": "",
        "tags": [
            "ela"
        ],
        "time": "Every other Thrusday at 8:30 AM",
        "img": "histClub.png",
        "desc": "As a student organization at CRLS, the History Club participates in the annual National History Day competition, sending a number of presentations each year. In addition the History Club makes an annual trip to participate in advocacy work or to explore places of historical relevance."
    },
    {
        "club": "Yearbook Club",
        "advisor": "Jacqueline Cesario",
        "location": "1606",
        "tags": [
            "miscellaneous"
        ],
        "time": "Wednesdays and Thursdays, 2:00 PM",
        "img": "yearClub.png",
        "desc": "The yearbook staff is led by a dedicated group of seniors who oversee the yearbook concept, design, photography, editorial, sales and business. They work together as a team to capture the important moments of the school year in every page of our yearbook. The yearbook isn't just created by seniors; students in all grades participate in making the yearbook a success every year. The editors and senior leaders of the yearbook are supported by numerous freshmen, sophomores, juniors, and additional seniors who design the pages and photograph countless events, activities, and games at Rindge."
    },
    {
        "club": "Artificial Intelligence and Machine Learning Club",
        "advisor": "Jose-Luis Martinez",
        "location": "",
        "tags": [
            "stem"
        ],
        "time": "Fridays 3:00 PM",
        "img": ""
    },
    {
        "club": "Aspine/CTF Club",
        "advisor": "Eric Wu",
        "location": "",
        "tags": [
            "stem"
        ],
        "time": "Wednesdays 1:00 PM",
        "img": ""
        "desc": "Aspine is an alternative front-end for Aspen which makes it easier to access your grades from your computer and phone. We need YOUR help to add features and keep Aspine running.

    },
    {
        "club": "Astronomy Club",
        "advisor": "Tal SebellShavit",
        "location": "2412",
        "tags": [
            "stem"
        ],
        "time": "Thursdays 3:00 PM",
        "img": "astroClub.png",
        "desc": "Astronomy club invites guest speakers every month, watches space-themed movies, learns about discoveries in Astronomy and launches rockets."
    },
    {
        "club": "Biotech Club",
        "advisor": "Hiroko Kazcmarek, Pei-Yun Chu",
        "location": "1303",
        "tags": [
            "stem"
        ],
        "time": "Mondays 3:00 PM",
        "img": "biotechClub.png",
        "desc": "Members learn research techniques and practice skills in the RSTA state-of-the-art Biotech Lab, meet scientists from the industry and learn about careers in science."
    },
    {
        "club": "Club Med",
        "advisor": "Gina Hughes",
        "location": "1228",
        "tags": [
            "stem"
        ],
        "time": "Every other Wednesday, 4:00 PM",
        "img": "medClub.png",
        "desc": "Students volunteer and have school community members donate blood. The students take blood pressures at: the Public works Health Fair, Assisted Living at Youville Hospital, the staff at CRLS, and at the Cambridge school-wide Science Fairs. Junior and senior students educate the student body with eating a healthy breakfast, students plan events such as free breakfast promotion as well as education through Public Service Announcements."
    },
    {
        "club": "Computer Science Club",
        "advisor": "Doug McGlathery",
        "location": "4402",
        "tags": [
            "stem"
        ],
        "time": "Wednesdays 3:30 PM",
        "img": "csClub.png",
        "desc": "Students will learn about machine learning, web development, IOT, and more. Everyone is welcome and no experience is required. If there is something you want to learn within the realm of computer science then we will make sure to cover it during club time. We also participate in hackathons, app challenges, and helping our community using our tech skills."
    },
    {
        "club": "Robotics Club",
        "advisor": "Conrad Hauck, Jose-Luis Martinez",
        "location": "1201",
        "tags": [
            "stem"
        ],
        "time": "Tuesdays 3:00 PM",
        "img": "roboticsClub.png",
        "desc": "The CRLS Robotics Club is for students interested in the exciting and growing field of robotics. The club will learn a variety of techniques to design, build, program robots and fundraise. They will then take that knowledge and apply it to compete in in the FIRST Robotics Boston Regional. There is no experience needed to join the club and new members are welcome. The club meets Thursday after school starting October 17 from 2:30 - 4PM. During our competition “build season” we will design and build a robot for this year’s competition based on the specification released in the first week of January. We will complete the robot by the February break. During this time the club will meet every day from 2:30 - 6PM."
    },
    {
        "club": "Math Club",
        "advisor": "Nora Watson",
        "location": "3610",
        "tags": [
            "stem"
        ],
        "time": "Tuesdays 3:00 PM",
        "img": "mathClub.png",
        "desc": "Do you like thinking? Do you want to learn creative and elegant ways to solve problems? Do you want to explore surprising connections between different ideas? Then Math Club is for you. The Math Club participates in the New England Math League, Harvard-MIT November Tournament, and the AMC/AIME. New England Math League contests happen six times per school year, starting in October, once per month. Everyone is welcome to join us. Math ClubContact Nora Watson to learn more. Or just stop by Room 3124. Everyone is welcome at Math Club!"
    },
    {
        "club": "Origami Club: STEAM Integration",
        "advisor": "Hiroko Kaczmarek",
        "location": "",
        "tags": [
            "stem",
            "musicArts"
        ],
        "time": "Fridays 4:00 PM",
        "img": ""
        "desc": "Our mission is to teach others about the incredible connection between origami and STEAM. We also plan to get involved with our community outside of CRLS by doing things like donating handmade origami projects, building 1,000 paper cranes to send to a hospital and researching origami’s effects on the brain."
    },
    {
        "club": "Rocket Club",
        "advisor": "Liza Hansel",
        "location": "",
        "tags": [
            "stem",
        ],
        "time": "Wednesdays 3:30 PM",
        "img": ""
        "desc": "The CRLS Rocket club participates in the American Rocketry Challenge. Over the course of the year the club builds and launches multiple rockets trying to get as close as possible to certain predetermined parameters like max altitude and flight duration."
    },
    {
        "club": "Science Team",
        "advisor": "Kris Newton",
        "location": "2405",
        "tags": [
            "stem"
        ],
        "time": "Tuesdays 3:15 PM",
        "img": "scienceClub.png",
        "desc": "The CRLS Science Team is an opportunity to compete in a wide variety of science events. Competitive events include all disciplines of science and can involve laboratory experiments, design projects, cooperative challenges, and paper and pencil tests. The CRLS Science Team participates in several major science competitions: North Shore Science League – The NSSL has seven meets throughout the school year (2nd Tuesday of the month in October, November, December, January, February, March, and April). Teams of four compete in one of three events each month. Women of Science Competition - This is a one-day event in December in which teams of three female students compete in four different events, one of which is a build-ahead event. Students must be 11th or 12th graders. MIT Science Olympiad Invitational - This is a one-day event in January consisting of most of the same events that will be at the Massachusetts State Olympiad Competition. Massachusetts State Science Olympiad – This is a one-day event in March consisting of 25 events. Each student participates in 2-4 events. To prepare, students are paired with mentors who meet with them weekly beginning in late fall. MIT Science Trivia Competition - This team trivia competition is part of the Cambridge Science Festival and happens during April vacation. Teams of up to 5 students and 5 alternates compete against teams from other schools. *A note about the meeting time: Tuesdays is the regular day we check in as a team. If Tuesday conflicts with another student activity, it is still possible to be a science team member!"
    },
    {
        "club": "Underwater Robotics Team",
        "advisor": "Paul McGuinness",
        "location": "3402",
        "tags": [
            "stem"
        ],
        "time": "Thursdays 2:15 PM",
        "img": "undRobClub.png",
        "desc": "The CRLS Underwater Robotics team is a group of students who are interested in designing, building, and flying underwater robots to meet specific mission requirements and challenges for a regional and international competition. We brainstorm engineering solutions to underwater challenges, we build and test different electrical and mechanical systems to meet the competition scenarios, and we spend time testing ‘bot designs in the test tank in the classroom and in the diving pool in the school pool. We have professional relationships with local engineering and research firms and institutions for additional extracurricular opportunities for interested and motivated students. All interested students are welcome."
    },
    {
        "club": "Club 4",
        "advisor": "Susie VanBlaricum",
        "location": "CRLS Media Cafe",
        "tags": [
            "communityService"
        ],
        "time": "First Friday of each month, 4:00 PM",
        "img": "club4.png"
        "desc": "Teams of 6-8 volunteers shop for, prepare, and serve meals for the homeless at the Harvard Square Homeless Shelter every Friday and Sunday night."
    },
    {
        "club": "Habitat for Humanity",
        "advisor": "Tanya Augustine",
        "location": "1609",
        "tags": [
            "communityService",
            "activism"
        ],
        "time": "Every other Tuesday, 8:00 AM",
        "img": "hab4human.png"
        "desc": "CRLS is an official campus chapter of the nonprofit organization Habitat for Humanity International. Through various fundraisers, the club raises money to build simple, low-cost homes for families in need of decent and affordable housing. Club members also have opportunities to participate in volunteer house-building days in the Boston area."
    },
    {
        "club": "Student Government",
        "advisor": "Molly Roach, Kiki Nakamura-Koyama",
        "location": "1606",
        "tags": [
            "communityService",
            "activism"
        ],
        "time": "Thursdays 7:45 AM",
        "img": "studGov.png",
        "description": "You do not need to be elected to attend meetings!"
    },
    {
        "club": "Chamber Music Collaboration",
        "advisor": "Laura Umbro",
        "location": "Arts Basement",
        "tags": [
            "musicArts"
        ],
        "time": "1-2 Thursdays per month, 7:00 PM",
        "img": "chMusic.png"
        "desc" : "Chamber music consists of small groups of student musicians that meet before or after school, depending on that group's schedule. Ensembles are student-led with the possibility of receiving coaching from a Longy School of Music or Radius Ensemble expert. All chamber groups meet periodically throughout the year to play for each other in master classes and have the opportunity to perform in the Chamber Concert in June."
    },
    {
        "club": "CRLS Off Broadway Theatre Society",
        "advisor": "Monica Murray, Brett Cramp",
        "location": "Black Box Theatre",
        "tags": [
            "musicArts"
        ],
        "time": "Tuesdays 3:30 PM",
        "img": ""
        "desc" : "The Off Broadway Theater Society is a place for all those interested in all aspects of theater whether you like to be onstage, backstage, behind the curtain, in the audience or a mix of all of those. In this club we are striving to create a more inclusive theater community at CRLS where students can come together to learn, create and better their understanding of the arts."
    },
    {
        "club": "Henna Club",
        "advisor": "Ibrahim Dagher",
        "location": "1609",
        "tags": [
            "musicArts"
        ],
        "time": "Every other Friday, 3:15 PM",
        "img": "henna.png"
        "desc": "The Henna Club at CRLS welcomes all students to the art of henna and the joy and relaxation derived from learning and applying it. Learn the techniques involved and engage in applying the creative designs. Enjoy a relaxed atmosphere and soothing music and get introduced to, or re-acclimated with the cultures of many countries and communities where henna is an established tradition celebrated for what it is and for all that it represents for life’s various ceremonies and events."

    },
    {
        "club": "K-Pop Club",
        "advisor": "Dionne Campbell",
        "location": "4121",
        "tags": [
            "musicArts"
        ],
        "time": "Wednesdays 3:15 PM",
        "img": "Kpop.png"
        "desc": "The K-Pop club performs at the CRLS annual talent show, watches and discusses newly released K-Pop music videos, reads current events relating to the K-Pop community, introduces newly debuted groups and watches online K-Pop events."
    },
    {
        "club": "Media Arts Club",
        "advisor": "Joshua Arevalo",
        "location": "Media Arts Studio",
        "tags": [
            "musicArts"
        ],
        "time": "Wednesdays 3:00 PM",
        "img": "bookClub.png"
        "desc": "The Media Arts club makes projects for local cable channel 98 and youthviewcambridge.org. If you are interested in podcast and music production, video production or media journalism come check us out!"
    },
    {
        "club": "Improv Club",
        "advisor": "Monica Murray",
        "location": "Black Box Theatre",
        "tags": [
            "musicArts"
        ],
        "time": "Mondays 5:00 PM",
        "img": "bookClub.png"
        "desc": "Improv is a form of theater that focuses on spontaneity and saying the first thing that comes to mind. Improv club is a really good place to be your authentic self and get out of your comfort zone whether you have done theater or not. The club also puts on a couple of shows each year for the CRLS community."
    },
    {
        "club": "Photo Club",
        "advisor": "Deborah Milligan",
        "location": "3622",
        "tags": [
            "musicArts"
        ],
        "time": "Every other Friday, 3:00 PM",
        "img": "bookClub.png"
        "desc": "The Photo Club is a group of students who are especially interested in photography. It is a mix of experienced and new photographers. Students can learn to use the digital equipment as well as the darkroom. It provides the opportunity for students to have access and learn the art of photography."
    },
    {
        "club": "Drumline Club",
        "advisor": "Guillermo Nojechowicz",
        "location": "0606",
        "tags": [
            "musicArts"
        ],
        "time": "Fridays 3:00 PM",
        "img": "bookClub.png"
        "desc": "In this course, students will learn how to play in a Percussion Ensemble. The instrumentation includes traditional and non-traditional percussion instruments such as snare drum, bass drum, multi-toms, cymbals, timpani, world percussion instruments, mallets (xylophone, vibraphone, marimba), piano, guitar, and bass. The Drumline performs at the Memorial Day Parade and Thanksgiving football game with Band. The Percussion Ensemble plays featured pieces at the Winter and Spring concerts and performs as band members. Students are encouraged to take this course for continuous semesters and over multiple years to continue development of their composition, technical, and performance skills."
    },
    {
        "club": "Jewish Heritage Club",
        "advisor": "Tal SebellShavit",
        "location": "2412",
        "tags": [
            "religion"
        ],
        "time": "Thursdays 8:00 AM",
        "img": "bookClub.png"
        "desc": "Jewish Heritage Club is a space for people to check in with each other, discuss relevant issues and communicate with the greater CRLS community. We used to meet over bagels and now over zoom."
    },
    {
        "club": "Arabic Club",
        "advisor": "Ibrahim Dagher",
        "location": "1613",
        "tags": [
            "religion"
        ],
        "time": "Every other Friday, 3:00 PM",
        "img": "bookClub.png"
        "desc": "The Arabic Club at CRLS welcomes all students to celebrate Arab culture and the Arabic language. It provides its members and the school community the opportunity to enjoy the richness of the Arab World and all it has to offer. Members engage in music, dancing and Dabke (line dance), food and cooking, calligraphy and other arts, movies and documentaries, country presentations, chatting in Arabic (not a requirement!), discussing current affairs, games (backgammon, chess, etc.), volunteering and fundraising, and special events."
    },
    {
        "club": "Asian Club",
        "advisor": "Jing Xiaoshu",
        "location": "2608",
        "tags": [
            "religion"
        ],
        "time": "Every other Friday, 2:45 PM",
        "img": "bookClub.png"
        "desc": "All students from CRLS are welcomed to join the Asian Club. The Asian Club promotes and shares Asian history and cultures among its members through all kinds of club activities such as movies, celebration of festivals, and learning of calligraphy. Another goal of the Asian Club is to enable its members to learn from and help one another while studying at CRLS. The Asian Club holds fundraising activities which are used to sponsor group activities such as dim sum in Chinatown, field trips and social affairs designed by the members to gain a more sophisticated appreciation of Asian cultures."
    },
    {
        "club": "Habesha Club",
        "advisor": "Ayesha Wilson, Lena Solomon",
        "location": "3610",
        "tags": [
            "religion"
        ],
        "time": "Every other Wednesday, 1:30 PM",
        "img": "bookClub.png"
        "desc": "Habasha is mostly about facilitating cross cultural activities in the school. We share Ethiopian culture with others through music, dance, food, dress, and performances. We reflect diversity in and out of the school. We also fundraise to support disadvantaged kids in Ethiopia and help them to attend school and provide for their needs. You do NOT have to be Ethiopian to join. All you need is a sincere interest in cross-cultural exchange."
    },
    {
        "club": "Haitian Club",
        "advisor": "Carmelle Philippe",
        "location": "2112",
        "tags": [
            "religion"
        ],
        "time": "Thursdays 2:30 PM",
        "img": "bookClub.png"
        "desc": "Haitain Club is one of the longest running clubs in CRLS. The club discusses Hatian culture and history, explores Hatian culture by listening to music and/or learning Hatian creole, hosts guest speakers and professional dancers that teach a variety of Hatian dances, hosts game and cooking nights, makes arts and crafts, and fundraises for schools in Haiti through performing for events and selling food. Anyone at CRLS can join!"
    },
    {
        "club": "Latinx Club",
        "advisor": "Chris Montero",
        "location": "5101",
        "tags": [
            "religion"
        ],
        "time": "Wednesdays 3:00 PM",
        "img": "bookClub.png"
        "desc": "As members of the Latinx club, we desire to create a space where Latinx people and culture are celebrated and welcome. Como miembros del grupo Latinx deseamos crear un espacio donde la gente Latinx y su cultura sean celebradas y bienvenidas."
    },
    {
        "club": "Muslim Culture Club",
        "advisor": "Ramazan Nigdelioglu",
        "location": "2411",
        "tags": [
            "religion"
        ],
        "time": "Every other Monday, 3:00 PM",
        "img": "bookClub.png"
        "desc": "The Muslim Culture club plays games, discusses Islamic knowledge, takes action and fundraises for Muslim crises across the world, and volunteers with ISBCC and INCA. The club also has an annual Taste of Ramadan event, where students teach others about Ramadan, serve free food from different cultures, get Henna done and more."
    },
    {
        "club": "Junior State of America (JSA)",
        "advisor": "Joshua Landwehr",
        "location": "2135",
        "tags": [
            "politics"
        ],
        "time": "Fridays 3:00 PM",
        "img": "bookClub.png"
        "desc": "Junior State of America (JSA) is a student-run, non-partisan, non-profit political awareness club. Students run the chapter meetings, decide on debate topics, organize every aspect of the chapter. JSA gives students an opportunity to voice their opinions on local, state, national, and world issues. JSA gives students valuable “citizenship training” by letting students run their own government. JSA chapters conduct a wide range of political awareness activities: informal discussions, structured debates, educational simulation, challenging mock trials, informative political guest speakers, and voter registration drives are only a few of the activities chapters hold. JSA holds Saturday conferences and overnight conventions that allow students from many different high schools a chance to debate and discuss important issues."
    },
    {
        "club": "Model United Nations Club",
        "advisor": "Nicholas Yeh",
        "location": "5401",
        "tags": [
            "politics"
        ],
        "time": "Every other Friday, 8:00 AM",
        "img": "bookClub.png"
        "desc": "The CRLS Model UN club attends up to two conferences each year with participants from around the world. Students are even able to go to New York city for a weekend stay in a hotel downtown."
    },
    {
        "club": "Political Awareness Club",
        "advisor": "Ross Benson",
        "location": "",
        "tags": [
            "politics"
        ],
        "time": "Wednesdays 2:30 PM",
        "img": "bookClub.png"
        "desc": "Political Awareness club learns about current events, debates topical issues, gets engaged in political outreach and learns politics in a fun and engaging way. We try to keep it light and fun while still talking about important issues."
    },
    {
        "club": "Bicycle Advocacy Club",
        "advisor": "Laura Borrelli",
        "location": "3409",
        "tags": [
            "activism"
        ],
        "time": "Wednesdays 10:45 AM",
        "img": "bookClub.png"
        "desc": "The CRLS Bike Advocates are CRLS Students and Faculty committed to promoting: Biking, Bike Safety, Sustainability, Bike Mechanics, Road Knowledge, Bike Infrastructure, A Biking Community, and Enjoyment Through Biking. The club promotes biking within the CRLS community by hosting school events as well as speaking out in favor of safe bike infrastructure at public meetings. The Bike Advocates are an open group."
    },
    {
        "club": "Black Student Union",
        "advisor": "",
        "location": "1604",
        "tags": [
            "activism"
        ],
        "time": "Wednesdays 10:00 AM",
        "img": "bookClub.png"
        "desc": "The Black Students Union strives to bring awareness to Black issues through education, participation, and activism. Through community service, civic engagement, charitable events, dialogue, and social gatherings, students of any background are welcomed to take part in fostering a more empowering CRLS for Black students."
    },
    {
        "club": "Intersectional Feminism Club",
        "advisor": "Caroline Berz",
        "location": "2212",
        "tags": [
            "activism"
        ],
        "time": "Thursdays 3:00 PM",
        "img": "bookClub.png"
        "desc": "Intersectional Feminism club learns and talks about gender inequality and inclusivity in the feminist movement. It is a space to exchange points of view and make change with those who want to do the same."
    },
    {
        "club": "Environmental Action Club",
        "advisor": "Nicholas Parsons",
        "location": "2312",
        "tags": [
            "activism",
            "stem"
        ],
        "time": "Thursdays 8:00 AM",
        "img": "bookClub.png"
        "desc": "The Environmental Action Club works to raise interest in and awareness of issues around the environment. In the past we have helped to get composting started at CRLS, held a denim drive to collect jeans for insulation for houses and started a green roof at CRLS. We look forward to more projects and to participate in Envirothon competitions."
    },
    {
        "club": "#HerVote",
        "advisor": "Marlin Kann",
        "location": "4405",
        "tags": [
            "activism"
        ],
        "time": "Tuesdays and Thursdays, 3:00 PM",
        "img": "bookClub.png"
        "desc": "#HerVote is a civic engagement initiative and partnership with the Radcliffe Institute at Harvard University. The club was founded with the mission to increase participation by women in elections and amplify the voices of those usually not recorded in history."
    },
    {
        "club": "Intersectional Socialist Student Union (ISSU)",
        "advisor": "Christopher Montero",
        "location": "",
        "tags": [
            "activism"
        ],
        "time": "Wednesdays 3:00 PM",
        "img": ""
        "desc": "The ISSU is an affinity group of radical left CRLS students looking to better organize the struggle for socialism and social justice that has up until now been quite piecemeal."
    },
    {
        "club": "Marine Conservation Club",
        "advisor": "Paul McGuinness",
        "location": "",
        "tags": [
            "activism",
            "stem"
        ],
        "time": "First and third Wednesdays of each month, 2:00 PM",
        "img": ""
        "desc": "The Marine Conservation club educates and spreads awareness about current issues revolving around the ocean."
    },
    {
        "club": "Project 10 East",
        "advisor": "Drake King",
        "location": "2622",
        "tags": [
            "activism"
        ],
        "time": "Tuesdays 3:15 PM",
        "img": "bookClub.png"
        "desc": "Project 10 is the Gay-Straight Alliance (GSA) at CRLS. P10 is a safe haven and support network for gay, lesbian, bisexual, transgender, questioning and straight supporters. P10 is a place to talk, have fun and provide a sense of belonging; a way to raise awareness of LGBTQ+ issues in the community; and a place to come and be YOU. All students at CRLS are welcome to join regardless of sexual orientation or gender identity. Some yearly activities include: National Coming Out Day Assembly, Informal roundtable discussions about issues facing the GLBT community, Day of Silence, Field Trips, Attend the True Colors Conference, Presentation of the Rose Lipkin Award and Scholarship, Massachusetts Youth Pride, Cambridge Pride Brunch and Coffeehouse."
    },
    {
        "club": "Sisters on the Runway",
        "advisor": "Jillian Hutt",
        "location": "2313",
        "tags": [
            "activism"
        ],
        "time": "Fridays 8:15 AM",
        "img": "bookClub.png"
        "desc": "An organization that is fighting against domestic violence and abuse. We partner closely with and raise money for the Transition House (a local domestic abuse shelter). We do chalk campaigns and bake sales. In the Spring, we have our big fashion show event."
    },
    {
        "club": "International & Sustainable Development Club (ISDC)",
        "advisor": "Kris Newton",
        "location": "2405",
        "tags": [
            "activism",
            "stem"
        ],
        "time": "Mondays 3:00 PM",
        "img": "bookClub.png"
        "desc": "Modern sustainable development is the implementation of the UN’s seven goals for making this world better without damaging society or the environment. The ISDC at CRLS partners with and raises money for the Maasai Stoves and Solar Project in Tanzania. The club also spreads knowledge about sustainable development through the school and city."
    },
    {
        "club": "UNICEF",
        "advisor": "Ibrahim Dagher",
        "location": "1613",
        "tags": [
            "activism"
        ],
        "time": "Every other Wednesday, 3:00 PM",
        "img": "bookClub.png"
        "desc": "We are part of UNICEF USA’s network of high school and college clubs. Our club was established in March 2015 after a long period of careful preparations by dozens of CRLS students. Since then, and thanks to passionate and consistent hard work by its committed members, the club has become prominent among other school clubs, raising significant funds and awareness in our school community and beyond. The UNICEF Club is open to all CRLS students and has always enjoyed a large membership from all grade levels and from different socioeconomic, ethnic, and religious backgrounds, ensuring diversity of ideas and equal opportunity to serve and participate. Among many other activities, the club regularly engages in the following: the annual Trick or Treat for UNICEF campaign, Shots for Tots fundraising event, the Head of the Charles fundraiser, workshops for middle school students and presentations at international nights at elementary schools, the UNICEF USA Student Summit in Washington, D.C. and Advocacy Day on Capitol Hill."
    },
    {
        "club": "Business Club",
        "advisor": "Jacqueline Cesario",
        "location": "1108",
        "tags": [
            "miscellaneous"
        ],
        "time": "Wednesdays 10:00 AM",
        "img": "bookClub.png"
        "desc": "In Business Club you develop valuable skills and gain exposure to real world business applications that can help you succeed after CRLS. Maybe you can help develop a business internship during your senior year."
    },
    {
        "club": "Chess Club",
        "advisor": "Rick McKinney",
        "location": "",
        "tags": [
            "miscellaneous"
        ],
        "time": "Thursdays 3:00 PM",
        "img": "bookClub.png"
        "desc": "Join Chess Club for amazing games, great times and awesome friends. No prior knowledge is needed! You don’t even need to know the names of the pieces to come!"
    },
    {
        "club": "Investment Club",
        "advisor": "Denise Lee",
        "location": "",
        "tags": [
            "miscellaneous"
        ],
        "time": "Tuesdays 3:30 PM",
        "img": ""
        "desc": "Investment Club is a place for students to come and discuss the economy, financial markets, investment strategies and learn how to trade stocks and  other financial assets. It is a collaborative environment, but there will also be some opportunities for competition.You do not need to have any experience with investing and there are no costs associated."
    },
    {
        "club": "Latin Club",
        "advisor": "Maria Giacchino",
        "location": "2321",
        "tags": [
            "miscellaneous"
        ],
        "time": "Fridays 3:00 PM",
        "img": "bookClub.png"
        "desc": "The Latin Club is open to all former, current and future Latin students, as well as students who are interested in ancient Roman history, culture,  mythology or the Latin language. The Latin Club has two types of meetings: in-school meetings (scheduled on Thursdays) and trip meetings (scheduled on Fridays). The in-school meetings will be a mixture of trivia games, cultural knowledge sharing, scavenger hunts and anything else ancient Roman-related that the club members decide they want to do. The trip meetings will consist of either an excursion to the North End to sample “modern Roman desserts” (i.e. cannoli and gelato – please come and put your two cents’ worth into the long-standing debate about which bakery in the North End makes the best cannoli!). The MFA trips will focus on exploring a different collection of the MFA for each meeting. We will start by visiting their amazing Greek and Roman collections, and then expand across cultures that were contemporary to the Greek and Roman times and then slowly move forward in time."
    },
    {
        "club": "Spanish Club",
        "advisor": "Eydie Ortiz",
        "location": "2620",
        "tags": [
            "miscellaneous"
        ],
        "time": "Thursdays 3:00 PM",
        "img": "bookClub.png"
        "desc": "In Spanish club students make food and drinks, listen to Spanish music and learn dances, organize events for Hispanic Heritage month, take field trips to places like the Tazo Chocolate Factory, and eat at restaurants serving Latin American and Spanish food."
    }
];

//export default clubsArray;
