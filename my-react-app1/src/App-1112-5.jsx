
function App() {
  /* 建立物件變數 */
  // const person = {
  //   s1: {
  //     name: "楊沅承",
  //     age: 221,
  //   },
  //   s2: {
  //     name: "又是楊沅承",
  //     age: 222,
  //   },
  //   s3: {
  //     name: "還是楊沅承",
  //     age: 223,
  //   }
  // }

  {/* 多筆資料的物件解構寫法1：一般寫法 */ }
  // const { s1, s2, s3 } = person;

  /* 多筆資料的物件解構寫法2：解構+展開...(旗魚運算子) */
  /* 解構s1，展開s2,s3 */
  // const { s1, ...other } = person;
  // console.log(s1);
  // console.log(other.s3);

  const person = {
    name: "楊沅承",
    age: 22,
  }

  // function showName(obj) {
  //   console.log(obj);
  //   console.log(obj.name);
  //   console.log(obj.age);
  // }

  /* 將物件屬性直接解構給函式參數 */
  function showName({ name, age }) {
    console.log(name);
    console.log(age);
  }
  showName(person);

  return (
    <>
      {/* <div>{`同學1姓名：${s1.name}`}</div>
      <div>{`同學2姓名：${other.s2.name}`}</div>
      <div>{`同學3姓名：${other.s3.name}`}</div> */}

      {/* <div>第一位同學姓名:{a1.name}</div>
      <div>第一位同學年齡:{a1.age}</div>
      <hr />
      <div>第二位同學姓名:{a2.name}</div>
      <div>第二位同學年齡:{a2.age}</div>
      <hr />
      <div>第三位同學姓名:{a3.name}</div>
      <div>第三位同學年齡:{a3.age}</div> */}
    </>
  )
}

export default App