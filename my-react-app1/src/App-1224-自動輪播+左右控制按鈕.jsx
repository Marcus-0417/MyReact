import { useEffect, useState } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";


export default function App() {
  /* 建立目前背景圖的變數 */
  const [currentSlide, setCurrentSlide] = useState(0);

  /* 建立輪播圖片的陣列物件 */
  const slides = [
    { URL: './images/01.jpg', Text: '第一張圖片' },
    { URL: './images/02.jpg', Text: '第二張圖片' },
    { URL: './images/03.jpg', Text: '第三張圖片' },
    { URL: './images/04.jpg', Text: '第四張圖片' },
    { URL: './images/05.jpg', Text: '第五張圖片' },
    { URL: './images/06.jpg', Text: '第六張圖片' },
    { URL: './images/07.jpg', Text: '第七張圖片' },
    { URL: './images/08.jpg', Text: '第八張圖片' },
  ];

  /* 當currentSlide改變時，觸發useEffect */
  useEffect(() => {
    /* 每3秒呼叫nextSlide()換下一張圖 */
    const autoplay = setInterval(() => {
      nextSlide();
    }, 3000);

    /* 每3秒後移除autoplay，這樣才能取得最新的currentSlide索引編號 */
    return () => {
      clearInterval(autoplay);
    }
  }, [currentSlide]);


  /* 上一張輪播圖片 */
  const prevSlide = () => {
    /* 取得前一張的索引編號，檢查是否為第一個編號 */
    /* 是 => 跳到最後一張 ， 否 => 跳回前一張 */
    setCurrentSlide((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  }

  /* 下一張輪播圖片 */
  const nextSlide = () => {
    /* 取得前一張的索引編號，檢查是否為最後一個編號 */
    /* 是 => 回第一張 ， 否 => 跳下一張 */
    setCurrentSlide((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  }

  /* 建立左右控制按鈕(元件) */
  const Arrow = ({ direction, onClick }) => (
    /* 擺放icon的區域 */
    <div style={{
      position: 'absolute',
      top: '50%',
      cursor: 'pointer',
      color: 'white',
      [direction]: '50px', /* 將icon拆開並調整間距，數字越大分越開，在style裡面要使用解構的變數用 => [] */
    }}>
      {
        direction === 'left' ? (
          <IoIosArrowDropleftCircle size={70} onClick={onClick} />
        ) : (
          <IoIosArrowDroprightCircle size={70} onClick={onClick} />
        )
      }
    </div>
  )

  return (
    <>
      {/* 滿版最外層 */}
      <div className="wrapper" style={{
        display: 'flex',
        maxWidth: '100vw',
        height: '100vh',
        margin: 'auto',
      }}>
        {/* 輪播區 */}
        <div style={{
          backgroundImage: `url(${slides[currentSlide].URL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
        }}>
          {/* 輪播文字區 */}
          <h2 style={{
            color: 'white',
            textAlign: 'center',
            lineHeight: '100vh',
          }}>{slides[currentSlide].Text}</h2>
          {/* 上一張按鈕 */}
          <Arrow direction="left" onClick={prevSlide} />
          {/* 下一張按鈕 */}
          <Arrow direction="right" onClick={nextSlide} />
        </div>
      </div>
    </>
  )
}