import { Grid } from '@material-ui/core';
import React from 'react';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Content from './Content'

const Home = (props) => {
    return (
        <Grid container spacing={2}>
            <HamburgerMenu {...props} />
            <Content />
        </Grid>
    );
};

export default Home;