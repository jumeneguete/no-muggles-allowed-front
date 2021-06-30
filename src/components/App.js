import GlobalStyle from "../GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../context/UserContext";

import SingUp from "../pages/SignUp";
import SingIn from "../pages/SingIn";

export default function App() {

    const [user,setUser] = useState()

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Switch>
                    <UserContext.Provider value={{ user, setUser }}>
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