import React from 'react'
import { Table } from 'react-bootstrap'

var req_url = 'https://140.112.29.193:5000/api/music';

var titles = [];

class Music extends React.Component { 
  
  constructor(props) {
    super(props);
    this.state = {};

    fetch(req_url, {method: 'get'})
    .then(response => {
      if (!response.ok) throw new Error(response.statusText)
      return response.json()
    })  
    .then(data => {
      for(var i = 1 ; i <= data.alld.length ; ++i)
        titles[i-1] = (<tr><td align='center'>{i}</td><td>{data.alld[i-1]}</td><td>{data.chd[i-1]}</td><td>{data.wed[i-1]}</td></tr>);
      this.setState({titles: titles})
    });
  }

  render() {
    return (
    <div align="left" valign="middle">
      <Table hover striped>
        <thead>
          <tr>
            <th width='3%' align='center'>Rank</th>
            <th width='25%'>綜合日榜</th>
            <th width='25%'>華語日榜</th>
            <th width='25%'>外語日榜</th>
          </tr>
        </thead>
        <tbody>
          {this.state.titles}
        </tbody>
      </Table>  
    </div>);
  }
  
}

export default Music