import { useEffect } from 'react';
import $ from 'jquery';

function App() {

  useEffect(() => {
    // 移入 => mouseover()、mouseenter()
    // 移出 => mouseout()、mouseleave()
    // 移動 => mousemove()
    // X、Y座標 => pageX、pageY
    // 取得HTML內容 => html()
    // 淡入 => fadeIn()
    // 淡出 => fadeOut()
    // 速度 => 毫秒() 或 (slow、normal、fast)
    // 尋找指定的名稱 => has()
    // 新增html元素 => append()
    // 取得子元素 => children()

    $('a:has(.ttpShow)').on('mouseover', function (e) {
      $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
      $('#ttpPanel').css({
        top: (e.pageY + 10) + 'px',
        left: (e.pageX + 10) + 'px'
      }).fadeIn('fast');
    }).on('mouseout', function () {
      $('#ttpPanel').remove();

    }).on('mousemove', function (e) {
      $('#ttpPanel').css({
        top: (e.pageY + 10) + 'px',
        left: (e.pageX + 10) + 'px'
      });
    })

    // $('a:has(.ttpShow)').mouseover(function (e) {
    //   $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
    //   $('#ttpPanel').css({
    //     top: (e.pageY + 10) + 'px',
    //     left: (e.pageX + 10) + 'px'
    //   }).fadeIn('fast');
    // }).mouseout(function (e) {
    //   $('#ttpPanel').remove();
    // }).mousemove(function (e) {
    //   $('#ttpPanel').css({
    //     top: (e.pageY + 10) + 'px',
    //     left: (e.pageX + 10) + 'px'
    //   });
    // })
  }, [])

  return (
    <>
      <h2>ToolTip顯示說明</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur,&nbsp; {/* 文字空格 => &nbsp; */}
        <a href="#">
          adipisicing
          <span className='ttpShow'>adipisicing內容說明...</span>
        </a>
        &nbsp;elit. Sunt reiciendis aliquid sit praesentium recusandae aperiam dolores hic quae necessitatibus exercitationem nam in, veniam quaerat tenetur, aut suscipit quod incidunt magni mollitia! Aut quibusdam aliquam molestias optio, repellendus debitis ad? Perferendis necessitatibus, reiciendis recusandae consectetur ea repellat nihil fugiat veritatis. Odio quia at delectus tenetur error maiores officiis odit alias, saepe reprehenderit, dicta quibusdam eum illum. Quam eligendi amet reiciendis, aliquam recusandae laborum est cumque mollitia exercitationem reprehenderit, nesciunt distinctio soluta facilis molestiae adipisci optio saepe voluptatibus blanditiis incidunt sequi nihil, officiis officia in! Corporis labore eum voluptate, esse praesentium quos non eligendi sint tempore aperiam magni. Quo, consectetur. Officia architecto vel dolorum quaerat eaque ut sequi inventore soluta minima reiciendis, tenetur, reprehenderit recusandae ipsam eveniet eligendi? Maxime, labore culpa ducimus, rem quod veritatis est et fugit eum officia earum assumenda voluptatem cum. Reprehenderit voluptatibus veniam eum repellat consectetur nam incidunt perferendis natus excepturi soluta! Non culpa quia commodi ipsam vero dolor illum perspiciatis eligendi veritatis, deserunt voluptatem corrupti? Reprehenderit, nemo provident voluptatum aliquam maxime unde doloribus voluptate aspernatur distinctio quas. Repudiandae veritatis unde rem vel officiis suscipit expedita corporis nihil quibusdam numquam veniam doloribus, assumenda molestias, quo fugiat tempore reprehenderit! Labore ipsa quas quo eius iure consequuntur doloremque non qui ea itaque. Maiores obcaecati harum veniam voluptates velit minima reiciendis consequatur&nbsp;
        <a href="#">
          voluptatibus
          <span className='ttpShow'><img style={{ width: '100px' }} src="./images/03.jpg" alt="" /></span>
        </a>
        &nbsp;incidunt, voluptate, totam dolor, officiis nisi impedit explicabo dicta veritatis expedita necessitatibus assumenda vero numquam cupiditate! Beatae provident minus error et modi ipsum, ducimus est obcaecati temporibus suscipit sunt. Saepe repellendus rerum magnam quia mollitia, deserunt reprehenderit sapiente, hic beatae itaque, incidunt quo harum similique quisquam quidem sed natus odio sequi laboriosam possimus? Adipisci ullam praesentium iste quas rerum commodi saepe exercitationem aut temporibus quis sint, possimus quibusdam aspernatur sapiente nisi et iure itaque! Autem, cumque sunt? Dignissimos fugit ipsam dolorem ullam corporis harum ab atque assumenda distinctio, a, eligendi laboriosam ducimus et odit! Rerum quos unde dolorem in ex expedita alias consequatur! Quisquam eveniet ad veritatis maiores necessitatibus quas et quod ratione at aliquid repellendus dolorum eius porro quam perspiciatis numquam, doloremque minus rerum distinctio! Facere inventore autem iusto fuga, doloribus ab dolor. Quas eligendi atque quos architecto vero, tempore facere quasi corporis, numquam, itaque repellendus ex sint odio dolorem facilis excepturi asperiores quia perspiciatis aut? Quisquam eius quasi dolorem necessitatibus quis, maiores doloribus ea optio voluptatum delectus placeat, totam libero aspernatur repellendus aliquid incidunt assumenda voluptate reprehenderit. Laudantium corporis facere doloribus? Maxime consequatur animi dolores veniam obcaecati, id velit, debitis illum repudiandae rem rerum tempore, enim adipisci. Voluptates labore libero cum, dicta quasi, impedit quo est reprehenderit ad itaque dolore eligendi facilis, voluptatem quos! Repellendus consequatur quia dolore natus hic inventore, quasi pariatur deserunt sint officiis est optio, eum repudiandae, odio esse itaque voluptatibus aut doloribus perferendis adipisci quaerat distinctio labore eveniet asperiores! Necessitatibus laudantium libero omnis obcaecati molestiae, asperiores, vel, corporis odit est quas aliquam. Voluptatibus, atque eos exercitationem omnis perspiciatis, aperiam illum, veniam provident asperiores iste quibusdam fuga ab non beatae quasi a saepe.
      </p>
    </>
  )
}

// CSS在這
// a{
//   text-decoration: underline;
//   color: red;
//   cursor: pointer;
// }

// a:hover{
//   text-decoration: none;
// }

// .ttpShow{
//   display: none;
// }

// #ttpPanel{
//   padding: 15px;
//   width: 200px;
//   text-align: left;
//   border: 3px solid #ccc;
//   position: absolute;
//   z-index: 999;
//   background-color: white;
//   display: none;
// }


export default App