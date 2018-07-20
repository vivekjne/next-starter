import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import { Button,Alert, Form, FormGroup, Label, Input, FormText,Container,Row,Col } from 'reactstrap';

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)



export default class Login extends React.Component{
    state={
        email:'',
        password:'',
        submitted:false
    }
    handleSubmit = (e) =>{
        e.preventDefault()
       this.setState({submitted:true})
       alert(`${this.state.email},${this.state.password}`)
    }

    renderAlert=()=>(
        <Alert >
        Your email is {this.state.email} and password is {this.state.password}
      </Alert>
    )

    render(){
        return (
  
            <Layout page_title="Nextify">
                  <Container>
                  {this.state.submitted && this.renderAlert()}
                  <Row >
                    
                      <Col  md={{ size: 6, offset: 3 }}>
                  <Form onSubmit={(e)=>this.handleSubmit(e)}>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Enter your email" 
                    onChange={(e)=>this.setState({email:e.target.value})}
                    value={this.state.email}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Enter your password"
                    onChange={(e)=>this.setState({password:e.target.value})}
                    value={this.state.password}
                    />
                  </FormGroup>
                 
                  <Button color="primary" block>Submit</Button>
                </Form>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <p style={{textAlign:'center',marginTop:'15px'}}>Don't have an account?</p>
                <Link href="/signup">
                
              <a  style={{textAlign:'center'}}> Signup here</a>
                </Link>
                </div>
                </Col>
                </Row>
                
                </Container>
            </Layout>
           
          )
    }
} 