
import { Switch, Route } from "react-router";
import Main from "../pages/Main";

export function Routes(){
    return(
            <Switch>
                <Route component={Main} path="/" exact/>
            </Switch>
    )
} 