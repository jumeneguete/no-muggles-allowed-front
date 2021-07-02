import axios from 'axios';
import { RadioButtonGroup } from 'grommet';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function RenderRegistersAddress ({setAddress, address, user}) {

    const [listOfAddress, setListOfAddress] = useState()

    useEffect(() => {
        const config = {headers: {"Authorization": `Bearer ${user.token}`}}
        const request = axios.get(`${process.env.REACT_APP_HOST}/useraddress`, config)
        request.then(response => {
            setListOfAddress(response.data)
        })
    }
    , []);
    
    if(!listOfAddress) return <> </>
    if(!listOfAddress.length) return <h1>Não há endereços cadastrados</h1>

    const nameAddress = []
    
    listOfAddress.map(element => {
        nameAddress.push(element.titleAddress)
    })

    return (
        <>
            <RegistersAddressBox
                name="doc"
                options={nameAddress}
                value={address}
                onChange={(event) => setAddress(event.target.value)}
            />
        </>
    )
    
}

const RegistersAddressBox = styled(RadioButtonGroup)`
    svg{
        fill: #d98d30;
    }
    label{
        div{
           div{
            border: solid 2px #d98d30;
            } 
        }
    }
    width: 80%;
    margin: 10px 0 30px 20px;
`