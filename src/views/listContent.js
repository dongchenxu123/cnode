import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as loadTopicDetailItem } from '../redux/index/indexAction'
const mapStateToProps = (state) => ({
	IndexListContent: state.indexItem.topicdetail
})
export class ListContentView extends React.Component {
	componentWillMount (){
		const itId = this.props.params.id
		this.props.loadTopicDetailItem(itId)
	}
	render() {
		const DetailContent = this.props.IndexListContent.data
		return (
			<div className='container'>
			<div className='col-md-8'>{DetailContent.content}</div>
		    </div>
		)
	}
}

export default connect(mapStateToProps,loadTopicDetailItem)(ListContentView)
