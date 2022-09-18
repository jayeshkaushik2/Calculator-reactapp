import React from 'react'

const Calculator = () => {
    const [Value, setValue] = React.useState("");
    const oprators_arr = ["+", "-", "*", "/"]
    const digit_arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    const StyleSheet = {
        body: {
            width: "50%",
            marginTop: "100px",
            marginLeft: "auto",
            marginRight: "auto",
            background: "aqua",
            textAlign: "center",
            padding: "10px",
        },
        input: {
            width: "90%",
            borderRadius: "10px",
            height: "50px",
            padding: "10px",
            fontSize: "25px",
            background: "white",
        },
        table: {
            marginTop: "10px",
            width: "100%",
        },
        oprators: {
            width: "20%",
            background: "black",
            color: "white",
            height: "40px",
        },
        oprators_button: {
            width: "100%",
            height: "100%",
            fontSize: "25px",
        }
    }

    const calculate = (first, second, opr) => {
        let res = 0;
        if (opr === "+") {
            res = parseFloat(first) + parseFloat(second)
        }
        if (opr === "-") {
            res = parseFloat(first) - parseFloat(second)
        }
        if (opr === "*") {
            res = parseFloat(first) * parseFloat(second)
        }
        if (opr === "/") {
            res = parseFloat(first) / parseFloat(second)
        }
        if (res !== 0) {
            setValue(res)
        }
        else {
            setValue(0)
        }
        return res
    }


    const handleResultUpdate = () => {
        let first = "";
        let second = "";
        let opr = "";
        let opr_found = false;
        for (let i = 0; i < Value.length; i++) {
            let temp = Value[i]
            if (oprators_arr.includes(temp)) {
                if (opr_found) {
                    console.log(first, second, calculate(first, second, opr))
                    first = calculate(first, second, opr)
                    second = ""
                }
                else {
                    opr_found = true
                }
                opr = temp
            }
            else if (!opr_found) {
                first += temp
            }
            else if (opr_found) {
                second += temp
            }
        }

        if (second !== "") {
            first = calculate(first, second, opr)
            second = ""
        }
        setValue(first)

    }

    const handleOnClick = (val) => {
        if (val === "remove" && Value.length > 0) {
            let temp = Value.slice(0, Value.length - 2)
            setValue(temp)
        }
        if (val === "=") {
            handleResultUpdate()
        }
        else if (digit_arr.includes(val) || oprators_arr.includes(val)) {
            let last_ele = Value[Value.length - 1]
            if (oprators_arr.includes(val) && last_ele === val) {
            }
            else if (oprators_arr.includes(val) && oprators_arr.includes(last_ele)) {
                let temp = Value.slice(0, Value.length - 2)
                setValue(temp)
            }
            else {
                setValue(Value + val)
            }
        }
        console.log("Value", Value)
    }

    return (
        <div style={StyleSheet.body}>
            <input style={StyleSheet.input} value={Value} readOnly />
            <table style={StyleSheet.table}>
                <tbody>
                    <tr>
                        <th style={StyleSheet.oprators}>
                            <button style={StyleSheet.oprators_button} onClick={() => handleOnClick("+")}>
                                +
                            </button>
                        </th>
                        <th style={StyleSheet.oprators}>
                            <button style={StyleSheet.oprators_button} onClick={() => handleOnClick("-")}>
                                -
                            </button>
                        </th>
                        <th style={StyleSheet.oprators}>
                            <button style={StyleSheet.oprators_button} onClick={() => handleOnClick("*")}>
                                X
                            </button>
                        </th>
                        <th style={StyleSheet.oprators}>
                            <button style={StyleSheet.oprators_button} onClick={() => handleOnClick("/")}>
                                /
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <td style={StyleSheet.oprators}><button style={StyleSheet.oprators_button} onClick={() => handleOnClick("1")}>1</button></td>
                        <td style={StyleSheet.oprators}><button style={StyleSheet.oprators_button} onClick={() => handleOnClick("2")}>2</button></td>
                        <td style={StyleSheet.oprators}><button style={StyleSheet.oprators_button} onClick={() => handleOnClick("3")}>3</button></td>
                    </tr>
                    <tr>
                        <td style={StyleSheet.oprators}><button style={StyleSheet.oprators_button} onClick={() => handleOnClick("4")}>4</button></td>
                        <td style={StyleSheet.oprators}><button style={StyleSheet.oprators_button} onClick={() => handleOnClick("5")}>5</button></td>
                        <td style={StyleSheet.oprators}><button style={StyleSheet.oprators_button} onClick={() => handleOnClick("6")}>6</button></td>
                    </tr>
                    <tr>
                        <td style={StyleSheet.oprators}><button style={StyleSheet.oprators_button} onClick={() => handleOnClick("7")}>7</button></td>
                        <td style={StyleSheet.oprators}><button style={StyleSheet.oprators_button} onClick={() => handleOnClick("8")}>8</button></td>
                        <td style={StyleSheet.oprators}><button style={StyleSheet.oprators_button} onClick={() => handleOnClick("9")}>9</button></td>
                    </tr>
                    <tr>
                        <td style={StyleSheet.oprators}><button style={StyleSheet.oprators_button} onClick={() => handleOnClick("=")}>=</button></td>
                        <td style={StyleSheet.oprators}><button style={StyleSheet.oprators_button} onClick={() => handleOnClick("0")}>0</button></td>
                        <td style={StyleSheet.oprators}><button style={StyleSheet.oprators_button} onClick={() => handleOnClick("remove")}>Remove</button></td>
                        <td style={StyleSheet.oprators}><button style={StyleSheet.oprators_button} onClick={() => setValue("")}>Clear all</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calculator