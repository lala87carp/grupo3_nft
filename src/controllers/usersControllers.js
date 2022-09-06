const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const { validationResult } = require('express-validator');



const controller = {
    
    index: (req, res) => {
        let userDataBase = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../Data/userDataBase.json')));
        res.render(path.resolve(__dirname, '../views/register'));
    },

    create: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.render('register',{errors: errors.array()}, );
            }
            
            await db.User.create({
                ...req.body,
                name: req.body.name + ' ' + req.body.surname,

                password: bcrypt.hashSync(req.body.password, 10),
                image: req.file.filename,
                roles_id: 2
            });
            return res.redirect("login")

           
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                return res.render('register', {
                    errors: [{
                            msg: "Ya existe un usuario con ese email",
                        }]
                       
                });
            }
            console.log(error)
            res.render('register', {
                errors: [{
                    msg: "Ocurrio un error. Comunicate con el administrador.",
                }],
               
                
            })
        }
    },
    
    
    
    
    login: (req, res) => {
        res.render("login",{ session: req.session ? req.session : ""})
    },


    loginProcess: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.render('login', {errors: errors.array()});
            }
            const user = await db.User.findOne({ where: {  email: req.body.email } })
       
        if (!user) return res.render('login', {
            errors: [{
                    msg: 'Usuario o contraseña incorrectos',
                    
                
            }]
        });
       
        const passwordsMatch = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        
        if (!passwordsMatch) return res.render('login', {
            errors:  [{
                    msg: 'Usuario o contraseña incorrectos',
                    
                }]
            
        })
        delete user.password
        req.session.userLogged = user.id;
        if (req.body.remember_user) {
            res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 })
        }
         return res.redirect('profile')
            
        } catch (error) {
            res.render('login', {
                errors: [{
                    msg: "Ocurrio un error. Comunicate con el administrador."
                   
                }]
                
            })
        }
        
    },
   
    profile: async (req, res) => {
        const user =  await db.User.findByPk(req.session.userLogged)
        return res.render('profile', {
           user, session: req.session ? req.session : ""
        })
    },

    logout: (req, res) => {
        res.clearCookie('user');
        req.session.destroy();

        return res.redirect('/')
    }
}

module.exports = controller;