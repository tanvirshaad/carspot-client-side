import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home/Home';
import AuthProvider from './components/contexts/AuthProvider/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Products from './components/Products/Products';
import AllProducts from './components/AllProducts/AllProducts';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';

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
                    <Route path="/allProducts">
                        <AllProducts></AllProducts>
                    </Route>
                    <Route path="/products">
                        <Products></Products>
                    </Route>
                    <PrivateRoute path="/placeOrder/:_id">
                        <PlaceOrder></PlaceOrder>
                    </PrivateRoute>
                    <Route path="/dashboard">
                        <Dashboard></Dashboard>
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
