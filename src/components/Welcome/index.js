// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribed = () =>{
      this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }
  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }


    render(){
        const text = this.getButtonText()
        return(
            <div className = "welcome-container">
                <h1 className="heading">Welcome</h1>
                <p className="description">Thank you! Happy learning</p>
                <button type="button" className="button" onClick={this.onSubscribed}>
                    {text}
                </button>
           
            </div>
        )
    }
}
}

export default Welcome


