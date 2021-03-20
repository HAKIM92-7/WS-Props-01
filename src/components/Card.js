import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types' ;

const Card = (props) => {
    return (
        <div>
            <div className="wrapper" onClick={()=>props.alertName(props.name)}>
  <div className="container">
    <div className="top">
        <img src={props.image} alt="..." style={{width:"100%" , height:"100%"}}/>
    </div>
    <div className="bottom">
      <div className="left">
        <div className="details">
        
          <h5>{props.name}</h5>
        
          <p><span>{props.price}</span> TND</p>
          
        </div>
       
      </div>
     
    </div>
  </div>
  <div className="inside">
    <div className="icon"><i className="fas fa-info"></i></div>
    <div className="contents">
      <p>{props.description}</p>
      {props.children}
    </div>
  </div>
</div>
        </div>
    )
}

Card.propTypes = {

name: PropTypes.string ,
image:PropTypes.string ,
price:PropTypes.string ,
description:PropTypes.string
}

Card.defaultProps ={

name:"Anonyme" ,
price:"free" ,
image:"https://productmanagementfestival.com/wp-content/uploads/2017/01/sell-your-product-online.jpg"

}

export default Card
