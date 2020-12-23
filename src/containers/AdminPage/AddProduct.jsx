import React, { useContext, useState } from 'react';
import './AddProduct.css';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import ListSubheader from '@material-ui/core/ListSubheader';
import { productContext } from '../../contexts/ProductsContext';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: '17%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const AddProduct = () => {

    const classes = useStyles();
    const [gender, setGender] = React.useState('');
    const [color, setColor] = React.useState('');
    const [brand, setBrand] = React.useState('');
    const [size, setSize] = React.useState('');
    const [type, setType] = React.useState('');

    const handleChange = (event) => {
        setGender(event.target.value);
    };
    const handleChange1 = (event) => {
        setColor(event.target.value);
    };
    const handleChange2 = (event) => {
        setBrand(event.target.value);
    };
    const handleChange3 = (event) => {
        setSize(event.target.value);
    };
    const handleChange4 = (event) => {
        setType(event.target.value);
    };

    let { addTask } = useContext(productContext)
    let [title, setTitle] = useState('')

    // let [brand, setBrand] = useState('')
    // let [gender, setGender] = useState('')
    // let [size, setSize] = useState('')
    // let [color, setColor] = useState('')
    // let [type, setType] = useState('')
    let [img, setImg] = useState('')
    let [price, setPrice] = useState('')
    let [sale, setSale] = useState('')
    let [isError, setError] = useState(false)


    function handleClick() {
        if (!title || !brand || !gender || !size || !color || !type || !img || !price) {
            setError(true)
            return
        } else {
            setError(false)
        }

        let newObj = {
            img: img,
            title: title,
            brand: brand,
            gender: gender,
            size: size,
            color: color,
            type: type,
            price: price,
            sale: sale,
            id: Date.now()
        }
        console.log(newObj)
        addTask(newObj)
        setImg('')
        setTitle('')
        setBrand('')
        setGender('')
        setSize('')
        setColor('')
        setType('')
        setPrice('')
        setSale('')
    }

    return (


        <div className="add-product" >
            <h1 >Add product</h1>
            <input style={isError ? { borderColor: 'red' } : { borderColor: 'white' }}
                value={img} onChange={(e) => setImg(e.target.value)}
                type="text"
                placeholder="Img"
            />
            <input style={isError ? { borderColor: 'red' } : { borderColor: 'white' }}
                value={title} onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Title"
            />
            <FormControl className={classes.formControl} >
                <Select
                    style={{ textAlign: 'left' }}
                    value={brand}
                    onChange={handleChange2}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={brand}>
                        <em>Brands</em>
                    </MenuItem>
                    <MenuItem value="Massimo Dutti">Massimo Dutti</MenuItem>
                    <MenuItem value="Zara">Zara</MenuItem>
                    <MenuItem value="MichaelKors">Michael Kors</MenuItem>
                    <MenuItem value="U.S. Polo Assn.">U.S. Polo Assn.</MenuItem>
                </Select>
            </FormControl><br />
            <FormControl className={classes.formControl} >
                <Select
                    style={{ textAlign: 'left' }}
                    value={gender}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={gender}>
                        <em>Gender</em>
                    </MenuItem>
                    <MenuItem value="woman">Woman</MenuItem>
                    <MenuItem value="man">Man</MenuItem>
                    <MenuItem value="kids">Kids</MenuItem>
                </Select>
            </FormControl><br />
            <FormControl className={classes.formControl} >
                <InputLabel style={{ color: "black" }} htmlFor="grouped-select"><em>Size</em></InputLabel>
                <Select
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    style={{ textAlign: 'left' }}
                    value={size}
                    onChange={handleChange3}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}>
                    <MenuItem value={size}>
                        <em>Size</em>
                    </MenuItem>
                    <ListSubheader label="clothes">Clothes</ListSubheader>
                    <MenuItem value='XXS'>XXS</MenuItem >
                    <MenuItem value='XS'>XS</MenuItem >
                    <MenuItem value='S'>S</MenuItem >
                    <MenuItem value='M'>M</MenuItem >
                    <MenuItem value='L'>L</MenuItem >
                    <MenuItem value='XL'>XL</MenuItem >
                    <MenuItem value='XXL'>XXL</MenuItem >

                    <ListSubheader label="shoes">Shoes</ListSubheader>
                    <MenuItem value="35">35</MenuItem >
                    <MenuItem value="36">36</MenuItem >
                    <MenuItem value="37">37</MenuItem >
                    <MenuItem value="38">38</MenuItem >
                    <MenuItem value="39">39</MenuItem >
                    <MenuItem value="40">40</MenuItem >
                    <MenuItem value="41">41</MenuItem >
                    <MenuItem value="42">42</MenuItem >
                    <MenuItem value="43">43</MenuItem >
                    <MenuItem value="44">44</MenuItem >
                    <MenuItem value="45">45</MenuItem >
                    <MenuItem value="46">46</MenuItem >
                </Select>
            </FormControl><br />
            <FormControl className={classes.formControl} >
                <Select
                    style={{ textAlign: 'left' }}
                    value={color}
                    onChange={handleChange1}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={color}>
                        <em>Color</em>
                    </MenuItem>
                    <MenuItem value="Black">Black</MenuItem>
                    <MenuItem value="White">White</MenuItem>
                    <MenuItem value="Brown">Brown</MenuItem>
                    <MenuItem value="Beige">Beige</MenuItem>
                    <MenuItem value="Gray">Gray</MenuItem>
                    <MenuItem value="Blue">Blue</MenuItem>
                    <MenuItem value="Red">Red</MenuItem>
                    <MenuItem value="Green">Green</MenuItem>
                    <MenuItem value="Violet">Violet</MenuItem>
                    <MenuItem value="Pink">Pink</MenuItem>
                </Select>
            </FormControl><br />
            <FormControl className={classes.formControl} >
                <InputLabel style={{ color: "black" }} htmlFor="grouped-select"><em>Type</em></InputLabel>
                <Select
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    defaultValue=""
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    id="grouped-select"
                    style={{ textAlign: 'left' }}
                    value={type}
                    onChange={handleChange4}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}>
                    <MenuItem value={type}>
                        <em>Type</em>
                    </MenuItem>
                    <ListSubheader label="man">Man</ListSubheader>
                    <MenuItem value='Jeans Trousers'>Jeans Trousers</MenuItem >
                    <MenuItem value='Jackets'>Jackets</MenuItem >
                    <MenuItem value='Blazers'>Blazers</MenuItem >
                    <MenuItem value='Suits'>Suits</MenuItem >
                    <MenuItem value='Shirts'>Shirts</MenuItem >
                    <MenuItem value='Coats'>Coats</MenuItem >
                    <MenuItem value='Shoes'>Shoes</MenuItem >
                    <MenuItem value="Pajamas">Pajamas</MenuItem >

                    <ListSubheader label="woman">Woman</ListSubheader>
                    <MenuItem value='Jeans Trousers'>Jeans Trousers</MenuItem >
                    <MenuItem value="Dresses">Dresses</MenuItem >
                    <MenuItem value="Jackets">Jackets</MenuItem >
                    <MenuItem value="Blazers">Blazers</MenuItem >
                    <MenuItem value="Shirts">Shirts</MenuItem >
                    <MenuItem value="Coats">Coats</MenuItem >
                    <MenuItem value="Shoes">Shoes</MenuItem >
                    <MenuItem value="Bags">Bags</MenuItem >
                    <MenuItem value="Skirt">Skirt</MenuItem >
                    <MenuItem value="Jumpsuits">Jumpsuits</MenuItem >
                    <MenuItem value="Pajamas">Pajamas</MenuItem >
                </Select>
            </FormControl>
            <input style={isError ? { borderColor: 'red' } : { borderColor: 'white' }}
                value={price} onChange={(e) => setPrice(e.target.value)}
                type="text"
                placeholder="Price"
            />
            <input style={isError ? { borderColor: 'red' } : { borderColor: 'white' }}
                value={sale} onChange={(e) => setSale(e.target.value)}
                type="text"
                placeholder="sale"
            />
            <button variant="contained" onClick={handleClick} className="btn-add">Add Product</button>
        </div>

    );
};

export default AddProduct;

