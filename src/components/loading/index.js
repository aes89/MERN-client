import React from "react";

import ReactLoading from "react-loading";


import styles from "./loading.module.css"


export default function Loading () {
     
      return(
            <div class={styles.loadBox}>
           
                <ReactLoading className={styles.loadBoxInner} type={"spinningBubbles"} color={"green"} height={150} width={150} />
          
            </div>
      )
   
}