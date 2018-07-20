import Link from 'next/link'
import Head from 'next/head'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
const linkStyle = {
  marginRight: 15
}

export default class Header extends React.Component{
    state={
        isOpen:false
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render(){
        return (
            <div id="mainContainer">
                   <Head>
              <title>{this.props.title}</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossOrigin="anonymous"/>
              <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet" /> 
            
            </Head>
        
               <div>
                {!this.props.isAdmin && <Navbar color="dark" dark expand="md">
                  <NavbarBrand href="/">NextShop</NavbarBrand>
                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                      <NavItem>
                          <Link href="/signin">
                        <NavLink style={{cursor:'pointer'}}>Login</NavLink>
                        </Link>
                      </NavItem>
                      <NavItem>
                      <Link href="/signup">
                        <NavLink style={{cursor:'pointer'}}>Signup</NavLink>
                        </Link >
                      </NavItem>
                      <NavItem>
                      {!this.props.isAdmin &&<Link href="/cart">
                        <NavLink style={{cursor:'pointer',position:'relative'}}>
                            <img src="https://www.shareicon.net/data/512x512/2016/02/07/281223_cart_512x512.png"
                            style={{width:'40px'}}
                            />
                            <div id="cart_count" style={{position:'absolute',textAlign:'center',height:'25px',width:'25px',right:'-2px',top:'0px',background:'red',borderRadius:'50%'}}>
                                <span style={{color:'#fff',textAlign:'center',fontSize:'12px'}}>{this.props.cart_no}</span>
                            </div>
                        </NavLink>
                        </Link >}
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>}
              </div>
              <style jsx>
              {`
              *{
                margin:0;
                box-sizing:border-box
              },
                #cart_count{
                    transition:2s
                },
                #mainContainer{
                  font-family: 'Lato', sans-serif;
                  margin:0;
                  padding:0;
                }

                
              `}
              </style>
            </div>
        )
        
    }
} 
