// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title};
  ### ${data.description};
  <br/>
  # ${data.tableOfContent};
   * 
   * 
   * 
   * 
   * 
   ${*}
  ### ${data.installation};
  * HTML
  * CSS
  * JavaScript
  * BootStrap
  * jQuery
  * Spotify API
  * Microsoft Bing API
  
  ### ${data.usage};
  <br/>
  ### ${data.license};
  
  ### ${data.contributors};

  * Free API Call Limits & perimeters
  * Agreeing on a concept & integrating multiple APIs
  * Identifying viable APIs with relevant functionality
  * Using agile development methodologies to work collaboratively
  * Collectively developing & improving functionality
  
  ### ${data.tests};
  
  ### ${data.qs};

  ---
  ### Licensed under the MIT license
`;
}

module.exports = generateMarkdown;
