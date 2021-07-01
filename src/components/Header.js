import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../context/UserContext"
import Search from "./Search";
import { CartOutline } from 'react-ionicons';
import { ExitOutline } from 'react-ionicons';
import { LogInOutline } from 'react-ionicons';
import axios from "axios";
import {HeaderStyles, CartLog, Cart, Counter, LinkToLogin, SearchHeader} from "../styles/homeStyles"

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
                <span><Link to="/">
                    NO Muggles <br/> Allowed
                    {/* <img src="assets/img/logo.jpg" title="No Muggles Allowed" alt="No Muggles Allowed" /> */}
                    </Link></span>
                <SearchHeader><Search search={search} setSearch={setSearch} /></SearchHeader>


                <div>
                    <CartLog>
                        {user ?
                            <>
                                <Cart>
                                    <CartOutline color={'#fff'} height="65px" width="65px" />
                                    <Counter>{total}</Counter>
                                </Cart>
                                <ExitOutline color={'#fff'} height="30px" width="30px" />
                            </> :
                            <Link to="/" className="login">
                                <p>Login for Wizards only </p>
                                {/* <img src="assets/img/logo.jpg" title="No Muggles Allowed" alt="No Muggles Allowed" /> */}
                                <LogInOutline color={'#fff'} height="30px" width="30px" />
                            </Link>
                        }
                    </CartLog>
                </div>
            </HeaderStyles>
        </>
    );
}