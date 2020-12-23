import React, { useState, useContext } from 'react';
import './HamburgerMenu.css'
import { Link, useHistory } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { productContext } from '../../contexts/ProductsContext';
import { history } from '../../helpers/history'

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const HamburgerMenu = (props) => {
  const { getproductsData } = useContext(productContext)
  const [expanded, setExpanded] = React.useState(false);
  const [gender, setGender] = useState('');
  const [page, setPage] = useState(1)
  const history = useHistory();

  const handleChange = (panel) => (event, isExpanded) => {
    console.log(panel, isExpanded);
    setGender(panel)
    setExpanded(isExpanded ? panel : false);
  };

  function fetchParams(gender, type_like) {
    const query = new URLSearchParams(history.location.search);
    query.set("_page", page);
    query.set("gender", gender);
    query.set("type_like", type_like);
    history.push("/list" + "?" + query)
    getproductsData()
  }
  return (
    <div>
      <div>
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>
        <ul className="menu__box">
          <Link to='/home' style={{ textDecoration: 'none' }}>
            <li><span className="menu__item" href="#">Главная</span></li>
          </Link>
          <Accordion square expanded={expanded === 'man'} onChange={handleChange('man')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <li><a className="menu__item" href="#">Мужское</a></li>
            </AccordionSummary>
            <div>
              <AccordionDetails onClick={(e) => fetchParams("man", "")}><Typography>All</Typography></AccordionDetails>
              <AccordionDetails onClick={(e) => fetchParams("man", "Jeans Trousers")}><Typography> Jeans Trousers</Typography></AccordionDetails>
              <AccordionDetails onClick={(e) => fetchParams("man", "Jackets")}><Typography> Jackets</Typography></AccordionDetails>
              <AccordionDetails onClick={(e) => fetchParams("man", "Blazers")}><Typography> Blazers</Typography></AccordionDetails>
              <AccordionDetails onClick={(e) => fetchParams("man", "Shirts")}><Typography> Shirts</Typography></AccordionDetails>
              <AccordionDetails onClick={(e) => fetchParams("man", "Coats")}><Typography> Coats</Typography></AccordionDetails>
              <AccordionDetails onClick={(e) => fetchParams("man", "Shoes")}><Typography> Shoes</Typography></AccordionDetails>
              <AccordionDetails onClick={(e) => fetchParams("man", "Suits")}><Typography> Suits</Typography></AccordionDetails>
              <AccordionDetails onClick={(e) => fetchParams("man", "Pajamas")}><Typography> Pajamas</Typography></AccordionDetails>
            </div>
          </Accordion>
          <Accordion square expanded={expanded === 'woman'} onChange={handleChange('woman')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <li><a className="menu__item" href="#">Женское</a></li>
            </AccordionSummary>
            <AccordionDetails onClick={(e) => fetchParams("woman", "")}><Typography>All</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("woman", "Jeans Trousers")} ><Typography> Jeans Trousers</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("woman", "Dresses")} ><Typography> Dresses</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("woman", "Jackets")} ><Typography> Jackets</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("woman", "Blazers")} ><Typography> Blazers</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("woman", "Shirts")} ><Typography> Shirts</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("woman", "Coats")} ><Typography> Coats</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("woman", "Shoes")} ><Typography> Shoes</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("woman", "Bags")}><Typography> Bags</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("woman", "Skirt")} ><Typography> Skirt</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("woman", "Jumpsuits")}><Typography> Jumpsuits</Typography></AccordionDetails>
            <AccordionDetails onClick={(e) => fetchParams("woman", "Pajamas")}><Typography> Pajamas</Typography></AccordionDetails>
          </Accordion>
          <li><a className="menu__item" href="#">Детское</a></li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;