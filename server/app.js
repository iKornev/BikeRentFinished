const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const Bike = require('./models/Bike');
const app = express();
const cors = require('cors');


app.use(cors());
const bp = require('body-parser');
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))


app.post('/api/bike/create', async(req, res) => {
    const bike = await
    Bike.create({
        name:req.body.name,
        type:req.body.type, 
        price:req.body.rentPrice,
    });
    console.log(req.body);
    res.json({
            bike
    })
})

app.get('/api/bikes', async(req, res) => {
    const bikes = await Bike.find()
    console.log(bikes);
    res.json({ 'bikes': bikes })
})

app.post('/api/bike/delete', (req, res) => {
    Bike.remove({ _id: req.body.id }, function(err) {
        if(!err) {
            console.log('deleted');
        }
        else {
            console.log(err);
        }
    });
    res.json({});
  })

app.post('/api/bike/update', (req, res) => {
    const isRented = req.body.isRented || false;
    const id = req.body.id;
    Bike.updateOne({ _id:id }, { isRented: isRented}, function(
        err,
        result
    ) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.json(result);
        }
    });
})  


const PORT = config.get('port');

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser:true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()