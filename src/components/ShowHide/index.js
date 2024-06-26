import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {firstname: false, lastname: false}

  displayname = name => {
    return (
      <div className="name-container">
        <p className="name">{name}</p>
      </div>
    )
  }

  changeFirstname = () => {
    this.setState(prev => ({firstname: !prev.firstname}))
  }

  changeLastname = () => {
    this.setState(prev => ({lastname: !prev.lastname}))
  }

  render() {
    const {firstname, lastname} = this.state
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="btns-container">
          <div className="btn-container">
            <button className="button" onClick={this.changeFirstname}>
              Show/Hide Firstname
            </button>
            {firstname && this.displayname('Joe')}
          </div>
          <div className="btn-container">
            <button className="button" onClick={this.changeLastname}>
              Show/Hide Lastname
            </button>
            {lastname && this.displayname('Jonas')}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
