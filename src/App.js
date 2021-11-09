import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavbarHeader1 from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import {Routes,Route,BrowserRouter,Switch} from "react-router-dom"
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'
import SchoolLive from './Components/MaktabHayoti/SchoolLive'
import Contact from './Components/Contact/Contact'
import Darsliklar from './Components/Darsliklar/Darsliklar'

<<<<<<< HEAD
function App() {
  return (
    <div>
    </div>
  )
}
=======
export default class App extends Component {

  render() {
    return (
      <div>
        <Switch>
                  <Route exact path="/">
                        <NavbarHeader1/>
                        <Content/>
                        <Contact/>
                        <Darsliklar/>
                        <Footer/>
                  </Route>
                  <Route exact path="/maktab-hayoti">
                    <NavbarHeader1/>
                    <SchoolLive/>
                    <Footer/>
                  </Route>
          </Switch>
>>>>>>> d1e9418918f2c13cdb1f3d1ccc6697a68a57ad14

      </div>
    )
  }
}
