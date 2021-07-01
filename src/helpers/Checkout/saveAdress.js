import axios from "axios"

export default function saveAddress ({titleAddress, address, CPF, setDisabled, setRenderAddress}) {
    setDisabled(true)
    const body = {titleAddress, address, CPF}
    const config = {headers: {"Authorization": `Bearer teste`}}
    const promise = axios.post('http://localhost:4000/useraddress', body, config)
    promise.then(() => {
        setDisabled(false)
        setRenderAddress(true)
    })
    promise.catch(() => setDisabled(false))
}