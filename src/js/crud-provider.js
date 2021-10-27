
const urlCRUD = 'https://reqres.in/api/users'; // endponit para llamar peticiones

// READ
const getUsuario = async( id ) => {

    const resp = await fetch(`${ urlCRUD }/${ id }`);
    const { data } = await resp.json();
    return data;
}

// CREATE
const crearUsuario = async( usuario ) => {

    const resp = await fetch( urlCRUD, {
        method: 'POST',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await resp.json();
}


// UPTADE
const actualizarUsuario = async( id, usuario ) => {

    const resp = await fetch( `${ urlCRUD }/${ id }`, {
        method: 'PUT',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await resp.json();
}

//DELETE
const borrarUsuario = async( id ) => {

    const resp = await fetch(  `${ urlCRUD }/${ id }`, {
        method: 'DELETE'
    });

    return ( resp.ok ) ? 'Borrado' : 'No se pudo eliminar';

}



export {
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}

// REST es un estilo de arquitectura de software que se utiliza para describir 
// cualquier interfaz entre diferentes sistemas que utilice HTTP para comunicarse.
//  Este término significa REpresentational State Transfer 
//  (transferencia de estado representacional), lo que quiere decir que entre dos 
//  llamadas cualquiera, el servicio no guarda los datos. 