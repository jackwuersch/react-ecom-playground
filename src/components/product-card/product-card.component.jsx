import './product-card.styles.scss'

import Button from '../button/button.component'


const ProductCard = ({ product }) => {
    console.log(product)
    const { title, price, imageUrl} = product;
    return (    
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${title}`} />
            <div className='product-card-footer'>
                <span className='title'>{title}</span>
                <span className='price'>{price}</span>
                <Button buttonType='inverted'>Add to card</Button>
            </div>
        </div>
    )
}

export default ProductCard