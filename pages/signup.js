import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import { Button,Alert, Form, FormGroup, Label, Input, FormText,Container,Row,Col } from 'reactstrap';

import fetch from 'isomorphic-unfetch'
import Router from 'next/router'
const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)



export default class Signup extends React.Component{
    state={
        email:'',
        password:'',
        username:'',
        name:'',
        submitted:false
    }
    handleSubmit =async(e) =>{
        e.preventDefault()
        this.setState({submitted:true})
        if(this.state.email!='' && this.state.name !='' && this.state.username!='' && this.state.password!=''){
            let request =JSON.stringify({name:this.state.name,username:this.state.username,email:this.state.email,password:this.state.password})
           console.log("request=",request)
            let response =await fetch('http://localhost:3000/users/register',{
                
                method:'POST',
                body:request,
                headers:{
                    "Content-Type": "application/json"
                }
            })
            response = await response.json()
            if(response.success){
                console.log("hello")
                Router.replace('/about')
            }
            console.log("response=",response)
            this.setState({submitted:false})
        }else{
            alert('Please check and fill all fields')
            
        }
      
    }

    renderAlert=()=>(
        <Alert >
        Your email is {this.state.email} and password is {this.state.password}
      </Alert>
    )

    render(){
        return (
  
            <Layout>
                  <Container>
                  {this.state.submitted && this.renderAlert()}
                  <Row >
                    
                      <Col  md={{ size: 6, offset: 3 }}>
                  <Form onSubmit={(e)=>this.handleSubmit(e)}>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Enter your name" 
                    onChange={(e)=>this.setState({name:e.target.value})}
                    value={this.state.name}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="username" 
                    name="username" 
                    id="username" 
                    placeholder="Enter Username" 
                    onChange={(e)=>this.setState({username:e.target.value})}
                    value={this.state.username}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" 
                    name="email" 
                    id="email" 
                    placeholder="enter email address" 
                    onChange={(e)=>this.setState({email:e.target.value})}
                    value={this.state.email}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" 
                    name="password" 
                    id="password" 
                    placeholder="enter password"
                    onChange={(e)=>this.setState({password:e.target.value})}
                    value={this.state.password}
                    />
                  </FormGroup>
                 
                  <Button color="primary" block>Sign Up</Button>
                </Form>
                </Col>
                </Row>
                </Container>
            </Layout>
           
          )
    }
} 

Signup.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
  
    console.log(`Show data fetched. Count: ${data.length}`)
  
    return {
      shows: data
    }
  }
  