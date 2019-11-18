import React from 'react';

function DiscoverFeatureOneComponent() {
    var title="Discover 1";
    var description = "Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.";
  return (
    <div class="feature is-revealing">
        <div class="feature-inner">
            <div class="feature-icon">
                <img class="asset-light" src="dist/images/feature-01-light.svg" alt="Feature 01" />
                <img class="asset-dark" src="dist/images/feature-01-dark.svg" alt="Feature 01" />
            </div>
            <div class="feature-content">
                <h3 class="feature-title mt-0">{ title} </h3>
                <p class="text-sm mb-0">{ description }</p>
            </div>
        </div>
    </div>
  );

}

export default DiscoverFeatureOneComponent;