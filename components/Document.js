import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {Table, Glyphicon} from 'react-bootstrap'

export default class Document extends Component {
  constructor(props) {
    super(props);
    this.state = {
      document: null
    };
  }

  componentDidMount() {
    axios.get('localhost:3000/document').then(res => {
      this.setState({document: res.data})
    })
  }

  render() {
    return (<div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>

      <h3>Translation workbench</h3>
      {
        Boolean(this.state.document)
          ? <Table striped bordered>
              <tbody>
                {
                  this.state.document.map((unit, i) => (<tr key={i}>
                    <td key={1}>{unit[0]}</td>
                    <td key={2}>
                      <textarea id={i + 1} defaultValue={unit[1]}></textarea>
                    </td>
                  </tr>))
                }
              </tbody>
            </Table>
          : <h3><Glyphicon glyph="alert"/>
              No data available. That XHR better be on its way.</h3>
      }
    </div>)
  }
}
