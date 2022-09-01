const {validationResult} = require('express-validator')

const controller = {
	register : (req, res, next) => {
        return res.render('register')
    },
    validations : (req, res, next) =>{
        let errors = validationResult(req);

        if(errors.isEmpty()){
            return res.redirect('/')
        }
        else{
            return res.render('register', {errors: errors.mapped(), old: req.body});
        }
    }
};

module.exports = controller;
