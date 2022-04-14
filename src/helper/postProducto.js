const postProducto = (producto) => {
  console.log(producto)
    fetch(`https://ec2-3-234-141-85.compute-1.amazonaws.com/producto`,{
        method:'POST',
        mode: 'cors',
        credentials: 'same-origin', 
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            id:producto.id,
            nombre:producto.nombre,
            precio:producto.precio,
        })
        

    }).then(data => data).catch(error=>window.alert("Error Post "+error))
    .then(window.alert("El producto se guardo con exito"));
   
    
}


const putProducto=(producto)=>{

fetch(`https://localhost:8080/producto/${producto.id}`,{
    method:'PUT',
    mode: 'cors',
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        id:producto.id,
        nombre:producto.nombre,
        precio:producto.precio,
        })

}).then(data => data).catch(error=>console.log("ERROR EN EL PUT CONTROL "+error));
}


export { postProducto };

export default putProducto;