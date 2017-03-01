import React from 'react'
import Link from 'react-router/lib/link'
export class CreateTopic extends React.Component {
	render () {
		var recent_topics= this.props.recent_topics;
		return (
			<div>
			    <h5 style={{paddingBottom: 15}}>最近创建的话题</h5>
		      	<div>
			    	{
			    		recent_topics === undefined ? <p>loading</p> : recent_topics.map((item, index) =>{
			    		return (
			    			<p key={item.id}>
			    				<Link to={'/user/'+item.author.loginname}><img src={item.author.avatar_url} style={{width: '30px', height: '30px'}}/></Link>
			    				<span style={{paddingLeft: 15}}>{item.title}</span>
			    			</p>
			    		)
			    		})
			    	}
			    </div>
			</div>
		)
	}
}

export default CreateTopic