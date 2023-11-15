
export const Item = ({product}) => {
  return (
    <div className='card w-25'>
         <div className='card-body p-0 text-center'>
            <img src={prodcut.imageUrl} className='card-img-top w-100' alt="" />
            <h6>{product.name}</h6>
            <p>Precio: {product.price}</p>
            <p>Stock: {productos.stock}</p>
        </div>
        <div className='card-footer'> 
            <link to={`/deatil/$product.id`}>
                <button className='btn btn-outline-dark w-100'>Detalle</button>
            </link>
        </div>
    </div> 
  )
}
