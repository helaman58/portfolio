import React from 'react';
import SocialMediaFooter from './SocialMediaFooter';

class Footer extends React.Component {
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
        return (
            <footer class="site-footer has-top-divider">
            <div class="container">
                <div class="site-footer-inner">
                    <div class="brand footer-brand">
                        <a href="#">
                          <img class="asset-light" src={this.state.logoLighUrl} alt={this.state.logo} />
                          <img class="asset-dark" src={this.state.logoDarkUrl} alt={this.state.logo} />
                        </a>
                    </div>
                    <ul class="footer-links list-reset">
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">FAQ's</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                    </ul>
                    <SocialMediaFooter />
                    <div class="footer-copyright">&copy; 2018 Switch, all rights reserved</div>
                </div>
            </div>
          </footer>
        );
    }

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

export default Footer;