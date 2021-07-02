import GlobalStyle from "./GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./context/UserContext";
import SingUp from "./pages/SignUp";
import SingIn from "./pages/SingIn";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Header from "./components/Header";
import Success from "./pages/Success";

export default function App() {
    const alreadyLoggedIn = localStorage.getItem("lastLogin");
    const [user,setUser] = useState(alreadyLoggedIn && JSON.parse(alreadyLoggedIn))

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Switch>
                    <UserContext.Provider value={{ user, setUser }}>
                        <Route path="/home" exact>
                            <Home />
                        </Route>
                        <Route path="/products/:productId" exact>
                            <Header />
                            <Products />
                        </Route>
                        <Route path="/sign-up" exact>
                            <SingUp />
                        </Route>
                        <Route path="/" exact>
                            <SingIn />
                        </Route>
                        <Route path="/cart">
                            <Cart />
                        </Route>
                        <Route path="/checkout">
                            <Checkout />
                        </Route>
                        <Route path="/success">
                            <Success />
                        </Route>
                    </UserContext.Provider>
                </Switch>
            </BrowserRouter>
        </>
    );
}