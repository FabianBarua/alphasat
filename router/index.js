const router = require('express').Router();
const landingController = require('../controller/landing')

module.exports = ()=>{

    router.get('/', landingController.home)


    router.all('*', (req, res) => { 
        res.redirect('/'); 
    }); 


    return router
}