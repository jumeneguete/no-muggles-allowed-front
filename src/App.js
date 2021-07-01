import GlobalStyle from "./GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./context/UserContext";
import SingUp from "./pages/SignUp";
import SingIn from "./pages/SingIn";
import Home from "./pages/Home";
import Products from "./pages/Products";

export default function App() {

    const [user,setUser] = useState(null)

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Switch>
                    <UserContext.Provider value={{ user, setUser }}>
                        <Route path="/home" exact>
                            <Home />
                        </Route>
                        <Route path="/product/:id" exact>
                            <Products />
                        </Route>
                        <Route path="/sign-up" exact>
                            <SingUp />
                        </Route>
                        <Route path="/" exact>
                            <SingIn />
                        </Route>
                    </UserContext.Provider>
                </Switch>
            </BrowserRouter>
        </>
    );
}