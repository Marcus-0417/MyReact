import { useEffect } from "react"
import axios from "axios"

function App() {

  useEffect(() => {
    (async () => {
      const data = await axios.get('./F-C0032-001.json');
      const {locations} = data.data.cwbopendata.dataset;
      console.log(locations);

    })
  }, [])

  return (

    <>
      <h2>36小時天氣預報</h2>
      <div id="listBox">
        <div id="city">
        <h3 className="cityName">台北市</h3>
          <div id="outer">
            <div className="inner">
              <h3>2日</h3>
              <p>上午6:00<br />~<br />下午6:00</p>
              <img src="../public/weatherIcon/晴時多雲.svg" alt="" />
              <p>晴時多雲</p>
              <p>10%</p>
            </div>
            <div className="inner">
              <h3>2日</h3>
              <p>上午6:00<br />~<br />下午6:00</p>
              <figure><img src="./public/weatherIcon/晴時多雲.svg" alt="" /></figure>
              <p>多雲時晴</p>
              <p>10%</p>
            </div>
            <div className="inner">
              <h3>3日</h3>
              <p>上午6:00<br />~<br />下午6:00</p>
              <figure><img src="./public/weatherIcon/晴時多雲.svg" alt="" /></figure>
              <p>晴時多雲</p>
              <p>10%</p>
            </div>
          </div>
        </div>
        <div id="city">
          <h3 className="cityName">新北市</h3>
          <div id="outer">
            <div>
              <h3>2日</h3>
              <p>上午6:00<br />~<br />下午6:00</p>
              <img src="../public/weatherIcon/晴時多雲.svg" alt="" />
              <p>晴時多雲</p>
              <p>10%</p>
            </div>
            <div>
              <h3>2日</h3>
              <p>上午6:00<br />~<br />下午6:00</p>
              <figure><img src="./public/weatherIcon/晴時多雲.svg" alt="" /></figure>
              <p>多雲時晴</p>
              <p>10%</p>
            </div>
            <div>
              <h3>3日</h3>
              <p>上午6:00<br />~<br />下午6:00</p>
              <figure><img src="./public/weatherIcon/晴時多雲.svg" alt="" /></figure>
              <p>晴時多雲</p>
              <p>10%</p>
            </div>
          </div>
        </div>


      </div>
    </>

  )
}

export default App