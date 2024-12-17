import { useRef, useState } from "react";


export default function App() {

    // const [value, setValue] = useState("");
    /* 建立一個useRef的變數 */
    const inputRef = useRef(null);

    console.log('App render...');

    const submitHandler = () => {

        /* 查看值 */
        console.log(inputRef.current.value);
        /* 查看類型 */
        console.log(inputRef.current.type);
        /* 更改類型為password */
        inputRef.current.type = "password";
    }

    return (
      <>
        {/* <input type="text" onChange={(e)=> setValue(e.target.value)} /> */}
        <input type="text" ref={inputRef} />
        <button onClick={submitHandler}>送出</button>
      </>
    )
  }