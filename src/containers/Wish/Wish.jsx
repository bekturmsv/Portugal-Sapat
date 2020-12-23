import React, { useContext, useEffect } from 'react';
import { productContext } from '../../contexts/ProductsContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import {  Button } from '@material-ui/core';

const Wish = () => {
    const { getLiked, likeData, deleteItemInLiked, addAndDeleteProductInCart, checkProductInCart} = useContext(productContext)
    useEffect(() => {
        getLiked()
    }, [])
    return (
        <div className="cart">
            {likeData !== undefined ? (
                <div>
                    {console.log(likeData)}
                    <table className="cart-table">
                        <thead>
                            <tr className="tr-title">
                                <th>image</th>
                                <th>title</th>
                                <th>price</th>
                                <th>delete</th>
                                <th>Add to Cart</th>
                            </tr>
                        </thead>
                        <tbody>
                            {likeData.products.map(item => (
                                <tr key={item.product.id} className="tr-info">
                                    <td><img style={{ width: "80px" }} src={item.product.img} /></td>
                                    <td>{item.product.title}</td>
                                    <td>{item.product.price}</td>
                                    <td>
                                        <button onClick={() => deleteItemInLiked(item.product.id)} className="delete-btn-cart">Delete</button></td>
                                    <td>
                                        <Button onClick={() => addAndDeleteProductInCart(item.product)} color={checkProductInCart(item.product.id) ? "secondary" : "primary"} style={{ fontSize: '1.3em' }}>
                                            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>

            ) : ('NULL')}

        </div>
    );
};

export default Wish;