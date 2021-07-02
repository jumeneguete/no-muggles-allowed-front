import styled from "styled-components";

const SingleProduct = styled.div`
    width: 80%;
    height: 500px;
    margin: 150px auto 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 640px) {
        flex-direction: column;
    }

`;

const Img = styled.div`

img {
       width: 100%;
       height: 500px;
       object-fit: contain;
   }
`;

const ProductDetails = styled.div`
    height: 500px;
    padding: 20px 0;
    margin-left: 20px;
    padding: 0 15px;
    
    position: relative;
`;

const Name = styled.h1`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;

    @media (max-width: 640px) {
        margin-top: 20px;
    }
`;

const Description = styled.div`
    font-size: 20px;
    font-style: italic;
    margin-bottom: 20px;
`;

const FullPrice = styled.div`
    font-size: 20px;
    color: red;
    text-decoration: line-through;
    margin-bottom: 10px;
    display: ${props => props.sale ? "block" : "none"};
`;

const CurrentPrice = styled.div`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 40px;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 15px;
    left: 0;
    right: 0;

    @media (max-width: 640px) {
        position: relative;
    }

`;

const Button = styled.button`
    width: 300px;
    height: 40px;
    margin-bottom: 15px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 600;
    font-family: 'Oxygen', sans-serif;
    letter-spacing: 1px;
    color: #fff;
    background-color: #000;
    text-align: center;

        &:focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }
`;

const Message = styled.div`
    font-style: italic;
    display: ${props => props.logged ? "none" : "block"};

    span {
        font-size: 20px;
        font-weight: 700;
    }
`;

export { SingleProduct, Img, ProductDetails, Name, Description, FullPrice, CurrentPrice, Container, Button, Message };