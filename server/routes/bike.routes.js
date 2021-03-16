const {Router} = require('express')
const Bike = require('../models/Bike')
const router = Router()

router.post('/create', async(req, res) => {
    const bike = new Bike({
        name: req.body.bike-name
    })

    await bike.save()
    
})

router.get('/', async(req, res) => {
    const bikes = await Bike.find()
      
    res.render('', {
        bikes
    })
   
})


module.exports = router