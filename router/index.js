const router = require('express').Router();
const landingController = require('../controller/landing')

module.exports = ()=>{

    router.get('/', landingController.home)

    router.get('/txpro', landingController.txpro)

    router.all('*', (req, res) => { 
        res.redirect('/'); 
    }); 


    return router
}