import React, { Component } from 'react'
import { connect } from 'react-redux'
class HomePage extends Component {
  componentDidMount() {
    this.props.getCat()
  }

  render() {
    return (
      <div>
        <p>Cat Apps</p>
        <img src={this.props.cats} />
      </div>
    )
  }
}

const mapState = state => ({
  cats: state.catModel.cat,
})

const mapDispatch = dispatch => ({
  getCat: () => dispatch.catModel.getCat(),
})

export default connect(
  mapState,
  mapDispatch
)(HomePage)
