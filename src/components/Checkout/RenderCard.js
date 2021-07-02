import { RadioButtonGroup } from 'grommet';
import styled from 'styled-components';

export default function RenderCard ({cardName, setCardName, cardNumber}) {

    const number = `****.****.****.${cardNumber.slice(12, 16)}`
    return (
        <>
            <CardBox
                name="doc"
                options={[`${number} - ${cardName}`]}
                value={`${number} - ${cardName}`}
                onChange={(event) => setCardName(event.target.value)}
            />
        </>
    )
}

const CardBox = styled(RadioButtonGroup)`
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