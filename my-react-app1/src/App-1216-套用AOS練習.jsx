import AOS from 'aos'; //npm i aos
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init(); // 初始化
  }, []);

  return (
    <>
      <div className='container'>
        <div id='div1'>
          <h1 data-aos="fade-up">AOS-fade</h1>
          <div className='box' data-aos="fade-up" data-aos-duration="3000">fade-up</div><br />
          <div className='box' data-aos="fade-down" data-aos-duration="3000">fade-down</div><br />
          <div className='box' data-aos="fade-left" data-aos-duration="3000">fade-left</div><br />
          <div className='box' data-aos="fade-right" data-aos-duration="3000">fade-right</div><br />
        </div>

        <div id='div2'>
          <h1 data-aos="zoom-in">AOS-zoom-in</h1>
          <div className='box1' data-aos="zoom-in" data-aos-duration="3000">zoom-in</div><br />
          <div className='box1' data-aos="zoom-in-up" data-aos-duration="3000">zoom-in-up</div><br />
          <div className='box1' data-aos="zoom-in-down" data-aos-duration="3000">zoom-in-down</div><br />
          <div className='box1' data-aos="zoom-in-left" data-aos-duration="3000">zoom-in-left</div><br />
          <div className='box1' data-aos="zoom-in-right" data-aos-duration="3000">zoom-in-right</div><br />
        </div>

        <div id='div3'>
          <h1 data-aos="flip-up">AOS-Flip</h1>
          <div className='box2' data-aos="flip-up" data-aos-duration="3000">flip-up</div><br />
          <div className='box2' data-aos="flip-down" data-aos-duration="3000">flip-down</div><br />
          <div className='box2' data-aos="flip-right" data-aos-duration="3000">flip-right</div><br />
          <div className='box2' data-aos="flip-left" data-aos-duration="3000">flip-left</div><br />
        </div>
      </div>
    </>
  )
}

//CSS 的部分
// .container{
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   margin: 0 auto;
// }

// .box{
//   width: 300px;
//   height: 150px;
//   background-color: #000;
//   color: #fff;
//   text-align: center;
//   line-height: 150px;
//   margin: 10px;
//   border-radius: 10px;
//   font-size: 30px;
// }

// .box1{
//   width: 300px;
//   height: 150px;
//   background-color: #000;
//   color: #fff;
//   text-align: center;
//   line-height: 150px;
//   margin: 10px;
//   border-radius: 10px;
//   font-size: 30px;
// }

// .box2{
//   width: 300px;
//   height: 150px;
//   background-color: #000;
//   color: #fff;
//   text-align: center;
//   line-height: 150px;
//   margin: 10px;
//   border-radius: 10px;
//   font-size: 30px;
// }

export default App