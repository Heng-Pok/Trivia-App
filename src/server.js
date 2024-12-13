const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 3000;
const bcrypt = require("bcrypt");
const fs = require('fs');

app.use(express.json());

// Allow requests from our React app
app.use(cors({ origin: "http://localhost:5173" })); // Update with the correct URL of our React app

app.get('/questions', (req, res) => {
  fs.readFile('triviaData2.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching questions');
    } else {
      res.json(JSON.parse(data));
    }
  });
});

mongoose.connect('mongodb://localhost:27017/myDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
.then (() => console.log('Connected to MongoDB'))
.catch (err => console.error('Connection failed', err));

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  country: String,
  bio: String,
});

const User = mongoose.model('User', userSchema);
const Leaderboard = mongoose.model('Leaderboard', new mongoose.Schema({}, {strict: false}), 'leaderboards');
const CountryLeaderboard = mongoose.model('CountryLeaderboard', new mongoose.Schema({}, {strict: false}), 'countryleaderboards');

async function printLeaderboards(){
    try{
        const countryleaderboards = await CountryLeaderboard.find();
        console.log('Leaderboard Collection:');
        console.log(countryleaderboards);
    } catch (err){
        console.error('Error loading leaderboards', err)
    }
}

app.get('/country-leaderboard', async (req, res) => {
  try {
      
      const countryLeaderboard = await CountryLeaderboard.find()
          .sort({ totalScore: -1 })
          .select('country totalScore'); 

      res.status(200).json(countryLeaderboard);
  } catch (error) {
      console.error('Error fetching country leaderboard:', error);
      res.status(500).json({ error: 'Failed to fetch country leaderboard data' });
  }
});

//printLeaderboards();

// Test if database is accessible by retrieving all users
app.get('/test-db', async (req, res) => {
  try {
    const users = await User.find(); // Fetch all documents in the 'users' collection
    res.status(200).json(users);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ message: 'Error fetching data' });
  }
});

// Just for manually adding a new user. For testing mostly.
app.get('/add-user', async (req, res) => {
  try {
    const newUser = new User({ name: "John Doe", email: "john.doe@example.com", age: 30 });
    await newUser.save();
    res.status(201).json({ message: 'User added successfully', user: newUser });
  } catch (err) {
    console.error('Error adding user:', err);
    res.status(500).json({ message: 'Error adding user' });
  }
});

// For communicating with the REACT client side when a new user is to be added
// to the databse.
app.post('/signup', async (req, res) => { 
    let { username, email, password, country, bio } = req.body;
    
        try {
                email = email.toLowerCase();
                // See if the user already exists (check the username and the email address). If so, send an error message.
                const existingUser = await User.findOne({ $or: [{ username }, { email }] });

                if (existingUser) {
                        // User already exists, send error message
                        const errorMessage = "Username or email already in use";
                        return res.status(400).json({ error: errorMessage });
                }
                // Hash the password
                const hashedPassword = await bcrypt.hash( password, 10 ); // 10 is the salt rounds
                // init the new user as a new entry to the table
                const newUser = new User({ username, email, password: hashedPassword, country, bio });
                // save the user there
                await newUser.save();
                const newScore = new Leaderboard({userId: newUser._id, score: 0})
                await newScore.save();
                if (await CountryLeaderboard.findOne({country})){
                  console.log("country exists:", country);
                  return res.status(201).json( { message: "User registered successfully", user: newUser });
                }
                console.log("adding a new country:", country);
                const newCountry = new CountryLeaderboard({country: country, totalScore: 0});
                await newCountry.save();
                res.status(201).json( { message: "User registered successfully", user: newUser });
        } catch ( error ) {
                console.error ( error );
                res.status (400).json( { error: "User registration failed" } )
        }
});

//For logging in
app.post('/login', async (req, res) => {
    let { email, password } = req.body;
    try {
            email = email.toLowerCase();
            const user = await User.findOne({ email })
            if ( !user ) {
                    return res.status( 401 ).json({ error: "User not found"});
            }

            // compare the entered password with the hashed password
            const isPasswordValid = await bcrypt.compare(password, user.password)
            if ( !isPasswordValid ) {
                    return res.status ( 401 ).json( { error: "Invalid password" } )
            }

            res.status( 200 ).json( { message: "Login successful", user });
    } catch (error){
            console.error('Error during login', error);
            res.status ( 500 ).json ( { error: "Login failed" } );
    }
});

app.get("/username", async (req, res) => {
    const email = req.query.email;
    if (!email){
            return res.status(400).json({error: "Email parameter query is required"})
    }
    try{
            const user = await User.findOne( {email: email} );
            if (user){
                    res.status(200).send(user.username);
            } else {
                    res.status(404).json( {error: "User not found"} );
            }
    } catch (error){
            console.error('Error fetching username:', error);
            res.status(500).json({error: "Internal server error"});
    }
})

app.post('/uploadScore', async (req, res) => { 
    const { username, score } = req.body;
        try {
                // See if the user already exists (check the username and the email address). If so, send an error message.
                const existingUser = await User.findOne({ username });
                await updateScore(username, score);
                res.status(201).json( { message: "User's score updated successfully", username: username, score: score});
        } catch ( error ) {
                console.error ( error );
                res.status (400).json( { error: "User's score update failed" } );
        }
});

async function updateScore(username, newScore){
    try {
        const user = await User.findOne( {username} );

        if (!user){ 
            console.log('User not found!');
            return;
        }
        // console.log("user object id:", user._id);
        //const leaderboardEntry = await Leaderboard.findOne({userId: user._id});
        //const CountryLeaderboardEntry = await CountryLeaderboard.findOne({country: user.country});
        // console.log("leaderboard user id:", leaderboardEntry.userId);
        // if (!leaderboardEntry){
        //     console.log("Leaderboard entry not found for this user");
        //     return;
        // }
        
        await Leaderboard.updateOne(
            {userId: user._id},
            {$inc: {score: newScore}}
        );

        //await leaderboardEntry.save();

        await CountryLeaderboard.updateOne(
          {country: user.country}, 
          {$inc: {totalScore: newScore}}
        )
    } catch (err) {
        console.error("Error updating score:", err);
    }
}

app.get('/leaderboard', async (req, res) => {
        try {
          const leaderboardData = await Leaderboard.find()
            .sort({ score: -1 })
            .limit(10)
          res.status(200).json(leaderboardData);
          console.log(leaderboardData);
        } catch (error) {
          console.error('Error fetching leaderboard data:', error);
          res.status(500).json({ error: 'Failed to fetch leaderboard data' });
        }
});
      

app.get('/', (req, res) => {
    res.send('Hello from the server!');
})

// Listen LISTEN LISTEN!!
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})