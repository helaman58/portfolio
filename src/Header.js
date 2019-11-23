import React from 'react';

class Header extends React.Component {
  constructor(props){
    console.log('constructor');
    super(props);
    this.state = { 
      logoLighUrl : "",
      logoDarkUrl : "",
      logo : "",
      getHeaderUrl : "https://private-24a9c-vehiclersapi.apiary-mock.com/header"
    };
  }

  render(){
    console.log('render');
    return (
      <header class="site-header">
      <div class="container">
        <div class="site-header-inner">
          <div class="brand header-brand">
            <h1 class="m-0">
              <a href="#">
                <img class="header-logo-image asset-light" src={this.state.logoLighUrl} alt={this.state.logo} />
                <img class="header-logo-image asset-dark" src={this.state.logoDarkUrl} alt={this.state.logo} />
              </a>
            </h1>
          </div>
        </div>
      </div>
    </header>
    )
  };

  componentDidMount(){
    console.log('componentDidMount');
    fetch(this.state.getHeaderUrl)
      .then(res => res.json())
      .then((data) => {
        this.setState({ 
          logoLighUrl : data[0].logoLighUrl,
          logoDarkUrl : data[0].logoDarkUrl,
          logo : data[0].logo
         });
      })
      .catch(console.log)
  }
}

export default Header;