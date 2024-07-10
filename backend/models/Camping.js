const mongoose = require('mongoose');

const campingSchema = new mongoose.Schema({

    name: { type: String,required: true, unique:true},
    location: { type: String, required: true },
    start_date: { type: Date, required: true, format: 'YYYY-MM-DD' },
    end_date: { type: Date, required: true, format: 'YYYY-MM-DD' },
    image: { type: String, required: true },
    group_member: { type: Number, required: true },
    isPrivate: { type: String, enum: ['public', 'private']},
    price: { type: Number, required: true },
    description: { type: String, required: true },
    
});



const Camping = mongoose.model('Camping', campingSchema);
module.exports = Camping;