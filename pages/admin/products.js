import Layout from '../../components/MyLayout.js'
import Link from 'next/link'
import ImageModal from '../../components/ImageModal'
import fetch from 'isomorphic-unfetch'
import SideBar from '../../components/Sidebar'
import {  ListGroup, ListGroupItem ,Button,Alert, Form, FormGroup, Label, Input, FormText,Container,Row,Col,Table } from 'reactstrap';
import ProductCard from '../../components/ProductCard'
const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)



export default class Products extends React.Component{
    state={
        email:'',
        password:'',
        submitted:false,
        cartValue:0,
        activeLink:'categories',
        isOpen:false,
        currentProduct:null
    }
    handleSubmit = (e) =>{
        e.preventDefault()
       this.setState({submitted:true})
       alert(`${this.state.email},${this.state.password}`)
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

    toggle=(product)=>{
        this.setState({isOpen:!this.state.isOpen,currentProduct:product})
    }

    render(){
        let listClasses = ['list-item'];
        let listClassesActive = ['list-item' ,'active']
        return (
           
            <Layout isAdmin={true} page_title="Nextify" cart_no={this.state.cartValue} >
                  <div >
                    
                          <Row>
                              
                              <Col md={{size:3}}>
                              <SideBar  active={listClassesActive} inactive={listClasses}  activeLink={'products'} />
                              </Col>
                              <Col >
                              <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Name</th>
            <th>Category Image</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.products && this.props.products.map((product,index)=>(<tr>
            <th scope="row">{index+1}</th>
            <td>{product.name}</td>
            <td><img onClick={()=>this.toggle(product)} style={{width:'50px'}} src={product.image}/></td>
            <td><Button color="dark">
                Edit
            </Button></td>

              <td><Button color="danger">
                Delete
            </Button></td>
          </tr>))}
         
        </tbody>
      </Table>
      <ImageModal isOpen={this.state.isOpen} toggle={()=>this.toggle()} product={this.state.currentProduct}/>
                              </Col>
                             
                              
                          </Row>
                     
                  </div>
                  <style jsx>
                    {`
                        .sidebar-container{
                            
                            background:#8e44ad;
                            padding:10px;
                            height:100vh;
                            width:250px;
                          color:#fff
                          font-family: 'Lato', sans-serif;
                           position:fixed
                        },

                        #list-container{
                            list-style-type:none
                        },

                        .list-item{
                            padding:5px;
                            color:#aaa;
                            cursor:pointer
                        },

                        .list-item:active{
                            color:#fff
                        },
                        .list-item:hover{
                            color:#fff
                        },

                        .list-active{
                            color:#fff
                        },

                        th{
                            color:#444
                        },
                        .active{
                            font-weight:700
                        }



                    `}
                  </style>
            </Layout>
           
          )
    }
} 

Products.getInitialProps = async function() {
    const res = await fetch('http://localhost:3000/api/products')
    const data = await res.json()
   
   
   console.log(data.products)
  
    return {
      products: data.products
    }
  }