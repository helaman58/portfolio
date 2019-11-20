import React from 'react';



function DiscoverFeatureThreeComponent(){
    var title="Discover 3";
    var description = "Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.";
  return (
    <div class="feature is-revealing">
        <div class="feature-inner">
            <div class="feature-icon">
                <img class="asset-light" src="dist/images/feature-03-light.svg" alt="Feature 03" />
                <img class="asset-dark" src="dist/images/feature-03-dark.svg" alt="Feature 03" />
            </div>
            <div class="feature-content">
                <h3 class="feature-title mt-0">{ title }</h3>
                <p class="text-sm mb-0">{ description }</p>
            </div>
        </div>
    </div>
  );

}

export default DiscoverFeatureThreeComponent;