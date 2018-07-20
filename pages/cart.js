
import { Table,Container,Col,Row,Button } from 'reactstrap';
import Layout from '../components/MyLayout.js'
import Link from 'next/link'


import fetch from 'isomorphic-unfetch'
export default class Cart extends React.Component {
state={
    cartValue:0,
    cart:[]
}
    componentDidMount=async()=>{
        let cartValue = await localStorage.getItem('cart')
        let cart;
        console.log("cart=",cartValue)
        if(cartValue){
            cartValue = await JSON.parse(cartValue)
            cart = cartValue
            cartValue = cartValue.length
            
        }else{
            cartValue = 0
            cart = []
        }
        console.log(cartValue)
        this.setState({cartValue,cart})
    }

    deleteItem=(i)=>{
        console.log(i)
        let cart = this.state.cart
        cart.splice(i,1)
        console.log("deleted cart=",cart)
        localStorage.setItem('cart',JSON.stringify(cart))
        this.setState({cart:cart,cartValue:cart.length})
    }

  render() {
    return (
        <Layout page_title="Cart" cart_no={this.state.cartValue} >
        <Container style={{marginTop:'30px'}}>
          
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Product Image</th>
            <th>Price</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
            {this.state.cart && this.state.cart.map((c,index)=>(
                <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{c.name}</td>
                <td><img src={c.image} style={{width:'80px'}} /></td>
                <td style={{color:'goldenrod'}}><span style={{color:'red'}}>INR: </span>{c.price}</td>
                <td>1</td>
                <td><Button color="danger" onClick={()=>this.deleteItem(index)}>Delete</Button></td>
                
                
              </tr>))}
          
        </tbody>
      </Table>
     
      </Container>
      </Layout>
    );
  }
}


// Cart.getInitialProps = async function() {
//     const res = await fetch('http://localhost:3000/api/products')
//     const data = await res.json()
   
   
//    console.log(data.products)
  
//     return {
//       products: data.products
//     }
//   }