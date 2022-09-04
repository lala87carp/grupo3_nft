const express = require ("express");
const path = require ("path");
const cookies = require('cookie-parser')
const expressValidator = require('express-validator')
const fs = require('fs');
const session = require("express-session");
const methodOverride = require('method-override');
const multer = require('multer');
const cors = require('cors')

const productRouter = require ("./routes/productRouter");
const mainRouter = require ("./routes/mainRouter");
const userRouter = require ("./routes/userRouter");
const adminRouter = require ("./routes/adminRouter");
const productAPIRouter = require("./routes/api/products");
const apiCategoriesRouter = require('./routes/api/categoriesRouter');
const apiUsersRouter = require('./routes/api/users');
const guestMiddleware = require("./middlewares/guestMiddleware");
const authMiddleware = require('./middlewares/authMiddleware');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware')
const usersAPIController = require('./controllers/api/usersAPIController');

const app = express();
app.use(session({
    secret: 'It is a secret',
    resave: false,
    saveUninitialized:true
}))

app.use(cookies())

app.use ( methodOverride ('_method') );

//*captura info del body*//
app.use(cors())
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
app.use('/api/categories', apiCategoriesRouter);
//Aquí creo la colección de mis recursos de users (APIs)
app.use('/api/users', apiUsersRouter);
app.use('/api/products/', productAPIRouter);

// app.use(guestMiddleware);
// app.use(authMiddleware);
// app.use(userLoggedMiddleware);

app.use((req,res,next)=>{
    res.status(404).render('not-found')
})

app.listen(3000,() => {
    console.log("servidor corriendo en el puerto 3000");
});







