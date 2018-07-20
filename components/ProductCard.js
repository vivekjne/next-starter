import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
  
  const ProductCard = (props) => {
    return (
      <div>
        <Card>
          <CardImg top  style={{maxHeight:'200px',width:'200px',margin:'auto',display:'block'}} src={props.product.image} alt={`${props.product.name} image`} />
          <CardBody>
            <CardTitle>{props.product.name}</CardTitle>
            <CardSubtitle style={{color:'goldenrod'}}><span style={{color:'red'}}>INR</span> {props.product.price}</CardSubtitle>
            <CardText>{props.product.description}.</CardText>
            <Button color="danger" block onClick={props.addToCart}>Add to cart</Button>
          </CardBody>
        </Card>
      </div>
    );
  };
  
  export default ProductCard;