import React from 'react'
import { Grid, Button } from 'react-bootstrap'
import BeautyImgContainer from './BeautyImgContainer';

const getHome = 'https://crawlerserver.herokuapp.com/api/beauty/home';
const reqUrl = 'https://crawlerserver.herokuapp.com/api/beauty?page=';

class Beauty extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      now: '0',
      bt: 'loading',
      data: [],
      flag: [],
      show: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.changeContent = this.changeContent.bind(this);
    this.nextPage = this.nextPage.bind(this);

    fetch(getHome, { method: 'get' })
    .then(response => { return response.json() })  
    .then(data => {
      this.setState({now: data.home}); 
      this.changeContent(data.home);     
    });
  }

  changeContent(page) {
    fetch(reqUrl + page, { method: 'get' })
    .then(res => {return res.json();})
    .then(data => {
      if(data !== undefined && data.length > 0) {
        var tmp = [];
        for(let i = 0 ; i < data.length ; ++i)
          tmp[tmp.length]=0;
        this.setState({ 
          flag: [...this.state.flag, ...tmp],
          data: [...this.state.data, ...data] });
        var show = [];
        for(let i = 0 ; i < data.length ; ++i)
          show[show.length] = (<BeautyImgContainer data={data[i]} flag={0}/>);

        this.setState({ show: [...this.state.show, ...show] });
        this.setState({ bt: 'more' });
      }
    });
  }

  handleClick(e) {
    clearInterval(this._timer);

    var now = this.nextPage(this.state.now);

    this.setState({
      now: now,
      bt: 'loading...'
    });
    this.changeContent(now);
    this.componentDidMount();
  }

  nextPage(page) {
    let tmp = parseInt(page, 10);
    tmp--;
    return tmp.toString();
  }

  render() {
    return(<div>
      <Grid fluid={true}>{this.state.show}</Grid>
      <Button bsStyle="default" bsSize="large" onClick={this.handleClick}>{this.state.bt}</Button>
    </div>);
  }

  componentDidMount() {
    this._timer = setInterval(function() {
      var newF = this.state.flag;
      for(let i = 0 ; i < newF.length ; ++i) 
        newF[i] = (++newF[i] === this.state.data[i].children.length) ? 0 : newF[i]

      this.setState({ flag: newF });
      var show = [];
      for(let i = 0 ; i < newF.length ; ++i)
        show[show.length] = (<BeautyImgContainer data={this.state.data[i]} flag={newF[i]}/>)
      
      this.setState({ show: show });
    }.bind(this), 5000);
  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }
}

export default Beauty