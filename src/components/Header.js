import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/UserContext"
import Search from "./Search";
import { CartOutline } from 'react-ionicons';
import { ExitOutline } from 'react-ionicons';
import { LogInOutline } from 'react-ionicons';
import axios from "axios";

export default function Header() {
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState(0);
    const [total, setTotal] = useState(0);
    const { user, setUser } = useContext(UserContext);
    const history = useHistory();
    const config = { headers: { Authorization: `Bearer ${user}` } }

    useEffect(() => {
        const request = axios.get(`http://localhost:4000/cart`); //colocar o config
        request.then(response => {
            setCart(response.data);
            counter(response.data);
        });
    }, [])

    function counter(array) {
        let sum = 0;
        array.forEach(i => {
            sum += parseInt(i.quantity);
        });
        setTotal(sum);
    }

    // function logout() { //onClick no ExitOutline
    //     const config = { headers: { Authorization: `Bearer ${user}` } }
    //     axios.post(`http://localhost:4000/logout`, config);
    //     localStorage.removeItem("lastLogin");
    //     setUser(null);
    //     history.push("/");
    // }

    return (
        <>
            <HeaderStyles>
                <span><Link to="/"><img src="assets/img/logo.jpg" title="No Muggles Allowed" alt="No Muggles Allowed" /></Link></span>
                <SearchHeader><Search search={search} setSearch={setSearch} /></SearchHeader>


                <Info>
                    <CartLog>
                        {user ?
                            <>
                                <Cart>
                                    <CartOutline color={'#fff'} height="65px" width="65px" />
                                    <Counter>{total}</Counter>
                                </Cart>
                                <ExitOutline color={'#fff'} height="30px" width="30px" />
                            </> :
                            <Link to="/login" className="login">
                                <img src="assets/img/logo.jpg" title="No Muggles Allowed" alt="No Muggles Allowed" />
                                <LogInOutline color={'#fff'} height="30px" width="30px" />
                            </Link>
                        }
                    </CartLog>
                </Info>
            </HeaderStyles>
        </>
    );
}

const HeaderStyles = styled.header`
            width: 100%;
            height: 80px;
            background-color: #151515;
            padding: 0 22px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1;

            img {
                height: 70px;
    }

`;

const Info = styled.div`
`;

const CartLog = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

    .login{
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
            margin-right: 10px;
        }
    }
`;

const Cart = styled.div`
            width: 70px;
            margin-right: 10px;
            position: relative;
`;

const Counter = styled.div`
            width: 25px;
            height: 25px;
            border-radius: 30px;
            font-size: 14px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top:0;
            right: 0;
            background-color: #fff;

`;

const LinkToLogin = styled.span`
            color: #fff;
`;

const SearchHeader = styled.div`
            @media (max-width: 640px) {
                display: none;
    }

`;
