import React from 'react';



function DiscoverFeatureTwoComponent(){
    var title="Discover 2";
    var description = "Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.";
  return (
    <div class="feature is-revealing">
        <div class="feature-inner">
            <div class="feature-icon">
                <img class="asset-light" src="dist/images/feature-02-light.svg" alt="Feature 02" />
                <img class="asset-dark" src="dist/images/feature-02-dark.svg" alt="Feature 02" />
            </div>
            <div class="feature-content">
                <h3 class="feature-title mt-0">{ title }</h3>
                <p class="text-sm mb-0">{ description }</p>
            </div>
        </div>
    </div>
  );

}

export default DiscoverFeatureTwoComponent;