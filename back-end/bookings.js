const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const router = express.Router();

const bookingSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    created: {
      type: Date,
      default: Date.now
    },
    datetime:{
        type: Date,
    }
  });

  const Booking = mongoose.model('Booking', bookingSchema);

    // get one booking
router.get('/:id', async (req, res) => {
    try {
      let bookings = await Booking.find({
        _id: req.params.id
      });
      return res.send({
        bookings
      });
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

      // get a list of bookings
router.get('/', async (req, res) => {
    try {
      let bookings = await Booking.find({
        user: req.user,
      }).sort({
        created: -1
      }).populate('user');
      return res.send({
        bookings
      });
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  });

  //create bookings
  router.post('/', validUser, async (req, res) => {
    try {
      const booking = new Booking({
        user: req.user,
        datetime: req.body.datetime,
      })
      await booking.save();
      return res.sendStatus(200);
    } 
    catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  })

  //edit or update bookings 
  router.put('/:id', async (req, res) => {
    try {
        let booking = await Booking.findOne({_id: req.params.id});
        if (!booking) {
            res.send(404);
            return;
        }
        booking.datetime = req.body.datatime;
        await booking.save();
        res.send(booking);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
  });

  //delete booking by id
  router.delete('/:id', async (req, res) => {
    try {
      await Booking.deleteOne({
        _id: req.params.id
      });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
  