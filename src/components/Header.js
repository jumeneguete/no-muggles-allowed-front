import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
    const config = { headers: { Authorization: `Bearer ${user.token}` } }

    useEffect(() => {
        const request = axios.get(`${process.env.REACT_APP_HOST}/cart`, config);
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

        function logout() { 
        const config = { headers: { Authorization: `Bearer ${user}` } }
        axios.post(`${process.env.REACT_APP_HOST}/sign-out`, config);
        localStorage.removeItem("lastLogin");
        setUser(null);
        history.push("/");
     }

    return (
        <>
            <HeaderStyles>
                <span><Link to="/">
                    <img src="assets/logo.png" title="No Muggles Allowed" alt="No Muggles Allowed" /> 
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
                                <ExitOutline onClick={logout} color={'#fff'} height="30px" width="30px" />
                            </> :
                            <Link to="/" className="login">
                                
                                <img src="assets/login.png" title="No Muggles Allowed" alt="No Muggles Allowed" />
                                <LogInOutline color={'#fff'} height="30px" width="30px" />
                            </Link>
                        }
                    </CartLog>
                </div>
            </HeaderStyles>
        </>
    );
}