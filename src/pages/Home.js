import { useEffect, useState } from 'react';
import Button from '../components/BuyButton';
import axios from 'axios';
import Header from '../components/Header';
import { Banner, Main, Title, DisplayProducts, SingleProduct, StyledButton, Price, Monthly } from '../styles/homeStyles'

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const result = axios.get(`${process.env.REACT_APP_HOST}/products`);
        result.then(response => {
            setProducts(response.data);
        })
    }, []);

    return (
        <>
            <Header></Header>
            <Banner><img src="assets/img/banner.png" /></Banner>
            <Main>
                <Title>Exclusive Products</Title>
                <DisplayProducts>
                    {products?.map(p => (
                        <SingleProduct sale={p.salePrice > 0}>
                            <img src={p.productImage} title={p.productName} alt={p.productName}  />
                            <h1>{p.productName} </h1>
                            <p><span>R$ {(p.salePrice/100).toFixed(2).replace(".",",")}</span></p>
                            <Price><span>R$ {(p.price/100).toFixed(2).replace(".",",")}</span></Price>
                            <Monthly>ou em 10x de R$ {(p.price/1000).toFixed(2).replace(".",",")}</Monthly>
                           <StyledButton to={`/products/${p.id}`} ><Button >View</Button></StyledButton>
                        </SingleProduct>
                    ))}

                </DisplayProducts>

            </Main>
        </>
    );
}
