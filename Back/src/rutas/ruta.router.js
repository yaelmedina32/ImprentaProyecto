const express = require('express');
const router = express.Router();

router.get('/consultarPacientes', (req,res) => {
    for(let i = 0; i < 3; i++){
        console.log('consultarPacientes', i);
    }
    res.json({respons: 'consultarPacientes'});
})

module.exports = router;