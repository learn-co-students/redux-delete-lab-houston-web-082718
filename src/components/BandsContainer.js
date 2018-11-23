import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <h3>Add Band</h3>
        <BandInput addBand={this.props.addBand}/>
        <hr/>
        <h3>Bands</h3>
        <ul>
        {
          this.props.bands.map(band => {
            return <Band key={band.id} band={band} onClickDelete={this.props.deleteBand}/>
          })
        }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({ type: "DELETE_BAND", id })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
