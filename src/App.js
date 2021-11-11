import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home/Home';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/home">
                    <Home></Home>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
