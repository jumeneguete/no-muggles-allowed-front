import axios from "axios"

export default function UpdateCart ({item,user, setCart, history}) {

    const config = {headers: {"Authorization": `Bearer ${user.token}`}}
    const body = {itemSku: item.sku}
    const promise = axios.post(`${process.env.REACT_APP_HOST}/delete-item`, body, config)
    promise.then(response => {
        setCart(response.data)
        if(!response.data.length) return history.push('/cart')
    })
}