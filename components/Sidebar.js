import Link from 'next/link'
export default (props)=>(
    <div className="sidebar-container">
                                    <ul id="list-container">
                                        <Link href="/admin/categories" >
                                        <li className={props.activeLink=='categories'?props.active:props.inactive} style={{borderBottom:'1px solid #fff'}}>{'Categories'.toUpperCase()}</li>
                                        </Link>
                                        <Link href="/admin/products" >
                                        <li className={props.activeLink=='products'?props.active:props.inactive} style={{borderBottom:'1px solid #fff'}}>{'Products'.toUpperCase()}</li>
                                        </Link>
                                        <Link href="/admin/sliders" >
                                        <li className={props.activeLink=='sliders'?props.active:props.inactive} style={{borderBottom:'1px solid #fff'}}>{'Sliders'.toUpperCase()}</li>
                                        </Link>
                                        <li className="list-item" style={{borderBottom:'1px solid #fff'}}>{'Settings'.toUpperCase()}</li>
                                    </ul>
                                    <style jsx>
                    {`
                        .sidebar-container{
                            
                            background:#8e44ad;
                            padding:10px;
                            height:100vh;
                            width:250px;
                          color:#fff;
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
                        }



                    `}
                  </style>
     </div>
)