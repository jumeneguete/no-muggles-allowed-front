import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';

const SearchStyle = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
   
`;

const StyledInput = styled(DebounceInput)`
    width: 350px;
    height: 35px;
    border:none;
    border-radius: ${props => props.searching ? "5px 5px 0 0" : "5px"};
    box-shadow: 0;
    padding: 20px 10px;

    @media (max-width: 640px) {
        width: 90vw;
    }


    &:focus{
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    &::placeholder {
        font-family: "Lato", sans-serif;
        font-size: 15px;
        color: #C6C6C6;
    }

`;

const Suggestions = styled.div`
    width: 100%;
    background-color: whitesmoke;
    border-radius: 0 0 5px 5px;
    position: absolute;
    top:40px;
    left: 0;
    display: ${props => props.searching ? "block" : "none"};
`;

const NotFound = styled.div`
    width: 100%;
    padding: 20px;
    font-style: italic;
    color: #7f7f7f;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProductSearched = styled.div`
    padding: 15px 0;
    font-size: 16px;
    display: flex;
    align-items: center;

    img {
        width: 40px;
        height: 40px;
        border-radius: 5px;
        margin-left: 10px;
        object-fit: cover;
        margin-right: 13px;
    }

    p {
        max-width: 170px;
        color:#515151;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    span {
        margin-left: 10px;
        color: #000;
    }
`;

const Banner = styled.div`
margin-top: 80px;

   img {
   width: 100%;
   height: 85vh;
   object-fit: cover;
   }

   @media (max-width: 900px) {
       img {
           height: 40vh;
           object-fit: cover;
       }
   }
`;

const Main = styled.div`
   width: 80%;
   margin: 40px auto;
`;

const Title = styled.div`
   font-size: 40px;
   font-weight: 700;
   color: #184059;
   margin: 40px auto;
`;

const DisplayProducts = styled.div`
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
   //overflow: scroll;

   /* Hide scrollbar for IE, Edge and Firefox */
   //-ms-overflow-style: none;  /* IE and Edge */
   //scrollbar-width: none;  /* Firefox */

   /* Hide scrollbar for Chrome, Safari and Opera */
   //&::-webkit-scrollbar {
   //    display: none;
   //}

`;

const SingleProduct = styled.div`
width: 25%;
border: 1px solid lightgray;
margin:  0 0 20px 0;
display: flex;
flex-direction: column;
justify-content: center;


   @media (max-width: 900px) {
           width: 50%;
       }
   @media (max-width: 900px) {
       width: 90%;
   }

   img {
       width: 100%;
       height: 300px;
       object-fit: cover;
   }

   h1{
       width: 90%;
       margin: 10px auto;
       font-size: 20px;
       font-weight: 700;
   }

   p {
       width: 90%;
       margin: 0 auto 5px auto;
       font-size: 14px;
       display: ${props => props.sale ? "block" : "none"};
   }

   p span {
       text-decoration: line-through;
   }
`;

const StyledButton = styled(Link)`
   width: 100%;
   margin: 10px 0;
   display: flex;
   align-items: center;
`;

const Price = styled.div`
   font-size: 18px;
   width: 90%;
   margin: 0 auto 5px auto;

   span {
       font-weight: 700;
   }
`;

const Monthly = styled.div`
   font-size: 12px;
   width: 90%;
   margin: 0 auto 30px auto;
`;

export { SearchStyle, StyledInput, Suggestions, NotFound, ProductSearched, Banner, Main, Title, DisplayProducts, SingleProduct, StyledButton, Price, Monthly };