import React, { useContext, useEffect } from 'react';
import ProductCard from './ProductCard';
import { productContext } from "../../contexts/ProductsContext";
import './ProductList.css'

import Pagination from '@material-ui/lab/Pagination';  
import './ProductList.css';
import { useHistory } from 'react-router-dom';

const ProductList = () => {
    const { products, pageTask, totalCount,getproductsData } = useContext(productContext)
    useEffect(()=>{
        getproductsData()
    },[])
    const history = useHistory();
    const search = new URLSearchParams(history.location.search);
    return (
        <>
            <div className="product-list" >
                {products.map(item => (
                    <ProductCard item={item} key={item.id} />
                ))}
            </div>
            <div className="pagination" >
                <Pagination onChange={(e, newpage) => pageTask(newpage)} page={parseInt(search.get("_page")) || 1} count={Math.ceil(totalCount / 3)} defaultPage={1} />
            </div>
        </>
    );
};

export default ProductList;