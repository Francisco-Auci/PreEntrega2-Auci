import {useCounter} from '../../hooks/useCouter'

export const ItemCounter = ({inital=1, stock=5, onAdd}) => {
    const { counter, handleRestar, hadleSumar } = useCounter(inital, stock)

    const handleOnAdd = () => {
        onAdd(counter)
    }

    return(
        <div className="w-25">
            <label >{counter}</label>
            <button className='btn btn-outline-dark' onClick={handleSumar}>+</button>
            <button className='btn btn-outline-dark' onClick={handleRestar}>-</button>
            <button className='btn btn-outline-dark' onClick={handleOnAdd}>Agregar al Carrito</button>
        </div>
    )
} 
