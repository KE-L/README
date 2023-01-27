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
  Local Storage Persists:
    * &, prints the user's search history.
  ### Built with
  * HTML
  * CSS
  * JavaScript
  * BootStrap
  * jQuery
  * Spotify API
  * Microsoft Bing API
  ### Mock-Up
  The images below illustrates the Music Search Engine's web page appearance:
  ![musicsearchengionepicture](https://user-images.githubusercontent.com/115717787/212173684-fe1bb649-71b9-431a-b6d9-354d4a77afdb.png)
  ### User Story:
  As a user; <br/>
  I want a web application which allows me to search for music artists & bands. <br/>
  In response to my input the page displays relevant information. <br/>
  &, links to discover new artists/bands. <br/>
  ### The Challenges
  * Free API Call Limits & perimeters
  * Agreeing on a concept & integrating multiple APIs
  * Identifying viable APIs with relevant functionality
  * Using agile development methodologies to work collaboratively
  * Collectively developing & improving functionality
  ### Project Management Tool:
  The project managment space:
  [https://trello.com/b/zVBXZjZE/mse ]
  ### Links
  * Github Repository - https://jacklabukas.github.io/Music-Search-Engine/
  * Deployed Application - https://jacklabukas.github.io/Music-Search-Engine/
  ### Credits
  * Pexels - https://www.pexels.com/
  * MS Bing API - https://www.microsoft.com/en-us/bing/apis/bing-web-search-api
  * Spotify API - https://developer.spotify.com/
  * Bootstrap - (https://getbootstrap.com/)
  ### Contacts
  If you require any further information, feel free to contact me at:
  * Github Profile: https://github.com/JackLabukas
  * LinkedIn: https://www.linkedin.com/in/jack-labukas-5bb038b7/?originalSubdomain=uk
  ---
  ### Licensed under the MIT license
`;
}

module.exports = generateMarkdown;
