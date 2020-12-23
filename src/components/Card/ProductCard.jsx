import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import './ProductCard.css'
const useStyles = makeStyles((theme) => ({
    media: {
        height: "25vh",
        paddingTop: '56.25%',
        backgroundSize: "contain"
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },



}));

export default function ProductCarditem({ item }) {
    const classes = useStyles();




    return (
        <div className="product-card">
            <Card className={classes.root}>
                <CardHeader
                    title={<Typography variant="h5" align="center">{item.title}</Typography>}

                />

                <CardMedia
                    className={classes.media}
                    image={item.image}
                />


                <CardActions style={{ justifyContent: "space-around" }}>
                    <Typography variant="h5">
                        {item.price}
                    </Typography>
                    <Button variant="contained" color="primary">
                        Details
                </Button>

                </CardActions>
            </Card>
        </div>
    );
}