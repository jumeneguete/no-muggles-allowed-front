import GlobalStyle from "./GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { Grommet } from "grommet";
import Cart from "./pages/Cart";
import UserContext from "./context/UserContext"
import Success from "./pages/Success";
import UserData from "./pages/UserData";

import SingUp from "../pages/SignUp";
import SingIn from "../pages/SingIn";

export default function App() {

    const [user,setUser] = useState()

    return (
        <>
        <Grommet>
            <GlobalStyle />
            <BrowserRouter>
                <Switch>
                    <UserContext.Provider value={{ user, setUser }}>
                        <Route path="/" exact>
                            <SingIn />
                        </Route>
                        <Route path="/sign-up" exact>
                            <SingUp />
                        </Route>
                        <Route path="/cart" exact>
                            <Cart />
                        </Route>
                        <Route path="/checkout" exact>
                            <UserData />
                        </Route>
                        <Route path="/success" exact>
                            <Success />
                        </Route>
                    </UserContext.Provider>
                </Switch>
            </BrowserRouter>
        </Grommet>
        </>
    );
}