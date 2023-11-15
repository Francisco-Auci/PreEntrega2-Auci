import {ItemCunter} from '../../ItemCounter/ItemCoutainer' 
  
export const ItemDetail = ({ imageUrl, name, description, price, stock}) => {
    const onAdd = (cantidad) => {
        console.log(`La cantidad seleccionada es: ${cantidad}`);
    }
  
    return (
    <div className="row">
        <div className="col-12 text-center mt-5">
            <h1>Detalle del Producto</h1>
        </div>
        <div className="col-6 text-center mt-5">
            <img src={imageUrl} alt={name} className="img-fluid" />
            <h2>{name}</h2>
        </div>
        <div className="col-6 mt-5">
            <h4>Descripción: {description}</h4>
            <h4>Precio: {price}</h4>
            <h4>Stock: {Stock}</h4>
            <ItemCunter onAdd={onAdd} inital={1} stock={10} />
        </div>
    </div>
  )
}
