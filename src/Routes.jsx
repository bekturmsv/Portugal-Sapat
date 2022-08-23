import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './containers/Navbar/Navbar'
import AuthContextProvider from './contexts/AuthContext';
import ProductContextProvider from './contexts/ProductsContext'
import HomeBody from './containers/Home/HomeBody';
import SignUp from './containers/SignUp/SignUp';
import Footer from './containers/Footer/Footer'
// import SearchResult from './containers/SearchResult/SearchResult';
import SignIn from './containers/SignIn/SignIn';
import ProductList from './containers/Product/ProductList';
import EditProduct from './containers/AdminPage/EditProduct';
import { history } from './helpers/history'
import AdminPage from './containers/AdminPage/AdminPage';
// import NavbarSearch from './containers/Search/NavbarSearch/NavbarSearch'
import ProductDetails from './containers/Product/ProductDetails'
import Cart from './containers/Cart/Cart';
import ParentReview from './containers/Review/ParentReview';
import Home from './containers/Home/Home';
import SearchPage from './containers/Search/SearchFunction/SearchFunction';
import Wish from './containers/Wish/Wish';
import Payment from './components/payment/Payment';
import CreditCard from './containers/CreditCard/PaymentCard/CreditCard'

const Routes = () => {
    return (
        <div>
            <BrowserRouter history={history}>
                <Switch>
                    <ProductContextProvider>
                        <Navbar />
                        <Route exact path="/" component={HomeBody} />
                        <Route exact path="/wish" component={Wish} />
                        <Route exact path="/admin" component={AdminPage} />
                        <Route exact path="/list" component={ProductList} />
                        <Route exact path="/search" component={SearchPage} />
                        <Route exact path="/edit" component={EditProduct} />
                        <Route path="/details/:id" component={ProductDetails} />
                        <Route exact path="/cart" component={Cart} />
                        <Route exact path="/makeorder" component={CreditCard} />
                        <Route exact path="/payment" component={Payment}/   >
                    </ProductContextProvider>
                </Switch>
                <Switch>
                    <AuthContextProvider>
                        <Route exact path="/" component={HomeBody} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/signin" component={SignIn} />
                        <Route exact path="/review" component={ParentReview} />
                    </AuthContextProvider>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default Routes;
