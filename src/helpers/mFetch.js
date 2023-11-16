const products = [
    {id: '1', name: 'Producto 1', category: 'remera', price: '1000', stock: 50, decripcion: 'Lorem', imageUrl:'https://www.google.com/imgres?imgurl=https%3A%2F%2Funiversoventura.vteximg.com.br%2Farquivos%2Fids%2F193028-600-600%2FRemera-Manga-Corta-DC-Shoes-Round-We-Go-Urbano-Hombre-Negro-1222102104.jpg%3Fv%3D637789732032600000&tbnid=tNbU8DxD7kezIM&vet=12ahUKEwiXp-KznseCAxVYopUCHXW5Be8QMygDegUIARDWAQ..i&imgrefurl=https%3A%2F%2Fwww.universoaventura.com.ar%2Fremera-manga-corta-dc-shoes-round-we-go-urbano-hombre-negro-1222102104%2Fp&docid=OsPZLV8JOc2EKM&w=600&h=600&q=remeras&ved=2ahUKEwiXp-KznseCAxVYopUCHXW5Be8QMygDegUIARDWAQ'},   
    {id: '2', name: 'Producto 2', category: 'remera', price: '1000', stock:  50, decripcion: 'Lorem', imageUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.whiskyndust.com%2Fmujer%2Fremeras-rock-mujer%2F&psig=AOvVaw0yHGbWxsg0ZjCOP2Av0SQi&ust=1700180056339000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNDEqLSex4IDFQAAAAAdAAAAABAG'},
    {id: '3', name: 'Producto 3', category: 'gorra', price: '1000', stock: 50, decripcion: 'Lorem', imageUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnewera.com.ar%2Fgorra-new-era-new-york-yankees-59fifty-q421-whe-blk-12891479.html&psig=AOvVaw2KRsGiu6dmlSu5XWKAOWXO&ust=1700180133729000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCxmNmex4IDFQAAAAAdAAAAABAG'},
    {id: '4', name: 'Producto 4', category: 'gorra', price: '1000', stock: 50, decripcion: 'Lorem', imageUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.innovasport.com%2Fcaballeros%2Fbeisbol%2Faccesorios%2Fnew-era%2Fgorra-new-era-59fifty-new-york-yankees-mlb-olivo%2Fp%2F000000000000213277&psig=AOvVaw2KRsGiu6dmlSu5XWKAOWXO&ust=1700180133729000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCxmNmex4IDFQAAAAAdAAAAABAL'},
    {id: '5', name: 'Producto 5', category: 'gorra', price: '1000', stock: 50, decripcion: 'Lorem', imageUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnewera.com.ar%2Fgorra-new-era-new-york-yankees-59fifty-acperf-70331909.html&psig=AOvVaw2KRsGiu6dmlSu5XWKAOWXO&ust=1700180133729000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCxmNmex4IDFQAAAAAdAAAAABAR'}
]

export const mFetch = (id) => new Promised((res, rej)=>{

    setTimeout(() => {
        res( id ? production.find(product => product.id == id) : product)
    }, 1000)
})