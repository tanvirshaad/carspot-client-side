import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../AdminRoute/AdminRoute';
import Payments from '../Payments/Payments';
import AllOrders from '../AllOrders/AllOrders';
import Review from '../Review/Review';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';

const drawerWidth = 230;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, logout } = useAuth();
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ margin: '0 auto' }}>
            <Toolbar />
            <Divider />
            {!admin && (
                <Box>
                    <Link style={{ textDecoration: 'none' }} to="/allProducts">
                        <Button color="inherit">BUY MORE</Button>
                    </Link>
                    <br />
                    <Link
                        style={{ textDecoration: 'none' }}
                        to={`${url}/myOrders`}
                    >
                        <Button color="inherit">My Orders</Button>
                    </Link>
                    <br />
                    <Link
                        style={{ textDecoration: 'none' }}
                        to={`${url}/payment`}
                    >
                        <Button color="inherit">Make Payment</Button>
                    </Link>
                    <br />
                    <Link
                        style={{ textDecoration: 'none' }}
                        to={`${url}/review`}
                    >
                        <Button color="inherit">Review</Button>
                    </Link>
                    <br />
                    <Link style={{ textDecoration: 'none' }} to="/home">
                        <Button onClick={logout} variant="outlined">
                            Logout
                        </Button>
                    </Link>
                    <br />
                </Box>
            )}
            {admin && (
                <Box>
                    <Link
                        style={{ textDecoration: 'none' }}
                        to={`${url}/makeAdmin`}
                    >
                        <Button color="inherit">Make Admin</Button>
                    </Link>

                    <br />
                    <Link
                        style={{ textDecoration: 'none' }}
                        to={`${url}/allOrders`}
                    >
                        <Button color="inherit">Manage All Orders</Button>
                    </Link>
                    <br />
                    <Link
                        style={{ textDecoration: 'none' }}
                        to={`${url}/addProduct`}
                    >
                        <Button color="inherit">Add Product</Button>
                    </Link>
                    <br />
                    <Link
                        style={{ textDecoration: 'none' }}
                        to={`${url}/manageProducts`}
                    >
                        <Button color="inherit">Manage Products</Button>
                    </Link>
                    <br />
                    <Link style={{ textDecoration: 'none' }} to="/home">
                        <Button onClick={logout} variant="outlined">
                            Logout
                        </Button>
                    </Link>
                </Box>
            )}
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <h2 style={{ paddingBottom: '250px' }}>
                            Welcome to Dashboard
                        </h2>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payments></Payments>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/allOrders`}>
                        <AllOrders></AllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
