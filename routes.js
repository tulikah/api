const express = require('express');
const book = require('./book');
const moment = require('moment');



const approuter = (app => {
    app.get('/', (req, res, next) => {
        res.sendfile('index.html')
        next();
        
}),

app.post('/getData',
    (req,res, next) => {
        let startDate = req.body.startDate;
        let endDate = moment(req.body.endDate, "YYYY-MM-DD");
        let difference = moment(moment(endDate, "YYYY-MM-DD")).diff(startDate, "YYYY-MM-DD");
        let noofdays = moment.duration(difference)
        console.log(noofdays.days());//Add service-tax and cleaning fee here!
    });
}
);

module.exports = approuter;