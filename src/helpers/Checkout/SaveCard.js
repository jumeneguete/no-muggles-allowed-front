import axios from "axios"

export default function SaveCard ({cardNumber, cardName, cardValidity, setDisabled, setRenderCard, user}) {

    setDisabled(true)
    const validity = (new Date(cardValidity).toISOString().slice(0,10))
    const body = {cardNumber, cardName, validity}
    const config = {headers: {"Authorization": `Bearer ${user.token}`}}
    const promise = axios.post('http://localhost:4000/savecard', body, config)
    promise.then((response) => {
        console.log(response.data)
        setDisabled(false)
        
    })
    promise.catch(e => {
        console.log(e.response.status)
        setDisabled(false)})
}