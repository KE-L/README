// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title};
  ### ${data.description};
  <br/>

  # Contents
  # ${data.Tableofcontent};
   
   
  # Installation insturctions below:
  ### ${data.Installation};
 
  # How to use this application:
  ### ${data.Usage};
  <br/>
# Licence used:
  ### ${data.License};
  #Contributor list
  ### ${data.Contributors};


  # How to test the application:
  ### ${data.Tests};
  # Questions below:
  ### ${data.Qs};

  ---
  
`;
}

module.exports = generateMarkdown;
