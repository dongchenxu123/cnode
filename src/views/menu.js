
import React, {PropTypes} from 'react'

const menudata = [
	{
		id: 1,
		text: '全部',
		tab: ''
	},{
		id: 2,
		text: '精华',
		tab: 'good'
	},{
		id: 3,
		text: '分享',
		tab: 'share'
	},{
		id: 4,
		text: '问答',
		tab: 'ask'
	},{
		id: 5,
		text: '招聘',
		tab: 'job'
	}
]
export class TabView extends React.Component {
	constructor () {
		super()
		this.state={
			currentIndex: 0
		}
	}
	menuItemClick (menuitem, index) {
		this.props.onChange(menuitem.tab)
		this.setState({
			currentIndex: index
		})
	}
	checkClassName(index){
        return index === this.state.currentIndex ? "active" : "";
    }
	render() {
		return (
			<ul className='nav nav-pills' style={{marginBottom: 10}}>
				{
					menudata.map((item, index) => {
						return (
							<li 
							role='presentation'
							key={item.id}
							onClick={() => {this.menuItemClick(item, index)}} className={this.checkClassName(index)}>
							<a href="#">
							{item.text}
							</a> 
							</li>
						)
					})
				}
			</ul>
		)
	}
}
export default TabView