// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title};
  ### ${data.description};
  <br/>
  # ${data.Tableofcontent};
   * 
   * 
   * 
   * 
   * 
   
  ### ${data.Installation};
  * HTML
  * CSS
  * JavaScript
  * BootStrap
  * jQuery
  * Spotify API
  * Microsoft Bing API
  
  ### ${data.Usage};
  <br/>
  ### ${data.License};
  
  ### ${data.Contributors};

  * Free API Call Limits & perimeters
  * Agreeing on a concept & integrating multiple APIs
  * Identifying viable APIs with relevant functionality
  * Using agile development methodologies to work collaboratively
  * Collectively developing & improving functionality
  
  ### ${data.Tests};
  
  ### ${data.Qs};

  ---
  ### Licensed under the MIT license
`;
}

module.exports = generateMarkdown;
