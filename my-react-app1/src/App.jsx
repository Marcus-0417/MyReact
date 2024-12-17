import { useRef } from "react"

export default function App() {

  const greenRef = useRef(null);
  const yellowRef = useRef(null);

  const goGreen = () => {
    // greenRef.current.scrollIntoView({ behavior: 'smooth' });
    window.scrollTo({
      behavior: 'smooth',
      top: greenRef.current.offsetTop
    })
  }
  const goYellow = () => {
    // yellowRef.current.scrollIntoView({ behavior: 'smooth' });
    window.scrollTo({
      behavior: 'smooth',
      top: yellowRef.current.offsetTop
    })
  }

  return (
    <>
      {/* offsetTop */}
      <div ref={yellowRef} style={{ height: '100vh', backgroundColor: 'yellow', }}>
        <button onClick={goGreen}>green</button>
      </div>

      <div ref={greenRef} style={{ height: '100vh', backgroundColor: 'green', }}>
        <button onClick={goYellow}>yellow</button>
      </div>

    </>
  )
}