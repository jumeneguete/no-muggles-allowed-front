import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";
import { SingleProduct, Img, ProductDetails, Name, Description, FullPrice, CurrentPrice, Container, Button, Message } from "../styles/productStyles"

export default function Products() {
    const { productId } = useParams();
    const { user } = useContext(UserContext);
    const [product, setProduct] = useState({})
    const [logged, setLogged] = useState(true);
    const history = useHistory();

    useEffect(() => {
        const request = axios.get(`${process.env.REACT_APP_HOST}/products/${productId}`);
        request.then(response => {
            setProduct(response.data);
        })
    }, []); 

    function addToCart() {
        if (!user) return setLogged(false);

        const config = { headers: { Authorization: `Bearer ${user.token}` } };
        const body = {
            sku: product.sku,
            quantity: '1'
        }
        const request = axios.post(`${process.env.REACT_APP_HOST}/cart`, body, config)
        request.then(() => {
            history.push("/cart")
        })
        request.catch(e => {
            console.log(e.response.status)
            if(e.response.status === 409) {
                alert("Este item já foi adicionado ao carrinho")
                return history.push("/cart")

            }
        });
    }


    return (
        <SingleProduct>
            <Img><img src={product.productImage} title={product.productName} alt={product.productName} /></Img>
            <ProductDetails>
                <Name>{product.productName} </Name>
                <Description>{product.description} </Description>
                <FullPrice sale={product.salePrice > 0}>R$ {(product.price / 1000).toFixed(2).replace(".", ",")}</FullPrice>
                <CurrentPrice>R$ {product.salePrice > 0 ? (product.salePrice / 1000).toFixed(2).replace(".", ",") : (product.price / 1000).toFixed(2).replace(".", ",")}</CurrentPrice>
                <Container>
                    <Button onClick={addToCart}>Add to Cart</Button>
                    <Message logged={logged}>Magical Products for Wizards only! Go to <Link to="/"><span>Login!!</span> </Link></Message>
                </Container>
            </ProductDetails>
        </SingleProduct>
    );
}
