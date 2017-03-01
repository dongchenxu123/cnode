import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as loadUserDetailItem } from '../redux/index/indexAction'
import Link from 'react-router/lib/link'
import CreateTopic from './topic/createTopic'
import JoinTopic from './topic/joinTopic'
const mapStateToProps = (state) => ({
	UsersDetail: state.indexItem.userdetail
})
export class UserDetail extends React.Component {
	componentWillMount (){
		const itName = this.props.params.name
		this.props.loadUserDetailItem(itName)
		
	}
  	render() {
		var UserDate= this.props.UsersDetail.data
		return (
			<div className="">
			    <nav>
				  <div className="">
					    <div className='panel panel-default'>
					      <div className='panel-heading'>
							首页/
						   </div>
					      <div className='panel-body'>
							<div style={{marginBottom: 20}}> 
								 <Link to={'/user/'+UserDate.loginname}>
								 	<img src={UserDate.avatar_url} style={{width: 30, height: 30}}/>
								 </Link>
								 <span style={{paddingLeft: '15px'}}>{UserDate.githubUsername}</span>
							</div>
							<p>
								{UserDate.score}积分
							</p>
						   </div>
						</div>
						<div className="panel panel-default">
					   	 <div className="panel-body">
					   	 	<CreateTopic 								recent_topics={UserDate.recent_topics}							
/>
					   	 </div>
					   </div>
					   <div className="panel panel-default">
					   	 <div className="panel-body">
					   	 	<JoinTopic 								recent_replies={UserDate.recent_replies}
/>
					   	 	</div>
					   </div>
				  </div>
				</nav>
			</div>
		)
	}
}
export default connect(mapStateToProps,loadUserDetailItem)(UserDetail)
