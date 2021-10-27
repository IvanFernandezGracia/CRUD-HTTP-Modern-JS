import * as CRUD from './js/crud-provider';


// READ
CRUD.getUsuario( 2 ).then( console.log );
// CREATE
CRUD.crearUsuario({
    name: 'Ivan',
    job: 'Fullstack Developer'
}).then( console.log );
//UPTADE
CRUD.actualizarUsuario( 1, {
    name: 'Donald Trump',
    job: 'Ex Presidente'
}).then( console.log );
// DELETE
CRUD.borrarUsuario( 1 ).then( console.log );