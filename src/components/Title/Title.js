import React from "react";
import styles from './Title.module.css'

/**
 * @param {title} - The text to display
 * @returns {JSX.Element} - Title component
 * @constructor
 */
const Title = ({title}) =>{
    return(
        <div className={styles.title}>
            {title}
        </div>
    )
}

export default Title
