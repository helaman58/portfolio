import React from 'react';

class DiscoverFeatureOneComponent extends React.Component {
    
      constructor(props) {
        super(props);
        this.state = {
          getDiscoverUrl: "https://private-24a9c-vehiclersapi.apiary-mock.com/dicover",
          data: []
        };
      }
    
      componentDidMount () {
        console.log('componentDidMount');
            fetch(this.state.getDiscoverUrl)
              .then(res => res.json())
              .then((data) => {
                this.setState({ data });
                 console.log(this.state);
              })
              .catch(console.log)
      }

      render () {
        return (
            <div class="features-wrap">
                {this.state.data.map(item => (
                    <div class="feature is-revealing">
                        <div class="feature-inner">
                            <div class="feature-icon">
                                <img class="asset-light" src={`dist/images/feature-`+item.feature+`-light.svg`} alt={`Feature `+item.feature}  />
                                <img class="asset-dark" src={`dist/images/feature-`+item.feature+`-dark.svg`} alt={`Feature `+item.feature} />
                            </div>
                            <div class="feature-content">
                                <h3 class="feature-title mt-0">{ item.title } </h3>
                                <p class="text-sm mb-0">{ item.descripction }</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
      }
}

/*
const DiscoverFeatureOneComponent = (feature) => {
    const title="Discover";
    const description = "Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.";
  return (
    <div class="feature is-revealing">
        <div class="feature-inner">
            <div class="feature-icon">
                <img class="asset-light" src={`dist/images/feature-`+feature.feature+`-light.svg`} alt={`Feature `+feature.feature}  />
                <img class="asset-dark" src={`dist/images/feature-`+feature.feature+`01-dark.svg`} alt={`Feature `+feature.feature} />
            </div>
            <div class="feature-content">
                <h3 class="feature-title mt-0">{ title} </h3>
                <p class="text-sm mb-0">{ description }</p>
            </div>
        </div>
    </div>
  );

}
*/

export default DiscoverFeatureOneComponent;