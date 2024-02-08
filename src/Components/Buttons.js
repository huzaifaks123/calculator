//import styles here
import styles from "../styles/Buttons.module.css"

// import useful hooks from react-redux
import { useDispatch, useSelector } from "react-redux"

// import required actions and selector from reducers
import { displaySelector, setInitial, setLast, setResult, setOperations } from "../Redux/Reducer/displayReducer";


export default function NumButton() {
    // create var to dispatch actions
    const dispatch = useDispatch()

    // import required state using selector
    const { initial, last, result, operations } = useSelector(displaySelector)

    // create var for num and key
    const nums = [
        7, 8, 9, "x", 4, 5, 6, "/", 1, 2, 3, "-", ".", 0, "00", "+", "AC", "%", "del", "="
    ]

    // handle dispatch of different key
    const handleDispatch = (num) => {
        console.log(num)
        if (num === "AC") {
            dispatch(setInitial(""))
            dispatch(setOperations(""))
            dispatch(setLast(""))
            dispatch(setResult(""))
        }
        else if ((num >= 0 && num <= 9) || num === ".") {                                                                                                                                                                                                                                       
            if (result) {
                dispatch(setOperations(""))
                dispatch(setLast(""))
                dispatch(setResult(""))
                dispatch(setInitial(num.toString()))
                if (num === ".") {
                    dispatch(setInitial("0" + num));
                }
            } else if (operations) {
                dispatch(setLast(last + num.toString()))
                if (num === "." && !last) {
                    dispatch(setLast("0" + num));
                }
            } else {
                dispatch(setInitial(initial + num.toString()))
                if (num === "." && !initial) {
                    dispatch(setInitial("0" + num));
                }
            }
        }
        else if (num === "00") {
            if (operations && last) {
                dispatch(setLast(last * 100))
            } else if (initial !== 0 || initial !== "") {
                dispatch(setInitial(initial * 100))
            }
        }
        else if (num === "x" || num === "/" || num === "+" || num === "-" || num === "%") {
            if (result) {
                dispatch(setInitial(result))
                dispatch(setOperations(num))
                dispatch(setLast(""))
                dispatch(setResult(""))
            }
            else if (initial && !last) {
                dispatch(setOperations(num))
            }
        }
        else if (num === "del") {
            if (result) {
                dispatch(setInitial(""))
                dispatch(setOperations(""))
                dispatch(setLast(""))
                dispatch(setResult(""))
            }
            else if (last) {
                if(last.toString().length===1){
                dispatch(setLast(""))
                return
                }
                const updatedNum = parseInt(last.toString().slice(0, -1), 10);
                dispatch(setLast(updatedNum))
            } else if (!last && operations) {
                dispatch(setOperations(""))
            } else if (initial && !operations) {
                const updatedNum = parseInt(initial.toString().slice(0, -1), 10);
                if (isNaN(updatedNum) || updatedNum < 0) {
                    dispatch(setInitial(""))
                } else {
                    dispatch(setInitial(updatedNum))
                }
            }
        } else {
            if (last && operations === "x") {
                dispatch(setResult(initial * last))
            }
            else if (last && operations === "/") {
                dispatch(setResult((initial / last).toFixed(2)))

            }
            else if (last && operations === "+") {
                dispatch(setResult(parseFloat(initial) + parseFloat(last)));
            }
            else if (last && operations === "-") {
                dispatch(setResult(initial - last))
            }
            else if (last && operations === "%") {
                dispatch(setResult(((initial / last) * 100).toFixed(2)))
            }
        }
    }

    return (
        <div className={styles.numContainer}>
            {nums.map((num, index) => (
                <button
                    onClick={
                        () => handleDispatch(num)
                    }
                    className={
                        num === '/' || num === '+' || num === 'x' || num === '-'
                            ? styles.rightColKey
                            : num === 'AC' || num === '%' || num === 'del'
                                ? styles.bottomRowKey
                                : num === '='
                                    ? styles.equalKey
                                    : styles.numButton
                    }
                    key={index}
                >
                    <div>{num}</div>
                </button>
            ))}
        </div>
    )
} 