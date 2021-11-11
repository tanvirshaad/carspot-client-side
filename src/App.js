import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home/Home';
import AuthProvider from './components/contexts/AuthProvider/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Products from './components/Products/Products';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/products">
                        <Products></Products>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="/register">
                        <Register></Register>
                    </Route>
                </Switch>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
