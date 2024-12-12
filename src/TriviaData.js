const triviaData = {
    animal: {
        subcategories: {
            "General Animals": [
                {question: "Which animal is known to have the most powerful bite?", options: ["Mouse", "Crocodile", "Hippopotamus", "Lion"], correct: "Hippopotamus", points: 100},
                {question: "Which of these animals is the fastest land animal?", options: ["Tiger", "Cheetah", "Horse", "Ostrich"], correct: "Cheetah", points: 200},
                {question: "Which of these animals is found only in the Arctic?", options: ["Polar bear", "Penguin", "Leopard seal", "Walrus"], correct: "Polar bear", points: 300},
                {question: "Which animal can regenerate its limbs?", options: ["Crab", "Gecko", "Octopus", "Starfish"], correct: "Starfish", points: 400},
            ],
            "Mammals": [
                {question: "What is the largest mammal on Earth?", options: ["Elephant", "Blue Whale", "Giraffe", "Lion"], correct: "Blue Whale", points: 100},
                {question: "Which mammal has the longest gestation period?", options: ["Horse", "Elephant", "Blue Whale", "Rhinoceros"], correct: "Elephant", points: 200},
                {question: "Which mammal can fly?", options: ["Flying Squirrel", "Sugar Glider", "Bat", "None"], correct: "Bat", points: 300},
                {question: "Which mammal has the most teeth?", options: ["Giant Armadillo", "Orangutans", "Otter", "Orca"], correct: "Giant Armadillo", points: 400},
            ],
            "Fish": [
                {question: "What fish has the ability to produce electric shocks?", options: ["Electric Eel", "Star fish", "Stingray", "Catfish"], correct: "Electric Eel", points: 100},
                {question: "What type of fish is known for being able to inflate its body when threatened?", options: ["Puffer fish", "Barracuda", "Clownfish", "Angelfish"], correct: "Puffer fish", points: 200},
                {question: "What fish can survive on land for short periods by breathing through its skin?", options: ["Eel", "Lungfish", "Mud skipper", "Carp"], correct: "Mud skipper", points: 300},
                {question: "Which fish is famous for its ability to change sex?", options: ["Clownfish", "Angler fish", "Shark", "Piranha"], correct: "Clownfish", points: 400},
            ],
            "Reptiles": [
                {question: "Which reptile can change the color of its skin to blend into its surroundings?", options: ["Iguana", "Chameleon", "Gecko", "Crocodile"], correct: "Chameleon", points: 100},
                {question: "What reptile is the heaviest snake in the world?", options: ["King Cobra", "Anaconda", "Python", "Boa Constrictor"], correct: "Anaconda", points: 200},
                {question: "How do snakes smell their surroundings?", options: ["Through their nostrils", "By flicking their tongue", "Through their skin", "By sensing vibrations"], correct: "By flicking their tongue", points: 300},
                {question: "What is the term for reptiles that live in trees?", options: ["Arboreal", "Terrestrial", "Aquatic", "Fossorial"], correct: "Arboreal", points: 400},
            ]
        },
    },
    plant: {
        subcategories: {
            "Flowers": [
                {question: "What flower is traditionally associated with love and romance?", options: ["Daisy", "Tulip", "Rose", "Lily"], correct: "Rose", points: 100},
                {question: "What flower is known for its ability to track the movement of the sun?", options: ["Poppy", "Daisy", "Lily", "Sunflower"], correct: "Sunflower", points: 200},
                {question: "What is the official flower of Japan, often associated with the spring season?", options: ["Chrysanthemum", "Sakura (Cherry Blossom)", "Azalea", "Magnolia"], correct: "Sakura (Cherry Blossom)", points: 300},
                {question: "Which flower is known for blooming once every 12 years in India?", options: ["Neelakurinji", "Lotus", "Jasmine", "Dahlia"], correct: "Neelakurinji", points: 400},
            ],
            "Trees": [
                {question: "What type of tree produces acorns?", options: ["Maple", "Oak", "Pine", "Birch"], correct: "Oak", points: 100},
                {question: "What tree is known as the tallest tree species in the world?", options: ["Sequoia", "Douglas Fir", "Giant Cedar", "Coast Redwood"], correct: "Coast Redwood", points: 200},
                {question: "What is the term for trees that lose their leaves in the fall?", options: ["Perennial", "Coniferous", "Deciduous", "Evergreen"], correct: "Deciduous", points: 300},
                {question: "What tree grows the fastest and is often used for paper production?", options: ["Bamboo", "Pine", "Poplar", "Maple"], correct: "Bamboo", points: 400},
            ],
            "Edible": [
                {question: "Which fruit is the primary ingredient in guacamole?", options: ["Mango", "Lime", "Tomato", "Avocado"], correct: "Avocado", points: 100},
                {question: "What legume is used to make hummus?", options: ["Lentil", "Black Bean", "Chickpea", "Kidney Bean"], correct: "Chickpea", points: 200},
                {question: "Which herb is often paired with tomatoes in Italian cuisine?", options: ["Dill", "Chives", "Oregano", "Sage"], correct: "Oregano", points: 300},
                {question: "What ancient grain is sometimes called 'the mother of all grains'?", options: ["Amaranth", "Millet", "Quinoa", "Spelt"], correct: "Quinoa", points: 400},
            ],
            "Plant Anatomy": [
                {question: "What vascular tissue in plants transports water from the roots to the leaves?", options: ["Phloem", "Xylem", "Cambium", "Cortex"], correct: "Xylem", points: 100},
                {question: "Which part of a plant contains the reproductive organs?", options: ["Flower", "Stem", "Roots", "Leaves"], correct: "Flower", points: 200},
                {question: "What is the waxy layer that covers a leaf and helps prevent water loss?", options: ["Cuticle", "Epidermis", "Cortex", "Mesophyll"], correct: "Cuticle", points: 300},
                {question: "In which layer of the leaf does most photosynthesis occur?", options: ["Spongy Mesophyll", "Epidermis", "Vein", "Palisade Mesophyll"], correct: "Palisade Mesophyll", points: 400},
            ]
        }
    },
    culture: {
        subcategories: {
            "Language": [
                {question: "Which language is the most spoken in the world?", options: ["Spanish", "English", "Mandarin Chinese", "French"], correct: "Mandarin Chinese", points: 100},
                {question: "What is the official language of Brazil?", options: ["Spanish", "Portuguese", "Mandarin Chinese", "French"], correct: "Portuguese", points: 200},
                {question: "Which language has the most words in its vocabulary?", options: ["German", "English", "Japanese", "Latin"], correct: "English", points: 300},
                {question: "What is the term for a word that is spelled the same forwards and backwards?", options: ["Oxymoron", "Homophone", "Anagram", "Palindrome"], correct: "Palindrome", points: 400},
            ],
            "Art": [
                {question: "Who painted the famous artwork 'The Starry Night'?", options: ["Pablo Picasso", "Claude Monet", "Vincent van Gogh", "Leonardo da Vinci"], correct: "Vincent van Gogh", points: 100},
                {question: "Which famous sculptor created the statue of David?", options: ["Donatello", "Michelangelo", "Francis Bacon", "Raphael"], correct: "Michelangelo", points: 200},
                {question: "Who painted the 'School of Athens,' featuring ancient Greek philosophers?", options: ["Raphael", "Rembrandt", "Caravaggio", "Eugène Delacroix"], correct: "Raphael", points: 300},
                {question: "What type of art is characterized by the use of geometric shapes and abstract forms?", options: ["Cubism", "Surrealism", "Impressionism", "Realism"], correct: "Cubism", points: 400},
            ],
            "Literature": [
                {question: "Which play by William Shakespeare is about the tragic love story of two young lovers from feuding families?", options: ["Hamlet", "Macbeth", "Othello", "Romeo and Juliet"], correct: "Romeo and Juliet", points: 100},
                {question: "Who is the author of the fantasy series 'The Lord of the Rings'?", options: ["J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin", "J.K. Rowling"], correct: "J.R.R. Tolkien", points: 200},
                {question: "What is the term for a novel or story that is set in an idealized version of the past or future?", options: ["Dystopia", "Utopia", "Allegory", "Parable"], correct: "Moby-Dick", points: 300},
                {question: "What is the term for a recurring subject, theme, or symbol in a work of literature?", options: ["Allegory", "Theme", "Motif", "Imagery"], correct: "Motif", points: 400},
            ],
            "Pop Culture": [
                {question: "Who is known as the 'King of Pop'?", options: ["Michael Jackson", "Prince", "Elvis Presley", "Justin Timberlake"], correct: "Michael Jackson", points: 100},
                {question: "Which 1980s film featured a young boy named Marty McFly who traveled through time in a DeLorean?", options: ["Ghostbusters", "Back to the Future", "The Goonies", "E.T. the Extra-Terrestrial"], correct: "Back to the Future", points: 200},
                {question: "Who is the former Friends star who became a successful producer and entrepreneur with her company 'The Honest Company'?", options: ["Courteney Cox", "Jennifer Aniston", "Lisa Kudrow", "Jessica Alba"], correct: "Jessica Alba", points: 300},
                {question: "In the Harry Potter series, what is the name of Harry's owl?", options: ["Errol", "Pigwidgeon", "Hermes", "Hedwig"], correct: "Hedwig", points: 400},
            ]
        }
    },
    history: {
        subcategories: {
            "Historical Discoveries": [
                {question: "Who is credited with discovering the laws of gravity after observing an apple fall from a tree?", options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"], correct: "Isaac Newton", points: 100},
                {question: "In 1492, which explorer sailed across the Atlantic and 'discovered' the Americas?", options: ["Marco Polo", "Christopher Columbus ", "Ferdinand Magellan", "Hernán Cortés"], correct: "Christopher Columbus ", points: 200},
                {question: "Which scientist discovered the law of planetary motion and is known for his work on elliptical orbits?", options: ["Isaac Newton", "Galileo Galilei", "Johannes Kepler", "Albert Einstein"], correct: "Johannes Kepler", points: 300},
                {question: "In 1953, James Watson and Francis Crick discovered the structure of which molecule?", options: ["Enzymes", "Proteins", "RNA", "DNA"], correct: "DNA", points: 400},
            ],
            "Historical Figures": [
                {question: "Who was the first President of the United States?", options: ["Thomas Jefferson", "Benjamin Franklin", "George Washington", "Abraham Lincoln"], correct: "George Washington", points: 100},
                {question: "Which British prime minister served during World War II and is known for his leadership and speeches during the war?", options: ["Winston Churchill", "Margaret Thatcher", "Tony Blair", "David Cameron"], correct: "Winston Churchill", points: 200},
                {question: "Who was the first explorer to successfully sail around the world, completing his voyage in 1522?", options: ["Francis Drake", "John Cabot", "Vasco da Gama", "Ferdinand Magellan"], correct: "Ferdinand Magellan", points: 300},
                {question: "Who was the first person to travel to the North Pole, completing the journey in 1909?", options: ["Ernest Shackleton", "Robert Peary", "Roald Amundsen", "Sir Edmund Hillary"], correct: "Robert Peary", points: 400},
            ],
            "Historical Eras": [
                {question: "What ancient civilization, known for its pyramids, hieroglyphs, and mummification practices, thrived along the Nile River from around 3000 BCE to 30 BCE?", options: ["Ancient Greece", "Ancient Egypt", "The Indus Valley", "The Sumerians"], correct: "Ancient Egypt", points: 100},
                {question: "What era, beginning in the late 18th century, saw major industrialization, technological advancements, and the transition from agrarian societies to industrial ones?", options: ["The Industrial Revolution", "The Age of Enlightenment", "The Age of Exploration", "The Age of Reason"], correct: "The Industrial Revolution", points: 200},
                {question: "The 1960s and 1970s were marked by global social, political, and cultural upheaval, including civil rights movements, protests, and major advances in technology. This era is often called what?", options: ["The Great Depression Era", "The Space Race Era", "The Gilded Age", "The Counterculture Era"], correct: "The Counterculture Era", points: 300},
                {question: "The period from the mid-15th century to the early 17th century, characterized by the widespread exploration, expansion, and colonization of the Americas by European powers, is known as what?", options: ["The Age of Discovery", "The Age of Enlightenment", "The Age of Empires", "The Medieval Era"], correct: "The Age of Discovery", points: 400},
            ],
            "World History": [
                {question: "Which period of time from 1914 to 1918 saw major global conflict, involving many of the world's great powers, and resulted in massive casualties and the redrawing of borders?", options: ["World War II", "World War I", "The Cold War", "The Napoleonic Wars"], correct: "World War I", points: 100},
                {question: "What was the primary goal of the Crusades, a series of religious wars fought between the 11th and 15th centuries?", options: ["To spread Christianity", "To conquer the Americas", "To establish the British Empire", "To control the Holy Land"], correct: "To control the Holy Land", points: 200},
                {question: "The Roman Empire expanded across Europe, Asia, and North Africa. Who was its first emperor?", options: ["Julius Caesar", "Constantine", "Augustus Caesar", "Nero"], correct: "Augustus Caesar", points: 300},
                {question: "The Berlin Wall, which separated East and West Germany, fell in which year?", options: ["1985", "1989", "1991", "2001"], correct: "1989", points: 400},
            ]
        }
    }
};

export default triviaData;
