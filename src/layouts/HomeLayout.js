import React, { PropTypes } from 'react'
import Link from 'react-router/lib/link'
import SideBarView from '../views/sideBar'
function HomeLayout ({ children }) {
  return (
    <div className='home'>
        <div>
					    <div className='navbar'>
								   <div className='navbar-inner'>
								   	  <div className='container'>
								   	  	<a className='brand' href='#'>
								   	  	  <img src='//o4j806krb.qnssl.com/public/images/cnodejs_light.svg'/>
								   	  	</a>
								   	  	<ul>
								   	  	   <li><Link to={'/'}>首页</Link></li>
									   	   <li><Link to={'/regsin/'} >注册</Link></li>  		
								   	  	   <li><a>登录</a></li>
								   	  	   <li><a>123</a></li>
								   	  	</ul>
								   	  </div>
								 		</div>
								</div>
				  </div>
				 <div className="container">
					 <div className="col-md-8">{children}</div>
	         <div className="col-md-4">
	         		<SideBarView /> 
				   </div>  
         </div>
    </div>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.element
}

export default HomeLayout
