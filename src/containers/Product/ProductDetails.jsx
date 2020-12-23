import React, { useEffect, useContext } from 'react';
import { productContext } from '../../contexts/ProductsContext';
import Navbar from '../Navbar/Navbar';
import './ProductDetails.css'
const ProductToDetails = (props) => {
    const { productToDetails, detailsTodo } = useContext(productContext)

    useEffect(() => {
        detailsTodo(props.match.params.id)
    }, [])

    return (
        <div>
            <Navbar/>
            {productToDetails != null ?



                <div className="main-details">
                    {/* {productToDetails.title} */}

                    <div className="img-block"> <img src={productToDetails.img} alt="" /> <h1 className="title">{productToDetails.title}</h1></div>
                    <div className="info">
                        <table>
                            <tbody>

                                <tr className="trr">
                                    <th>Brand :</th>
                                    <td>{productToDetails.brand}</td>
                                </tr>

                                

                                <tr className="trr">
                                    <th>Gender :</th>
                                    <td>{productToDetails.gender}</td>
                                </tr>

                                

                                <tr className="trr">
                                    <th>Size :</th>
                                    <td>{productToDetails.size}</td>
                                </tr>

                                

                                <tr className="trr">
                                    <th>Color :</th>
                                    <td>{productToDetails.color}</td>
                                </tr>
                                
                                <tr className="trr">
                                    <th>Type :</th>
                                    <td>{productToDetails.type}</td>
                                </tr>
                                
                                <tr className="trr">
                                    <th>Price :</th>
                                    <td>{productToDetails.price}</td>
                                </tr>
                                
                                {productToDetails.sale== '' ? null : (<tr className="trr">
                                    <th>Sale :</th>
                                    <td>{productToDetails.sale}</td>
                                </tr>)}
                                

                              

                            </tbody>
                        </table>
                    </div>
                </div>
                : 'Loading'}
        </div>
    );
};


export default ProductToDetails;