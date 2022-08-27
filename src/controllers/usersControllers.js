const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models')

const controller = {
    index: (req, res) => {
        let userDataBase = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../Data/userDataBase.json')));
        res.render(path.resolve(__dirname, '../views/register'));
    },

    create: async (req, res) => {
        try {
            await db.User.create({
                ...req.body,
                password: bcrypt.hashSync(req.body.password, 10),
                filename: req.file.filename,
                roles_id: 3
            });
            delete userToLogin.password
            req.session.user = userToLogin;
            /* TODO mandar remember_user desde el frontend */
            if (req.body.remember_user) {
                res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 })
            }
            res.redirect('/');
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                return res.render('register', {
                    errors: {
                        email: {
                            msg: "Ya existe un usuario con ese email"
                        }
                    }
                });
            }
            console.log(error)
            res.render('register', {
                errors: {
                    server: {
                        msg: "Ocurrio un error. Comunicate con el administrador."
                    }
                }
            })
        }

    },


    login: (req, res) => {
        res.render("login")
    },


    loginProcess: async (req, res) => {
        const user = await db.User.findOne({ where: { email: req.body.email } })

        if (!user) return res.render('userLoginForm', {
            errors: {
                email: {
                    msg: 'Usuario o contraseña incorrectos'
                }
            }
        });
        const passwordsMatch = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!passwordsMatch) return res.render('userLoginForm', {
            errors: {
                email: {
                    msg: 'Usuario o contraseña incorrectos'
                }
            }
        })
        delete user.password
        req.session.user = user;
        if (req.body.remember_user) {
            res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 })
        }
        return res.redirect('/user/profile')

    },

    profile: async (req, res) => {
        return res.render('userProfile', {
            user: req.session.user
          })
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');

    }

}

module.exports = controller;