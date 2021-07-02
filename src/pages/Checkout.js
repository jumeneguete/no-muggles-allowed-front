import { useContext, useEffect, useState } from 'react';
import {Title, BoxButton, MyButton, Container} from "../styles/checkoutFormStyles"
import RenderAddress from "../components/Checkout/RenderAdress"
import CheckoutForm from '../components/Checkout/CheckoutForm'
import SaveAddress from '../helpers/Checkout/SaveAddress'
import SaveCard from '../helpers/Checkout/SaveCard';
import SelectPayment from '../components/Checkout/SelectPayment';
import RenderCard from '../components/Checkout/RenderCard';
import { useHistory } from 'react-router-dom';
import RenderRegistersAddress from '../components/Checkout/RenderRegistersAddress';
import axios from 'axios';
import UserContext from '../context/UserContext';

export default function Checkout () {

    const [titleAddress, setTitleAddress] = useState()
    const [address, setAddress] = useState()
    const [CPF, setCPF] = useState()
    const [cardNumber, setCardNumber] = useState()
    const [cardName, setCardName] = useState()
    const [cardValidity, setCardValidity] = useState()
    const [payment, setPayment] = useState()
    const [disabled, setDisabled] = useState(false)
    const [renderCard, setRenderCard] = useState(false)
    const [registersAddress, setRegistersAddress] = useState(false)
    const statesAddress = [setTitleAddress, setAddress, setCPF]
    const statesPayment = [setCardNumber, setCardName, setCardValidity]

    const nameAddress = ["titleAddress","address", "CPF"]
    const namePayment = ["cardNumber", "cardName", "cardValidity"]
    const inputsAddress = ["Título do endereço", "Endereço", "CPF"]
    const inputsPayment = ["N° do cartão", "Nome no cartão", "Validade"]
    
    
    const history = useHistory()
    const {user} = useContext(UserContext)

    function finishOrder () {
        const config = {headers: {"Authorization": `Bearer ${user.token}`}}
        const body = {payment}
        axios.post('http://localhost:4000/finish', body, config)
        history.push('/success')
    }

    useEffect(() => {
        const config = {headers: {"Authorization": `Bearer ${user.token}`}}
        const request = axios.get("http://localhost:4000/useraddress", config)
        request.then(() => {
            setRegistersAddress(true)
        })
    }
    , []);

    return (
        <Container>
            <Title>Dados da entrega</Title>
            {registersAddress
                ?   <>
                    <RenderRegistersAddress setAddress={setAddress} address={address} user={user}/>
                    <BoxButton direction="row" gap="medium">
                        <MyButton onClick={() => setRegistersAddress(false)} primary label="Adicionar novo endereço" />
                    </BoxButton>
                    </>
                :   <>
                    <CheckoutForm
                        onSubmit={() => SaveAddress({titleAddress, address, CPF, setDisabled, user, setAddress, history})}
                        titles={inputsAddress}
                        names={nameAddress}
                        states={statesAddress}
                        disabled={disabled}
                    />
                    <BoxButton direction="row" gap="medium">
                        <MyButton onClick={() => setRegistersAddress(true)} primary label="Selecionar outro endereço" />
                    </BoxButton>
                    </>
            }

            <Title>Método de pagamento</Title>
            <SelectPayment setPayment={setPayment} payment={payment}/>
            {payment === "Cartão de crédito"
            ?   renderCard
                ?   <>
                    <RenderCard
                    cardName={cardName}
                    setCardName={setCardName}
                    cardNumber={cardNumber}
                    />
                    <BoxButton direction="row" gap="medium">
                        <MyButton onClick={() => setRenderCard(false)} primary label="Adicionar novo cartão" />
                    </BoxButton>
                    </>
                :   <CheckoutForm
                        onSubmit={() => SaveCard({cardNumber, cardName, cardValidity, setDisabled, setRenderCard, user})}
                        titles={inputsPayment}
                        names={namePayment}
                        states={statesPayment}
                        disabled={disabled}
                    />
            : <> </>}
            <BoxButton direction="row" gap="medium">
                <MyButton onClick={finishOrder} primary label="Finalizar" />
            </BoxButton>
        </Container>
    );
}