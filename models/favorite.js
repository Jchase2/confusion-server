const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    user: {
        type: String,
        ref: 'User'
    },
    dishes: [{
        type: String,
        ref: 'Dish'
    }]
}, {
    timestamps: true,
    usePushEach: true
})

let Favorites = mongoose.model('favorite', favoriteSchema);
module.exports = Favorites;