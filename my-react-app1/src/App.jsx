import $ from 'jquery'
import { useEffect } from 'react';

export default function App() {

  // 寫法1：過時的寫法使用hover
  //useEffect(() => {
  // $(".cssAnimation1").hover(function () {
  //   $(this).addClass("imgScale");
  // }, function () {
  //   $(this).removeClass("imgScale");
  // })
  //}, [])

  // 寫法2：建議的寫法
  useEffect(() => {
    $(".cssAnimation1").on("mouseenter", function () {
      $(this).addClass("imgScale");
    }).on("mouseleave", function () {
      $(this).removeClass("imgScale");
    })
  }, [])


  return (
    <div>
      <a href="#" className="cssAnimation1">
        <img src="./images/03.jpg" alt="" />
      </a>
    </div>
  )
}