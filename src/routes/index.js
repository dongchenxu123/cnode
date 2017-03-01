import React from 'react'
import Route from 'react-router/lib/Route'
import IndexRoute from 'react-router/lib/IndexRoute'
import Redirect from 'react-router/lib/Redirect'
import { GetTopics } from '../help/url'
import HomeView from '../views/cnode'
import HomeLayout from '../layouts/HomeLayout'
import ListContent from '../views/listContent'
import UserDetail from '../views/user'
import RegsinView from '../views/regsin'
import { Router,useRouterHistory } from 'react-router'
import createHashHistory from 'history/lib/createHashHistory'
const history = useRouterHistory(createHashHistory)({ queryKey: false })
export default function () {
	return (
		 <Router history={history}>
        <Route  component={HomeLayout}>
          <Route path="/" component={HomeView}/>
          <Route path="/topick/:id" component={ListContent}/>
          <Route path="/user/:name" component={UserDetail}/>
          <Route path="/regsin" component={RegsinView}/>
        </Route>
        
       

  </Router>
	)
}
