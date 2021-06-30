import GlobalStyle from "./GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { Grommet } from "grommet";
import Cart from "./pages/Cart";
import UserContext from "./context/UserContext"
import Success from "./pages/Success";
import UserData from "./pages/UserData";

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

                        </Route>
                        <Route path="/signup" exact>

                        </Route>
                        <Route path="/login" exact>

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
