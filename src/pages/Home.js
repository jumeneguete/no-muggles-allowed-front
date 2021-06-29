import styled from 'styled-components'
import Button from '../components/BuyButton';

export default function Home() {
    return (
        <>
            <Header></Header>
            <Banner><img src="assets/img/banner.png"/></Banner>
            <Main>
                <Title>Exclusive Products</Title>
                <DisplayProducts>
                    <SingleProduct>
                        <img src="assets/img/chapeu-seletor.png" title="exemplo" alt="exemplo" />
                        <h1>Réplica do Chapéu Seletor</h1>
                        <p>De <span>R$ 500,00</span></p>
                        <Price>Por <span>R$ 299,00</span></Price>
                        <Monthly>ou em 10x de R$ 29,90</Monthly>
                        <Button>Add to Cart</Button>
                    </SingleProduct>

                    <SingleProduct>
                        <img src="https://s.cornershopapp.com/product-images/2592213.jpg?versionId=LrOEm_xMAlXuVDyctkczbbgdCTj37jMg" title="exemplo" alt="exemplo" />
                        <h1>Réplica do Chapéu Seletor</h1>
                        <p>De <span>R$ 500,00</span></p>
                        <Price>Por <span>R$ 299,00</span></Price>
                        <Monthly>ou em 10x de R$ 29,90</Monthly>
                        <Button>Add to Cart</Button>
                    </SingleProduct>

                    <SingleProduct>
                        <img src="https://s.cornershopapp.com/product-images/2592213.jpg?versionId=LrOEm_xMAlXuVDyctkczbbgdCTj37jMg" title="exemplo" alt="exemplo" />
                        <h1>Réplica do Chapéu Seletor</h1>
                        <p>De <span>R$ 500,00</span></p>
                        <Price>Por <span>R$ 299,00</span></Price>
                        <Monthly>ou em 10x de R$ 29,90</Monthly>
                        <Button>Add to Cart</Button>
                    </SingleProduct>

                    <SingleProduct>
                        <img src="https://s.cornershopapp.com/product-images/2592213.jpg?versionId=LrOEm_xMAlXuVDyctkczbbgdCTj37jMg" title="exemplo" alt="exemplo" />
                        <h1>Réplica do Chapéu Seletor</h1>
                        <p>De <span>R$ 500,00</span></p>
                        <Price>Por <span>R$ 299,00</span></Price>
                        <Monthly>ou em 10x de R$ 29,90</Monthly>
                        <Button>Add to Cart</Button>
                    </SingleProduct>

                    <SingleProduct>
                        <img src="https://s.cornershopapp.com/product-images/2592213.jpg?versionId=LrOEm_xMAlXuVDyctkczbbgdCTj37jMg" title="exemplo" alt="exemplo" />
                        <h1>Réplica do Chapéu Seletor</h1>
                        <p>De <span>R$ 500,00</span></p>
                        <Price>Por <span>R$ 299,00</span></Price>
                        <Monthly>ou em 10x de R$ 29,90</Monthly>
                        <Button>Add to Cart</Button>
                    </SingleProduct>

                    <SingleProduct>
                        <img src="https://s.cornershopapp.com/product-images/2592213.jpg?versionId=LrOEm_xMAlXuVDyctkczbbgdCTj37jMg" title="exemplo" alt="exemplo" />
                        <h1>Réplica do Chapéu Seletor</h1>
                        <p>De <span>R$ 500,00</span></p>
                        <Price>Por <span>R$ 299,00</span></Price>
                        <Monthly>ou em 10x de R$ 29,90</Monthly>
                        <Button>Add to Cart</Button>
                    </SingleProduct>

                    <SingleProduct>
                        <img src="https://s.cornershopapp.com/product-images/2592213.jpg?versionId=LrOEm_xMAlXuVDyctkczbbgdCTj37jMg" title="exemplo" alt="exemplo" />
                        <h1>Réplica do Chapéu Seletor</h1>
                        <p>De <span>R$ 500,00</span></p>
                        <Price>Por <span>R$ 299,00</span></Price>
                        <Monthly>ou em 10x de R$ 29,90</Monthly>
                        <Button>Add to Cart</Button>
                    </SingleProduct>

                    <SingleProduct>
                        <img src="https://s.cornershopapp.com/product-images/2592213.jpg?versionId=LrOEm_xMAlXuVDyctkczbbgdCTj37jMg" title="exemplo" alt="exemplo" />
                        <h1>Réplica do Chapéu Seletor</h1>
                        <p>De <span>R$ 500,00</span></p>
                        <Price>Por <span>R$ 299,00</span></Price>
                        <Monthly>ou em 10x de R$ 29,90</Monthly>
                        <Button>Add to Cart</Button>
                    </SingleProduct>
                </DisplayProducts>

            </Main>
        </>
    );
}

const Header = styled.div`
 width: 100%;
 height: 80px;
 position: fixed;
 top:0;
 left: 0;
 right: 0;
 background-color: #184059;
`;

const Banner = styled.div`
margin-top: 80px;
    img {
    width: 100%;
    height: 85vh;
    object-fit: cover;
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
    }

    p span {
        text-decoration: line-through;
    }
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

