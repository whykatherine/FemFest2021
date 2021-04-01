// modules
import React from 'react';

function QueerResources(props) {
  let resources = {
    "Audrey Lorde Health Programs": {
      "link": "https://lalgbtcenter.org/health-services/medical-services/primary-care-women",
      "description": "At the Los Angeles LGBT Center's Audre Lorde Health Program for lesbian and bi women, we offer the full range of primary medical care services by staff who are your partners in leading heathier and happier lives."
    },
    "Trans Wellness Center": {
      "link": "https://mytranswellness.org/",
      "description": "The Trans Wellness Center (TWC) provides comprehensive resources and services for transgender and non-binary people under one roof."
    },
    "Sexual Health and Prevention": {
      "link": "https://lalgbtcenter.org/health-services/hiv-related-services/hiv-std-testing",
      "description": "The Los Angeles LGBT Center offers free, fast, and comprehensive testing for HIV and other STDs."
    },
    "Mental Health": {
      "link": "https://lalgbtcenter.org/health-services/mental-health/mental-health-services-overview",
      "description": "The Los Angeles LGBT Center offers individual, couples, family, and group therapy, as well as psychiatric care."
    },
    "Mi Centro": {
      "link": "https://lalgbtcenter.org/mi-centro",
      "description": "Whether it's our hijos or hijas, hermanos or hermanas, or tíos or tías, we believe in the same freedoms for everybody, no matter who you are or whom you love."
    }
  };

  return (
    <div className="queer-resources">

      <div className="text">
        <h1 data-content="Queer Resources">Queer Resources</h1>
      </div>

      <div className="gallery gallery--resources">
        {Object.keys(resources).map(r => (
          <div className="gallery__item" key={r}>
            <p><a href={resources[r]["link"]} target="_blank" rel="noopener noreferrer">{r}</a></p>
            <p>{resources[r]["description"]}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default QueerResources;