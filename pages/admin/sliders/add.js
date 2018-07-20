import Layout from '../../../components/MyLayout.js'
import Link from 'next/link'

import fetch from 'isomorphic-unfetch'
import SideBar from '../../../components/Sidebar'
import {  ListGroup, ListGroupItem ,Button,Alert, Form, FormGroup, Label, Input, FormText,Container,Row,Col,Table } from 'reactstrap';


const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)



export default class AddSliders extends React.Component{
    state={
        email:'',
        password:'',
        submitted:false,
        cartValue:0,
        activeLink:'categories',
        image:'http://via.placeholder.com/350x150',
        currentFile:null
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

    handleImage=(e)=>{
        let file = e.target.files[0]
        console.log(file)
        var reader = new FileReader();
        reader.onload = ((theFile)=>{
            return (e) =>{
                console.log(e.target.result)
             this.setState({image:e.target.result,currentFile:file})
            };
          })(file);
          reader.readAsDataURL(file);
          // Read in the image file as a data URL.
        
    }
    submit=(e)=>{
        e.preventDefault();
      
        
         var form = new FormData();
        form.append('name',e.target.name.value);
        form.append('image',e.target.cat_image.files[0],e.target.cat_image.files[0].name);
        for (var pair of form.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
      fetch('http://localhost:3000/api/sliders/add',{
          method:'POST',
          body:form,
        
      }).then(res=>res.json().then(res=>console.log(res))
    )
    }

    render(){
        let listClasses = ['list-item'];
        let listClassesActive = ['list-item' ,'active']
        return (
           
            <Layout isAdmin={true} page_title="Nextify" cart_no={this.state.cartValue} >
                  <div >
                  
                          <Row>
                              
                              <Col md={{size:3}}>
                              <SideBar active={listClassesActive} inactive={listClasses} activeLink={'sliders'} />
                              </Col>
                              <Col >
                             
                                <div className="sliderFormContainer" style={{display:'flex',flex:1,alignItems:'center',justifyContent:'center'}}>
                                    <form onSubmit={(e)=>{this.submit(e)}}>
                                        <div>
                                            <input type="text" name="name" placeholder="Enter Slider Name" value={this.state.name}/>
                                        </div>
                                        <div>
                                            <img src={this.state.image} alt="slider image" style={{maxHeight:'150px'}}/>
                                        </div>
                                        <div>
                                            <input name="cat_image" type="file" onChange={(e)=>this.handleImage(e)}/>
                                        </div>
                                        <input type="submit" value="Submit"/>
                                    </form>
                                </div>
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
                            color:#bbb;
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

// Admin.getInitialProps = async function() {
// //     const res = await fetch('http://localhost:3000/api/products')
// //     const data = await res.json()
   
   
// //    console.log(data.products)
  
// //     return {
// //       products: data.products
// //     }
//   }