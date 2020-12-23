import React,{useState} from 'react';
import AddProduct from './AddProduct';
import ProductListAdmin from './ProductListAdmin';

const AdminPage = () => {
    const [add,setAdd] = useState(false)
    return (
        <div style={{margin: "100px 0px"}}>
            <AddProduct />
            <ProductListAdmin />
        </div>
    );
};

export default AdminPage;