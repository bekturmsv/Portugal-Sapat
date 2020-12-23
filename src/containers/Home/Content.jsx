import React from 'react';
import { Grid, makeStyles, Paper } from '@material-ui/core';
import ProductList from '../Product/ProductList';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary
    }
}))

const Content = () => {
    const classes = useStyles();

    return (
        <Grid item md={9}>
            <Paper className={classes.paper}>
                <ProductList/>
            </Paper>
        </Grid>
    );
};

export default Content;