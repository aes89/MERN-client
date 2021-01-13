## MERN-client

|Shelby El-rassi|Adrienne Smith|
|:-------------:|:-------------:|
|[www.shelby-el-rassi.com](www.shelby-el-rassi.com)  |[adriennesmith-portfolio.netlify.app/](https://adriennesmith-portfolio.netlify.app/) |
|[github.com/Shelby219](https://github.com/Shelby219)  |[github.com/aes89](https://github.com/aes89) |

---

Deployed App:

##### Documentation Repository: https://github.com/CA-MERN/MERN-Part-A-Docs

##### Client Repository: https://github.com/CA-MERN/MERN-client

##### Server Repository: https://github.com/CA-MERN/MERN-server

---
### Manual Testing Log - Development
<details>
<summary>Click to expand</summary>

| Date | Feature | Test |
|:---:|:---:|:---:|
| 07/12/2020 | Preferences creates false/true object | Form completed manually, able to console log returned object showing { "vegetarian": true, "vegan": false ...} |
| 08/12/2020 | Log in and Register Modals | Able to click on Log in or Register, modal appears. Able to click on Log in or Register within modal to switch forms. |
| 24/12/2020 | User register | Manual Testing via the console checking if the redux state, and local storage was updated on register then login. |
| 24/12/2020 | User login | Manual Testing via the console checking if the redux state, and local storage was updated on login. Additionally checking the JWT storage as cookie.|
| 25/12/2020 | User Settings | Manual Testing via the console checking if the redux state, and local storage was updated on useEffect calling the DB get request and returning the user data.|
| 25/12/2020 | User Settings Update | |

</details>

---
### Automated Testing Log - Development
<details>
<summary>Click to expand</summary>

| Feature | Test |
|:---:|:---:|
| test | test |

</details>

---
### Manual Testing Log - Production
<details>
<summary>Click to expand</summary>

| Date | Feature | Test |
|:---:|:---:|:---:|
| test | test | test |

</details>

---
### Automated Testing Log - Production
<details>
<summary>Click to expand</summary>

| Date | Feature | Test |
|:---:|:---:|:---:|
| test | test | test |

</details>

---
### Daily Tasks
<!-- <details> -->
<summary>Click to expand</summary>
Collaboratively tracked in Trello, see <a href="#trellologs">Trello Screen Shots</a>.
&check;
&cross; 

| Date | Tasks Allocated | Completed? |Allocated to? |
|:---:|:---:|:---:|:---:|
|**Adrienne** |
| 08/12/2020 | Create testing logs in ReadMe. | &check; | Adrienne |
|| Create daily task log | &check; |Adrienne |
|| Cypress tests for preferences, log in, register, user settings. | &check; Login &check; Register &cross; User settings &cross; Preferences | Adrienne |
|| Routes | &cross;| Adrienne |
|09/12/2020| Finalise Part A documentation and presentation | &check; | Adrienne |
| | Set up Redux (global state management) so can test components thoroughly | |Adrienne |
|| Cypress tests for preferences and user settings. |  |Adrienne |
</details>



---

### Sprint Planning

<details>
<summary>Click to expand</summary>

We determined that setting weekly sprints was an ideal format for our project. We created a card in Trello that organised them by date and we were able to form checklists of what we wanted to have completed at the end of each sprint for the front-end and back-end. Whilst working we have a current doing card and then a completed card which we are able to distinguish each feature/component being worked on and what is completed.

In the initial planning stages we planned our Trello for the server/client based off features which would be the names of the branches. Our first feature for server/client was the user and during the first Sprint it was decided Shelby would complete the back-end code and testing and Adrienne would complete the front-end code and testing.  Each morning we begin with our own stand up in which we show what we have worked on, explained our code, listed any challenges and also any wins. Since we are working on back-end and front-end seperate, this ensures we are both know what is happening on each feature. 

Initially we were going to switch front-end and back-end for each feature, but we decided for the MVP product that Shelby would stick to the back-end and Adrienne on the front-end to ensure we delivered a great MVP product on time. This plan tailored to each of our strengths. This being said, once the MVP is completed all our nice to have features that we want to implement, we will switch roles for the implementation of these features. In the planning stage we decided to pair programme when it comes for connecting the server and client, which we are planning on doing at the end of each feature branch. 

Additionally when it comes time to styling we will likely do a mixture of pair programming and allocation of components to style as we both really enjoy styling.

</details>

#### Sprint 1- 30/11- 6/12

<details>
<summary>Click to expand</summary>

USER BRANCH

##### Shelby:

At this start of this Sprint, Shelby set up the initial back-end server code and all the express/mongo/mongoose connections and tested it was all set up correctly. Then the first component worked on was the implementation of passport, passport-JWT and jsonwebtoken for user account and authorisation. The implementation of this involved using the express session to pass around the JWT. Alongside this was the initial user account routes , the setting up of the testing of these API end points was a steep initial learning curve. This began with researching testing frameworks in which Mocha along with super test was chosen. Shelby decided on constructing the tests with a description of each Http request eg. 'GET /ingredients/:username/fridge’. The get requests were test with expecting a 200 code back along with JSON content, the post/patch requests tested by sending dummy data through the test database and testing the response matching, and the delete requests were tested with a 204 response code. The biggest hurdles during the process were setting up the correct dummy data, the tear down data functions and deciding on the structure of the tests. 

Some issues were the concern of updating the user via account settings page and then the whole data being overridden, however this issue was solved for the moment since the whole user model is being sent to the account settings page, so there for can be returned with the new data. However this solution is ok for the level the project is at now, for future scalabilty this would need to be altered.


</details>

#### Sprint 2- 7/12- 13/12
<details>
<summary>Click to expand</summary>

##### Shelby:

FRIDGE/PANTRY BRANCH

During this sprint the CRUD for ingredients was implemented. Shelby managed to keep the codebase dry by not doing Fridge and Pantry CRUD, rather just implementing an Ingredient CRUD base and using conditionals checking the path name, which then determines which part of the user model gets updated. 

USER BRANCH

When implementing s3 and Multer for profile image upload, some blockers were incorrect set up of IAM policy, the use of .single with multer (use .any to ensure the image would upload.)

Shelby also began implementing validation using express-validator starting with validation for the email, password and user information on registering, account settings page and login. 

Started writing passing fail tests to test the end points when errors arise. This pair with using validation I was able to test the results of invalid data being input for the user model. 

Current blockers are implementation of persisting cookies with mocha/supertest testing so tests can be run even with authenticated routes. eg. with the middleware of "passport.authenticate('jwt', {session: false})". Currently all  tests are based with this middleware not being implemented. Code that was tried includes, using superagent, setting headers, setting a beforeAll function of logging in the user and trying to manually set the cookies. The closest to success was using a beforeAll function of logging in the user, however accessing the cookies from that Http request response was not successful. This task will be moved to next sprint. 

CLIENT

Completed the intial styling for the home/nav/login/register to start the basis of styling, to enable easier implementation of the react client-side.


</details>


#### Sprint 3- 14/12-27/12
<details>
<summary>Click to expand</summary>

RECIPE BRANCH

Began Work on this feature branch on the server client. Initial routes set up. The biggest challenge was the code required for the process of getting the user data from the DB (being ingredients and preferences), error handling, sanitising the data (functions checking if null, processing booleans into an array then finally a string), then sending the correct data to the Spoonacular API calls. During the code process of the helper functions a lot of manual testing done via the console was done with some dummy data, to ensure that the JS functions were working as intended. Additionally testing Spoonacular API via postman was done to determine with Http request URLs were the right ones to use for this application. 

Through Automatic testing coupled with some manual testing the main utility function for return recipe data for the browse page is:
finding a User in Db per params, builds the query info per the data from user, uses that data to axios request Spoonacular API for recipes based off ingredients, then collect those recipes IDs, sanitize the data, then use the IDS for another API call to get the detailed recipe information. 

In my testing of the main function in which makes all the API calls and data validation, I had some trouble testing with getting the data. I was trying to return it as a variable, then I used await outside the main async function (even though the test function was async). What you was needed was to wrap the await call inside an async function, and then call that async function in the top-level of your script. Immediately outputting the result just returned a promise pendings, then using the given code with another await to return the promise returned undefined. The below is the serious of options:

In my first test call:

````js
const recipes = returnRecipesToBrowse(req);
console.log(recipes); // will give you something like Promise {pending}
````
Then this was tried:
````js
const recipes = await returnRecipesToBrowse(req);; // will error
console.log(recipes); //undefined
````
What was the final result was:
````js
const returnRecipesToBrowse = async (req) => {
   const recipes = await User.findOne({ username: req.user.username })
    .then(recipes =>  userQueryBuilder(recipes))
    .then(queryItems =>  sanitizeDataForIngredientQuery(queryItems))
    .then(recipesObject => recipeIdGetter(recipesObject.data))
    .then(data => detailedRecipeAPISearch(data))
    .then(recipes =>  {return recipes})
    .catch(error => {return error})
  return recipes
};  
 
returnRecipesToBrowse(req); // run the async function at the top-level, since top-level await is not currently supported in Node

````
I did not need to await on the final returnRecipesToBrowse(req) call, since Node won't exit until its event loop is empty.

When implementing the main code for displaying recipes for browsing, it was discovered that there were certain limitations with using the Spoonacular API. The 'search recipes' which enables a complex search with ingredients and other query parameters like diet and intolerances, proved not useful as it only displays recipes that have all the ingredients in the query not recipes that include one or more of the ingredients. This search was much too specific as we needed to return recipes with one or more of the query ingredients. To supplement the above option, it was decided to use the 'search recipes by ingredients', which will return recipes that include one or more the ingredients in the query, however the returned object is not detailed. Using the object returned above, the recipe ID's were extracted to then use in another query which is ' get recipe information bulk' which returns details recipe information using the recipe ID's as the parameters. The returned object from this query though I believe was limited by the paid tiers of the API. Which meant the preferences list was reduced down to just include vegetarian, vegan, gluten-free, dairy-free, very healthy, cheap, popular, sustainable, and low-fod-map. In future the payment tier may not opted to increase which would enable more preference options. 

To overcome the blocker of needing the information from the ingredient search query, but also the information from the get recipe bulk query, the used and missed ingredients were filtered out from the first lot of returned data, then passed onto the next function, so that after the bulk recipe query was returned the two objects could be joined and returned. 

CLIENT-SIDE

The initial connecting of the front-end and back-end was started. This started a learning curve with how having the JWT in a cookie works. To begin with registering a user was connected, and logging in a user, this followed some blockers including the register user function on the back-end not signing a JWT, and on the front-end determining how to keep a user logged in. Local storage was implemented for this issue with the storage housing the username and at the moment the JWT (which is not necessary, but just in place for manual testing). Along with local storage is the state manager being redux. 


FRIDGE PANTRY
Started the fridge and pantry components using the AutoComplete component and JSON ingredient/pantry lists from Shelby. The forms were built using the Formik library. Some difficulties were found around structuring shared functions and what needed to be separated. 

PREFERENCES
The preferences form was completed and ready to be connected to the database. The form was built using Formik again but using radio buttons. 


Adrienne had some difficulties properly adding .eslintcache to .gitignore and it had to be removed many, many times. 

</details>



#### Sprint 4- 28/12/20 - 10/1/21

<details>
<summary>Click to expand</summary>


STYLING

Foundational styling was done as I went to ensure easy readability of the pages being worked on. This involved implementing a Grid layout from Material UI for styling. The main components used from Material UI include the autocomplete component, Grid, Paper and Buttons. Additional usage will be put in place once the final in depth styling is completed. 
Initial set up React Toastify for Notifications was put in place for later use. 
Some refining of a basic footer and the top logo for linking back to the home page was completed. 
Adjusted the user profile image styling as Adrienne was going to be implementing this code. 
Not found page was implementing and styled.

Loading screen was implemented with React Loading to enable a loading time frame for browse recipes, fridge, pantry and eventually saved recipes. To ensure the data has loaded correctly. 

BROWSE RECIPES

Browse Recipe component was created and some test data was put in place via a JSON file to enable to initially styling of the recipe cards. Like the separate ingredient component, using a separate recipe card component means it can be reused when it comes to displaying the saved recipes pages. 

Then the start of the coding process for calling the backend to return the recipes for browsing. The services code for calling the DB route was implementing quite quickly, initially with the idea that the DB would be called by clicking the search recipe button. This may be changed back to this. However right now it was changed that that button takes you to the browse recipe page, then a useEffect calls the DB and returns the browse data IF the local storage is empty. If the local storage has browse recipes in it. A major blocker during this project was the object coming up with [object, object]. This was discovered that local storage, in order to pass it around from page to page, requires the data to be stringified then parsed back. Once this was implementing the data displayed from local storage no issue.

The next step is being able to refactor the code to allow for if the user was to do a refresh search, that the browse recipe DB route will  be called again and then update local storage. Also to make it obvious to the user that if it was a search with no ingredients, that a random search was made just to show some random recipes. 

Issue: check if the server code is working correctly with taking fridge and pantry ingredients for the recipe search.

FRIDGE PANTRY

Adrienne implemented the foundational code for the fridge and pantry components and the functions for connecting to the back end, alongside was some great code for being able to save the state of multiple ingredients for adding to the DB. I just did some refactoring as instead of manually coding the add multiple ingredients, Material UI has this available in the autocomplete component. Additional I was able to incorporate the ingredient services methods.

The connecting of the backend to the frontend was completed for the fridge and pantry for adding, deleting and deleting all ingredients. Some issues along the way were being able to take the array of ingredients from autocomplete and adding them to the array in the DB. Initially it was adding the array to the array in DB, this was able to be resolved by updating on the server side the following:  

````js
from (newItem)

to (...newItem)

````

Then was the issue of duplicates being able to be added to the list. Adrienne is currently working on a fix for this issue, because as it stands you can add duplicates, but when you delete one, it deletes all as that is the server method of deleting. So to overcome this, a function for stopping duplicates is needed. 

Adrienne completed some debugging around the Pantry updating when the Fridge was updated and sharing ingredients lists, rendering the fridge form when there is no previously saved data, as well as removing a selected ingredient from the available list of ingredients to select from. This does not completely resolve the duplicate ingredients issue however.

USER

A blocker which was causing issues when finding by username and updating for settings and preferences, was this:

````js


//ISSUE
User.findOneAndUpdate(req.params.username)

//FIXED
User.findOneAndUpdate({ username:  req.params.username })

````

This above caused issue with for example it would update the wrong users profile image, and I believe it was updating the first user in the DB. 

A fix was made for the Regex for registering a user and the username, this was fixed so as to allow for usernames of 5 letters or more. 

A major blocker was the user password being rehashed each log in/update. This was able to be fixed with a model pre function which checked if the password was modified, and hashes the new one, as opposed to rehashing the hashed one. This code fixed the issue, but that are some ongoing problems with updating the user settings from client, which may need some loading time for this back end code to operate successfully.

INGREDIENTS

A conditional was implementing that if no ingredients for fridge or pantry were present it would render a white space filler letting the user know that there are no ingredients present. 


DEPLOYMENT

Server code was successfully deployed to Heroku. The client code however was deployed to netlify, but some issues are remaining. Keep working on deployment. 

APP

A private route function was set up so that it could be utilised with any routes that require logging in. This then redirects the user to the home page. 

PROFILE PHOTO
Image upload added. Initially file upload was working but with bugs, and was initially included in the User Settings form. It was moved into it's own component to allow for separate updates to image and username, email and password respectively. 
The photo upload was not displaying without manual refresh. This was resolved by adding the image to state via updateProfile to currentUserSettings.


Blockers:

- Password being hashed on hash.
- Local storage holding JSON file, needed to pass string and then parse back our to JSON for render.
- Cypress testing would interact with web pages but would not submit some forms or interact with the state of the application. Able to interact with database as would register user and log in, but not save that user to local state.



</details>

#### Sprint 5- 11/01/20 - 19/1/21

<details>
<summary>Click to expand</summary>

TESTING
Configured package cypress-and-jest coordinated code coverage reports. 
Continued development of end-to-end testing for components. Able to set state manually using package cypress-localstorage-commands but having difficulty integrating state with database calls and changing state on return. Cypress-testing-library added 
Revisited unit testing for front end with Jest. Previously written tests failing as components completed and refactored. All Jest tests failing. Time spent debugging, see blockers. To look into Storybook and Cypress Unit testing. 

Blockers:
Modules and Jest conflicting - Jest throwing errors on JS files with modules.css styling. 
Difficulty getting MaterialUI Autocomplete to clear after adding ingredients resulting in duplicated on ingredients being added.  

<details>
<summary> Notes to delete later probably</summary>
Rubric notes:

- complete and detailed description of libraries used in the app
- frequent commits, merges and pull requests from all team members/multiple feature branches/README and gitignore with appropriate content
- project results demonstrating consideration of strength and weaknesses of team members and project/team conditions/ Kanban board of tickets assigned to team members labelled with difficulty level and corresponding Git commits.
- cloud hosting service, uses environment variables, use same database type in development/testing as production, uses custom domain name
- evidence of user testing of site in development and production, and framework testing for both
  
  cypress coverage:
npx nyc report --reporter=text-summary

# see just the coverage summary
$ npx nyc report --reporter=text-summary
# see just the coverage file by file
$ npx nyc report --reporter=text
# save the HTML report again
$ npx nyc report --reporter=lcov


cypress-and-jest
Combines Cypress and Jest coverage reports
run $open coverage/lcov-report/index.html
 npm run report:combined

cypress-testing-library
allows reusable components in cypress testing
</details>