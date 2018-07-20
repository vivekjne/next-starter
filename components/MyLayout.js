import Header from './Header'


const Layout = (props) => (
  <div>
    <Header isAdmin={props.isAdmin} title={props.page_title} cart_no={props.cart_no}/>
    {props.children}
  </div>
)

export default Layout