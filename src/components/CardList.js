import React from 'react'
import Card from './Card';
const CardList = ({data}) => {

    const Alert = (x) => alert(x);

    return (
        <div id="products">
            { data.map((el,i) => (
    

<Card key={i} name={el.name} price={el.price} description={el.description} image={el.image} alertName={Alert}>


</Card>
               


            ))






            }

    



        </div>
    )
}

export default CardList
