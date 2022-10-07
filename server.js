const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/the-social-network',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.use(require('./routes'));

app.listen(PORT, () => console.log(`Server running on PORT:${PORT}`));


// Credits: Parts of this codebase may reference the lesson materials of the University of Toronto coding Bootcamp
// Tutoring and assisting team from the University of Toronto have provided guidance when blockers appeared.