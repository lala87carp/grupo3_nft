const express = require ("express");
const path = require ("path");

const multer = require('multer');
const productRouter = require ("./routes/productRouter");
const mainRouter = require ("./routes/mainRouter");
const userRouter = require ("./routes/userRouter");
const adminRouter = require ("./routes/adminRouter");
const fs = require('fs');
const methodOverride = require('method-override');
const session = require("express-session");
const guestMiddleware = require('./middlewares/guestMiddleware');
const authMiddleware = require('./middlewares/authMiddleware');
const loggedMiddleware = require('./middlewares/userLoggedMiddleware')
const cookies = require('cookie-parser')


const app = express();

app.use ( methodOverride ('_method') );

//*captura info del body*//
app.use(express.urlencoded({extended: false }));
app.use(express.json());


app.set('view engine', 'ejs'); 
app.set('views', path.resolve(__dirname, '../src/Views'));

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.use("/",mainRouter); 
app.use("/product",productRouter);
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use(session({
    secret: 'It is a secret',
    resave: false,
    saveUninitialized: false
}))
app.use(cookies())

app.use((req,res,next)=>{
    res.status(404).render('not-found')
})

app.listen(3000,() => {
    console.log("servidor corriendo en el puerto 3000");
});







