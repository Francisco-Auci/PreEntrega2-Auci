const products = [
    {id: '1', name: 'Producto 1', category: 'remera', price: '1000', stock: 50, decripcion: 'Lorem'},   
    {id: '2', name: 'Producto 2', category: 'gorra', price: '1000', stock:  50, decripcion: 'Lorem'},
    {id: '3', name: 'Producto 3', category: 'gorra', price: '1000', stock: 50, decripcion: 'Lorem'},
    {id: '4', name: 'Producto 4', category: 'gorra', price: '1000', stock: 50, decripcion: 'Lorem'},
    {id: '5', name: 'Producto 5', category: 'gorra', price: '1000', stock: 50, decripcion: 'Lorem'}
]

export const mFetch = (id) => new Promised((res, rej)=>{

    setTimeout(() => {
        res( id ? production.find(product => product.id == id) : product)
    }, 1000)
})