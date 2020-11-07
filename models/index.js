const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/habitude';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => console.log(`MongoDB connected successfully. MONGO DB = `, process.env.MONGODB_URI))
    .catch((err) => console.log(`MongoDB connection error: ${err}`));

module.exports = {
    Habit: require('./Habit'),
    User: require('./User'),
};
