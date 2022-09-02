const fs = require('fs');


const user = {
    filename: "./database/models/User.js",
    getData: function () {
		return JSON.parse(fs.readFileSync(this.fileName, 'utf-8')); //lee el archivo que llamamos mas arriba, en este caso el user.json - por eso lo convierto a un array
	},
	
	generateId: function () {
		let allUsers = this.findAll();
		let lastUser = allUsers.pop();//con esto obtengo el ultimo ID, para despues poder sumarle 1 y seguir la correlatividad
		
		//este condicional es por si el array esta vacio, me retorna 1 como primer id
		if (lastUser) {
			return lastUser.id + 1;
		}
		return 1;
	},
	//metodo para traer (retornar) todos los usuarios desde getData (son metodos que hacen casi lo mismo)
	findAll: function () {
		return this.getData();
	},
	//busca un usuario por id (Pk por primary key de base de datos)
	findByPk: function (id) {
		let allUsers = this.findAll();//obtiene todos los usuarios de una BdeD
		let userFound = allUsers.find(oneUser => oneUser.id === id); //busca el ID determinado en el allUsers
		return userFound;
	},
	//busca un usuario por un campo en particular (depende de lo que le ponga). Me va a servir cuando alguien quiera loguearse, para ver si está registrado o no en la DB
	//ojo que trae el primero que encuentra
	findByField: function (field, text) {
		let allUsers = this.findAll();
		let userFound = allUsers.find(oneUser => oneUser[field] === text); //ej del console.log(User.findByField("email","jpscae@hotmail.com"))
		return userFound;
	},
	//guardar un usuario
	create: function (userData) {
		let allUsers = this.findAll();
		let newUser = {
			id: this.generateId(),
			...userData //con el nuevo ID generado, lo tomo para generar el newUser
		}
		allUsers.push(newUser);//le inserto al array Userdata un nuevo usuario y lo sobreescribo con JSON y fs
		fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null,  ' '));//le paso el objeto en formato JSON
		return newUser;
	},
	delete: function (id) {
		let allUsers = this.findAll();
		let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);//devuelve todos los usuarios menos el que me mandaron para borrar
		fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));//sobreescribe el array
		return true;
	}
}
module.exports = user; //exporto la funcionalidad del modelo y la requiero en el controller





