import React from 'react'
import Link from 'react-router/lib/link'
export class JoinTopic extends React.Component {
	render() {
		  var recent_replies= this.props.recent_replies
		return (
			<div>
			    <h5 style={{paddingBottom: 15}}>最近参与的话题</h5>
			    <div>
			    	{
			    		recent_replies === undefined ? <div>Loading</div> : recent_replies.map((item, indx) => {
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
export default JoinTopic
