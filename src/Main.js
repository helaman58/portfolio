import React from 'react';
import DiscoverOne from './DiscoverFeatureOneComponent.js';

class Main extends React.Component {

  render () {
    return (
      <main>
      <section class="hero">
        <div class="container">
          <div class="hero-inner">
            <div class="hero-copy">
              <h1 class="hero-title mt-0">Nicolas Caballero y Asociados SAS</h1>
              <p class="hero-paragraph">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
              <div class="hero-cta">
                <a class="button button-primary" href="#">Buy it now</a>
                {
                  /*
                  <div class="lights-toggle">
                    <input id="lights-toggle" type="checkbox" name="lights-toggle" class="switch" defaultChecked="true" />
                    <label htmlFor="lights-toggle" class="text-xs"><span>Turn me <span class="label-text">dark</span></span></label>
                  </div>
                  */
                }
              </div>
            </div>
            <div class="hero-media">
              <div class="header-illustration">
                <img class="header-illustration-image asset-light" src="dist/images/header-illustration-light.svg" alt="Header illustration" />
                <img class="header-illustration-image asset-dark" src="dist/images/header-illustration-dark.svg" alt="Header illustration" />
              </div>
              <div class="hero-media-illustration">
                <img class="hero-media-illustration-image asset-light" src="dist/images/hero-media-illustration-light.svg" alt="Hero media illustration" />
                <img class="hero-media-illustration-image asset-dark" src="dist/images/hero-media-illustration-dark.svg" alt="Hero media illustration" />
              </div>
              <div class="hero-media-container">
                <img class="hero-media-image asset-light" src="dist/images/hero-media-light.svg" alt="Hero media" />
                <img class="hero-media-image asset-dark" src="dist/images/hero-media-dark.svg" alt="Hero media" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="features section">
        <div class="container">
          <div class="features-inner section-inner has-bottom-divider">
            <div class="features-header text-center">
              <div class="container-sm">
                <h2 class="section-title mt-0">Servicios</h2>
                <p class="section-paragraph">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
                <div class="features-image">
                  <img class="features-illustration asset-dark" src="dist/images/features-illustration-dark.svg" alt="Feature illustration" />
                  <img class="features-box asset-dark" src="dist/images/features-box-dark.svg" alt="Feature box" />
                  <img class="features-illustration asset-dark" src="dist/images/features-illustration-top-dark.svg" alt="Feature illustration top" />
                  <img class="features-illustration asset-light" src="dist/images/features-illustration-light.svg" alt="Feature illustration" />
                  <img class="features-box asset-light" src="dist/images/features-box-light.svg" alt="Feature box" />
                  <img class="features-illustration asset-light" src="dist/images/features-illustration-top-light.svg" alt="Feature illustration top" />
                </div>
              </div>
            </div>
            <DiscoverOne />
          </div>
        </div>
        </section>

        <section class="cta section">
          <div class="container-sm">
            <div class="cta-inner section-inner">
              <div class="cta-header text-center">
                <h2 class="section-title mt-0">Get it and Switch</h2>
                <p class="section-paragraph">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
                <div class="cta-cta">
                  <a class="button button-primary" href="#">Buy it now</a>
                </div>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
  }
}

export default Main;