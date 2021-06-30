import axios from "axios"
import { useEffect } from "react"

export default function UpdateCart (item) {
    const config = {headers: {"Authorization": `Bearer teste`}}
    const body = {itemSku: item.sku}
    const promise = axios.post('http://localhost:4000/delete-item', body, config)
    promise.then(response => {
        console.log(response.data)
    })
}