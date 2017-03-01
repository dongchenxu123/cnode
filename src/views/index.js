import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { actions as loadTopicItem } from '../redux/index/indexAction'

import TabContentView from './tabContent'
import ListContentView from './listContent'
const mapStateToProps = (state) => ({
	IndexListItem: state.indexItem.topicdata
})

import MenuView from './menu'
class TabView extends React.Component {
	constructor(){
		super()
		this.state = {
			tab: ''
		}
	}
	componentDidMount () {
		this.loadData()
	}
	loadData(tab=null) {
		this.props.loadTopicItem({tab: tab})
	}
	menuChange(tab) {
		this.loadData(tab)
	}	
	
	render() {
		const listItem = this.props.IndexListItem
		return (
			
				<div className='main-content'>
				   <div className='panel panel-default'>
				      <div className='panel-body'>
						<MenuView onChange={this.menuChange.bind(this)}/>
						<TabContentView data={listItem.data} />
						
					   </div>
					</div>
				</div>
			   
		)
	}
}

export default connect(mapStateToProps, loadTopicItem)(TabView)