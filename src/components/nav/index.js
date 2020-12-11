import React, { Fragment } from "react";
import SearchRecipeButton from "../searchButton";
import Login from "../login";
import Register from "../register";
import styles from "../styles/sideNav.module.css";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import fridge from '../styles/imgs/fridge.png' 
import pantry from '../styles/imgs/pantry.png' 
import pref from '../styles/imgs/preference.png' 
import list from '../styles/imgs/list.png' 


const navBar = () => {

    const listFoodImg = []
  


  return (
    <div>
    
        <a class={styles.trigger} href="#0">
          <i ><MoreVertIcon/></i>
         </a>
         <nav class={styles.nav}>
        <ul>
          <li> 
                 <a  class={styles.navLink} href="#0">
                 <div class={styles.userProfile}>
                 <img alt="Users profile image"  src={fridge}
                 />
                </div>
                
                 </a>
            </li>
            <li>
                <a  class={styles.navLink} href="#0">
                <em>User's Name</em>
                </a>
            </li>
            <li>
                <a class={styles.navLink}>
                <em><SearchRecipeButton/></em>
                </a>
            </li>
            <li>
               <a  class={styles.navLink} href="#0">
               <img alt="Fridge" src={fridge}/>
               <em>My Fridge</em>
                </a>
            </li>
            <li>
               <a  class={styles.navLink} href="#0">
               <img alt="Pantry" src={pantry}/>
               <em>Pantry Staples</em>
                </a>
            </li>
            <li>
                <a  class={styles.navLink} href="#0">
                <img alt="list" src={list}/>
                <em>Saved Recipes</em>
                </a>
            </li>
            <li>
                <a  class={styles.navLink} href="#0">
                <img alt="preference" src={pref}/>
                <em> My Preferences</em>
                </a>
            </li>
            <li>
            <img alt="picture of food" />
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
