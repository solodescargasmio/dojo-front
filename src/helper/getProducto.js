const getProductos = async () => {
    const url="http://localhost:8080/producto";
    const res= await fetch(url);
    const producto= await res.json();
return producto;
}

const getProducto = async (productoId) => {
    const url="http://localhost:8080/producto/"+productoId;
    const res= await fetch(url);
    const producto= await res.json();
return producto;
}

export { getProducto };
export default getProductos;