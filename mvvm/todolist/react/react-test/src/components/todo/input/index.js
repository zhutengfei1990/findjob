import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }
  render() {
    return (
      <div>
        <input value = { this.state.title } onChange={this.changeHandle.bind(this)}/>
        <button onClick={ this.clickHandle.bind(this) }>Submit</button>
      </div>
    )
  }
  changeHandle(e) {
    this.setState({
      title: e.target.value
    })
  }
  clickHandle(e) {
    const title = this.state.title

    // 把title添加进列表
    const addTitle = this.props.addTitle
    addTitle(title)

    this.setState({
      title: ''
    })
  }
}

export default Input