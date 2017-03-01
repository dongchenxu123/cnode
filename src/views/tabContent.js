import React, { PropTypes } from 'react'
import Tooltip from 'antd/lib/tag'
import Link from 'react-router/lib/link'
export class TabContent extends React.Component {
	
	render () {
		const listItems= this.props.data
		return (
			<ul className='list-group'>
			   {
			   	listItems.map((ele,index) => {
			   		return (
			   	<li className='list-group-item' key={ele.id} style={{overflow: 'hidden'}}>
			   	    <Tooltip placement="bottomRight" title={ele.author.loginname} style={{float: 'left'}}>
						       <Link to={'/user/'+ele.author.loginname}><img src={ele.author.avatar_url} style={{width: 30, height: 30}}/></Link>
			      	</Tooltip>
			   		<Link className="list-group-item"
					   			to={'/topick/'+ele.id}
					   			className='' style={{color: '#666', float: 'left'}}>
			   		           
			   		          <span className='count'>{ele.reply_count}/{ele.visit_count}</span>
			   		          <span>{ele.title}</span>
			   		          
	   		        </Link>
   		         	
		   		  </li>
			   		)
			   	})
			   }
			</ul>
		)
	}
}

export default TabContent
