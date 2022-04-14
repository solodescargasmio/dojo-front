const getProductos = async () => {
    const url="https://ec2-3-234-141-85.compute-1.amazonaws.com/producto";
    const res= await fetch(url);
    const producto= await res.json();
return producto;
}

const getProducto = async (productoId) => {
    const url="https://ec2-3-234-141-85.compute-1.amazonaws.com/producto/"+productoId;
    const res= await fetch(url);
    const producto= await res.json();
return producto;
}

export { getProducto };
export default getProductos;