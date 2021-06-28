import GlobalStyle from "../GlobalStyle";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {

    const [user,setUser] = useState()

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Switch>
                    <UserContext.Provider value={{ user, setUser }}>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/signup" exact>
                            <SignUp />
                        </Route>
                        <Route path="/login" exact>
                            <Login />
                        </Route>
                        <Route path="/cart" exact>
                            <Cart />
                        </Route>
                        <Route path="/userdata" exact>
                            <UserData />
                        </Route>
                        <Route path="/success" exact>
                            <Success />
                        </Route>
                    </UserContext.Provider>
                </Switch>
            </BrowserRouter>
        </>
    );
}
