

const db = require('../config/db.config.js');
const Libros = db.Libros;

exports.create = (req, res) => {
    let Libros = {};

    try{
        // Building Libros object from upoading request's body
        Libros.cod_libro = req.body.cod_libro;
        Libros.nom_ibro = req.body.nom_libro;
        Libros.editoral = req.body.editorial;
        Libros.autor = req.body.autor;
        Libros.genero = req.body.genero;
        Libros.pais_aut = req.body.pais_aut;
        Libros.num_pag = req.body.num_pag;
        Libros.ano_edi = req.body.ano_edi
        Libros.precio_lib = req.body.precio_lib
    
        // Save to MySQL database
        Libros.create(Libros).then(result => {    
            // send uploading message to client
            res.status(200).json({
                message: "Subido exitosamente a la ID = " + result.id,
                Libros: result,
            });
        });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}
/*
exports.retrieveAllSong = (req, res) => {
  // find all Customer information from 
  Song.findAll()
      .then(SongInfo => {
          res.status(200).json({
              message: "Get all Songs' Infos Successfully!",
              songs: SongInfo
          });
      })
      . catch(error => {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
      });
}

exports.getSongById = (req, res) => {
  // find all Customer information from 
  let songId = req.params.id;
  Customer.findByPk(songId)
      .then(Song => {
          res.status(200).json({
              message: " Successfully Get a Song with id = " + songId,
              song: Song
          });
      })
      . catch(error => {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
      });
}


exports.filteringByName = (req, res) => {
  let name = req.query.name;

    Song.findAll({
                      attributes: ['id', 'name', 'description', 'artist', 'duration', 'extension', 'album', 'year', 'copyrightby'],
                      where: {name: name}
                    })
          .then(results => {
            res.status(200).json({
                message: "Consultar todas las canciones del artista =" + name, 
                song: results,
            });
          })
          . catch(error => {
              console.log(error);
              res.status(500).json({
                message: "Error!",
                error: error
              });
            });
}
 
exports.pagination = (req, res) => {
  try{
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
  
    const offset = page ? page * limit : 0;
  
    Customer.findAndCountAll({ limit: limit, offset:offset })
      .then(data => {
        const totalPages = Math.ceil(data.count / limit);
        const response = {
          message: "Paginating is completed! Query parameters: page = " + page + ", limit = " + limit,
          data: {
              "copyrightby": "Cover",
              "totalItems": data.count,
              "totalPages": totalPages,
              "limit": limit,
              "currentPageNumber": page + 1,
              "currentPageSize": data.rows.length,
              "customers": data.rows
          }
        };
        res.send(response);
      });  
  }catch(error) {
    res.status(500).send({
      message: "Error -> Can NOT complete a paging request!",
      error: error.message,
    });
  }    
}


exports.updateById = async (req, res) => {
    try{
        let songId = req.params.id;
        let song = await song.findByPk(songId);
    
        if(!customer){
            // return a response to client
            res.status(404).json({
                message: "No se encontro una cancion con esa ID = " + songId,
                song: "",
                error: "404"
            });
        } else {    
            // update new change to database
            let updatedObject = {
                name: req.body.name,
                description: eq.body.description,
                artist: req.body.artist,
                duration: req.body.duration,
                extension: req.body.extension,
                album: req.body.album,
                year: req.body.year,
            }
            let result = await Song.update(updatedObject, {returning: true, where: {id: songId}});
            
            // return the response to client
            if(!result) {
                res.status(500).json({
                    message: "Error -> No se puede actualizar esa cancion con ID = " + req.params.id,
                    error: "NO se puede Actualizar",
                });
            }
              
            res.status(200).json({
                message: "No se puede actualizar esa cancion con ID = " + songId,
                song: updatedObject,
            });
        }
    } catch(error){
        res.status(500).json({
            message: "Error -> No se puede actualizar esa cancion con ID =" + req.params.id,
            error: error.message
        });
    }
}

exports.deleteById = async (req, res) => {
    try{
        let SongId = req.params.id;
        let song = await Song.findByPk(songId);

        if(!song){
            res.status(404).json({
                message: "No existe una Cancion con el ID = " + SongId,
                error: "404",
            });
        } else {
            await song.destroy();
            res.status(200).json({
                message: "Se ha eliminiado exitosamente la cancion con la ID = " + SongId,
                song: Song,
            });
        }
    } catch(error) {
        res.status(500).json({
            message: "Error -> NO se puede eliminar la cancion con el ID = " + req.params.id,
            error: error.message,
        });
    }
}
    */