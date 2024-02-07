import React from 'react';

//import styles here
import styles from "../styles/Display.module.css"

// import useful hooks from react-redux
import { useSelector } from 'react-redux';

// import required selector from reducers
import { displaySelector } from '../Redux/Reducer/displayReducer';


export default function Display() {
    // import required state using selector
    const { initial, last, operations, result } = useSelector(displaySelector);

    return (
        <div className={styles.displayContainer}>
            <div className={styles.initial}>{initial}</div>
            <div className={styles.second}>
                <div className={styles.operator}>{operations}</div>
                <div className={styles.last}>{last}</div>
            </div>
            <div className={styles.final}>
                <div className={styles.equal}>Ans</div>
                <div className={styles.result}>{result}</div>
            </div>
        </div>
    );
}
