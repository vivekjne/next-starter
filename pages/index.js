import Layout from '../components/MyLayout.js'
import Link from 'next/link'

import fetch from 'isomorphic-unfetch'
import { Button,Alert, Form, FormGroup, Label, Input, FormText,Container,Row,Col } from 'reactstrap';
import ProductCard from '../components/ProductCard'
import Slider from '../components/Slider'
const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)



export default class Index extends React.Component{
    state={
        email:'',
        password:'',
        submitted:false,
        cartValue:0
    }
    handleSubmit = (e) =>{
        e.preventDefault()
       this.setState({submitted:true})
       alert(`${this.state.email},${this.state.password}`)
    }

    componentDidMount=async()=>{
        let cartValue = await localStorage.getItem('cart')
        if(cartValue){
            cartValue = await JSON.parse(cartValue)
            cartValue = cartValue.length
        }else{
            cartValue = 0
        }
        console.log(cartValue)
        this.setState({cartValue})
    }

    addToCart=async(product)=>{
        let cart  = await JSON.parse(localStorage.getItem('cart'))
        let cartValue = 0
        if(cart){
            cartValue = cart.length
        }else{
            cart = []
        }
        cart.push(product)
        console.log(cartValue)
        localStorage.setItem('cart',JSON.stringify(cart))
        this.setState({cartValue:Number(cartValue)+1})
       
    }

    renderAlert=()=>(
        <Alert >
        Your email is {this.state.email} and password is {this.state.password}
      </Alert>
    )

    render(){
        return (
  
            <Layout page_title="Nextify" cart_no={this.state.cartValue} >
                  <div >
                  <Slider />
                      <Container>
                        
                          <Row  style={{marginTop:'30px'}}>
                              {this.props.products.map((product,index)=>{
                                  return( <Col key={index} md={{size:4}}>
                                   <ProductCard product={product} addToCart={()=>this.addToCart(product)}/>
                                 </Col>)
                               
                              })}
                             
                              
                          </Row>
                      </Container>
                  </div>
            </Layout>
           
          )
    }
} 

Index.getInitialProps = async function() {
    const res = await fetch('http://localhost:3000/api/products')
    const data = await res.json()
   
   
   console.log(data.products)
  
    return {
      products: data.products
    }
  }