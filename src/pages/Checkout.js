import { useEffect, useState } from 'react';
import {Title, BoxButton, MyButton, Container} from "../styles/checkoutFormStyles"
import RenderAddress from "../components/Checkout/RenderAdress"
import CheckoutForm from '../components/Checkout/CheckoutForm'
import saveAddress from '../helpers/Checkout/saveAdress'
import saveCard from '../helpers/Checkout/saveCard'
import SelectPayment from '../components/Checkout/SelectPayment';
import RenderCard from '../components/Checkout/RenderCard';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Checkout () {

    const [titleAddress, setTitleAddress] = useState()
    const [address, setAddress] = useState()
    const [CPF, setCPF] = useState()
    const [cardNumber, setCardNumber] = useState()
    const [cardName, setCardName] = useState()
    const [cardValidity, setCardValidity] = useState()
    const [payment, setPayment] = useState()
    const nameAddress = ["titleAddress","address", "CPF"]
    const namePayment = ["cardNumber", "cardName", "cardValidity"]
    const inputsAddress = ["Título do endereço", "Endereço", "CPF"]
    const inputsPayment = ["N° do cartão", "Nome no cartão", "Validade"]
    const statesAddress = [setTitleAddress, setAddress, setCPF]
    const statesPayment = [setCardNumber, setCardName, setCardValidity]
    const [disabled, setDisabled] = useState(false)
    const [renderAddress, setRenderAddress] = useState(false)
    const [renderCard, setRenderCard] = useState(false)
    const history = useHistory()


    function finishOrder () {
        history.push('/sucess')
    }

    useEffect (() => {
        const request = axios.get("http://localhost:4000/", config)
        request.then(response => {
            console.log(response.data)
        })
    }
    , []);

    return (
        <Container>
            <Title>Dados da entrega</Title>
            {renderAddress
            ?   <>
                <RenderAddress
                    titleAddress={titleAddress}
                    setTitleAddress={setTitleAddress}
                />
                <BoxButton direction="row" gap="medium">
                    <MyButton onClick={() => setRenderAddress(false)} primary label="Adicionar novo endereço" />
                </BoxButton>
                </>
            :   <CheckoutForm
                    onSubmit={() => saveAddress({titleAddress, address, CPF, setDisabled, setRenderAddress})}
                    titles={inputsAddress}
                    names={nameAddress}
                    states={statesAddress}
                    disabled={disabled}
                />
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
                        onSubmit={() => saveCard({cardNumber, cardName, cardValidity, setDisabled, setRenderCard})}
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