const express = require('express');
const router = express.Router();

router.get('/consultarPacientes/:parametro', (req,res) => {
    const { parametro } = req.params;
    let resultado = 3;
    for(let i = resultado - 1; i > 0; i--){
        resultado *= i;
    }
    res.json({respons: resultado});
});

module.exports = router;