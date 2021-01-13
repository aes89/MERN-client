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