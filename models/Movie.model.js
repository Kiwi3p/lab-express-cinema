const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [String],
    image: {
        type: String,
        default: '/images/someUserImage.jpg'
      },
    description: String,
    showtimes: [String],
  },
  {
    timestamps: true
  }  
)

module.exports = model('Movie', movieSchema);