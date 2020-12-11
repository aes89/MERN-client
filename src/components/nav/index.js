import React, { Fragment } from "react";
import SearchRecipeButton from "../searchButton";
import Login from "../login";
import Register from "../register";
import styles from "../styles/sideNav.module.css";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import KitchenIcon from '@material-ui/icons/Kitchen';
const navBar = () => {

  


  return (
    <div>
    
        <a class={styles.trigger} href="#0">
          <i ><MoreVertIcon/></i>
         </a>
         <nav class={styles.nav}>
        <ul>
          <li> 
                 <a  class={styles.navLink} href="#0">
                 <img alt="Users profile image" //src={userProfile}
                 />
                 </a>
            </li>
            <li>
                <a  class={styles.navLink} href="#0">
                <em>User's Name</em>
                </a>
            </li>
            <li>
                <a class={styles.navLink}>
                <SearchRecipeButton/>
                </a>
            </li>
            <li>
               <a  class={styles.navLink} href="#0">
               <i ><KitchenIcon/></i>
               <em>My Fridge</em>
                </a>
            </li>
            <li>
                <a  class={styles.navLink} href="#0">
                <em>Saved Recipes</em>
                </a>
            </li>
            <li>
                <a  class={styles.navLink} href="#0">
                <em> My Preferences</em>
                </a>
            </li>
            <li>
            <img alt="picture of food"//src={userProfile}
                 />
            </li>
            <li>
                    <Fragment>
                <button
                
                >
                    Login
                </button>
                <button
                    
                >
                    Register
                </button>
                </Fragment>
            </li>
        </ul>
        
               
         
     
        </nav>
    </div>
  );
};


export default navBar
