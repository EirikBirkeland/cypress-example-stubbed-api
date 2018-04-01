import React, {Component} from 'react'
import axios from 'axios'
import {Table, Glyphicon} from 'react-bootstrap'
import './lib/Document.css'

import BootstrapCss from './lib/BootstrapCss'

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
    return (
    <div>
      <BootstrapCss/>

      <h3>Translation workbench</h3>

      {
        Boolean(this.state.document)
          ? <Table striped bordered>
              <tbody>
                {
                  this.state.document.map((unit, i) => (<tr key={i}>
                    <td width="50%" key={1}>{unit[0]}</td>
                    <td width="50%" key={2}>
                      <div contentEditable className="editor" id={i + 1} defaultValue={unit[1]}></div>
                    </td>
                  </tr>))
                }
              </tbody>
            </Table>
          : <h3><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"/>
              &nbsp;No data available (yet)
            </h3>
      }
    </div>)
  }
}
