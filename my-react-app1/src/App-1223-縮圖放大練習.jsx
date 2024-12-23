import { useState } from 'react';
import img1 from '/images/01.jpg';
import img2 from '/images/02.jpg';
import img3 from '/images/03.jpg';
import img4 from '/images/04.jpg';

export default function App() {

  /* 建立目前縮圖的變數 */
  const [currentImg, setCurrentImg] = useState(0);

  /* 建立圖片陣列 */
  const arrPhotos = [img1, img2, img3, img4];

  return (
    <>
      <div className="wrapper">
        <section style={{
          // display: 'flex',
          width: '700px',
          // justifyContent: 'space-around',
          margin: '50px auto',
          textAlign: 'center',
          backgroundColor: 'lightgray',
        }}>

          {/* 大圖區 */}
          <div>
            <img src={arrPhotos[currentImg]} alt="photos" width={580} height={400}/>
          </div>

          {/* 縮圖區 */}
          <div style={{ 
            display: 'flex', 
            // flexDirection: 'column', 
            justifyContent: 'space-between',
            margin: '20px auto',
            width: '580px',
            }}>

            {/* <img src={arrPhotos[0]} alt="photos" width={100} height={80} />
            <img src={arrPhotos[1]} alt="photos" width={100} height={80} />
            <img src={arrPhotos[2]} alt="photos" width={100} height={80} />
            <img src={arrPhotos[3]} alt="photos" width={100} height={80} /> */}

            {arrPhotos.map((item, index) => {
              return (
                <img key={index} src={item} alt="photos" width={120} height={80} 
                onMouseOver={(e) => {
                  e.target.style.scale = 1.5;
                  e.target.style.cursor = 'pointer';
                  setCurrentImg(index);
                }}
                onMouseOut={(e) => {
                  e.target.style.scale = 1;
                }}
                />
              )
            })}
            
          </div>
          
        </section>
      </div>
    </>
  )
}