//import styles here
import styles from "../styles/Body.module.css"

// import components to render inside body
import NumButton from "./Buttons";
import Display from "./Display";

// export body Component
export default function Body() {
    return (
        <div className={styles.CalContainer}>
            <Display />
            <div className={styles.buttonContainer}>
                <NumButton />
            </div>
        </div>
    )
}