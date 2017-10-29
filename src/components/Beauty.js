import React from 'react'
import { Grid, Button } from 'react-bootstrap'
import BeautyImgContainer from './BeautyImgContainer'

const getHome = 'http://140.112.29.193:5000/api/beauty/home';
const reqUrl = 'http://140.112.29.193:5000/api/beauty/?page=';
const loadingClass = 'wrap-loading loading loading-4';

class Beauty extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      now: '0',
      bt: 'Hid',
      data: [],
      flag: [],
      show: [],
      loading: loadingClass
    };

    this.handleClick = this.handleClick.bind(this);
    //this.handleScroll = this.handleScroll.bind(this);
    this.changeContent = this.changeContent.bind(this);
    this.nextPage = this.nextPage.bind(this);

    fetch(getHome, { method: 'get' })
    .then(response => { return response.json() })  
    .then(data => {     
      this.setState({ now: data.home }); 
      this.changeContent(data.home);     
    });
  }

  changeContent(page) {
    fetch(reqUrl + page, { method: 'get' })
    .then(res => { return res.json(); })
    .then(data => {
      if(data !== undefined && data.length > 0) {
        var flag = [];
        var show = [];
        for(let i = 0 ; i < data.length ; ++i) {
          show[show.length] = (<BeautyImgContainer data={ data[i] } flag={ 0 }/>);
          flag[flag.length] = 0;
        }
        this.setState({ 
          now: page,
          loading: '',
          bt: 'Vis',
          show: [...this.state.show, ...show],
          flag: [...this.state.flag, ...flag],
          data: [...this.state.data, ...data]
        });
      }
      if(data.length < 5) {
        let now = this.nextPage(this.state.now);
        this.setState({
          bt: 'Hid',
          loading: loadingClass
        });
        this.changeContent(now);
      }
    });
  }

  handleClick(e) {
    clearInterval(this._timer);

    var now = this.nextPage(this.state.now);

    this.setState({
      bt: 'Hid',
      loading: loadingClass
    });
    this.changeContent(now);
    this.componentDidMount();
  }

  handleScroll() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      console.log('87');
    }
  }

  nextPage(page) {
    let tmp = parseInt(page, 10);
    tmp--;
    return tmp.toString();
  }

  render() {
    return(<div>
      <Grid fluid={true}>{this.state.show}</Grid>
      <div className={this.state.bt}>
        <Button bsStyle="default" bsSize="large" onClick={this.handleClick}>More</Button>
      </div>
      <div className={this.state.loading}></div>
    </div>);
  }

  componentDidMount() {
    //window.addEventListener("scroll", this.handleScroll);
    this._timer = setInterval(function() {
      var newF = this.state.flag;      
      var show = [];

      for(let i = 0 ; i < newF.length ; ++i) {
        newF[i] = (++newF[i] === this.state.data[i].children.length) ? 0 : newF[i];
        show[show.length] = (<BeautyImgContainer data={ this.state.data[i] } flag={newF[i]}/>);
      }

      this.setState({ 
        show: show,
        flag: newF 
      });
    }.bind(this), 4000);
  }

  componentWillUnmount() { 
    //window.removeEventListener("scroll", this.handleScroll);
    clearInterval(this._timer); 
  }
}

export default Beauty