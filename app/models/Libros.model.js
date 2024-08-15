
module.exports = (sequelize, Sequelize) => {
	const Libros = sequelize.define('libros', {	
	  id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
    },
	  cod_libro: {
			type: Sequelize.INTEGER
	  },
	  nom_libro: {
		type: Sequelize.STRING
  	},
	  editorial: {
			type: Sequelize.STRING
  	},
	  autor: {
		type: Sequelize.STRING
	},
	genero: {
		type: Sequelize.STRING
  	},
	  pais_aut: {
		type: Sequelize.STRING
  	},
	  num_pag: {
		type: Sequelize.INTEGER
	},
	  ano_edi: {
		type: Sequelize.INTEGER
	},
	  precio_lib: {
		type: Sequelize.DOUBLE
	},
    copyrightby: {
      type: Sequelize.STRING,
      defaultValue: 'Cover'
    }
	});
	
	return Libros;
}