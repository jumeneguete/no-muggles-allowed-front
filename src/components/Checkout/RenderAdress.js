import { RadioButtonGroup } from 'grommet';
import styled from 'styled-components';

export default function RenderAddress ({titleAddress, setTitleAddress, listOfAddress}) {
    return (
        <>
            <AddressBox
                name="doc"
                options={listOfAddress}
                value={titleAddress}
                onChange={(event) => setTitleAddress(event.target.value)}
            />
        </>
    )
}

const AddressBox = styled(RadioButtonGroup)`
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
