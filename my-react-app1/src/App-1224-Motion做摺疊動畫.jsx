import { AnimatePresence, motion } from "motion/react"
import { act, useState } from "react";
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";

export default function App() {
  const [activeQuestionId, setActiveQusetionId] = useState(null);

  /* 摺疊資料 */
  const questions = [
    {
      id: 1,
      question: "題目1",
      answer: "答案1",
    },
    {
      id: 2,
      question: "題目2",
      answer: "答案2",
    },
    {
      id: 3,
      question: "題目3",
      answer: "答案3",
    },
  ];


  return (
    <>
      {/* 最外層 */}
      <div className="wrapper" style={{
        backgroundColor: 'black',
        color: '#ccc',
        maxWidth: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {/* FAQ區塊 */}
        <div className="faq" style={{
          width: '80%',
          backgroundColor: 'rgba(201, 171, 171, 0.8)',
          borderRadius: '5px',
          boxShadow: '0 0 10px #777',
          padding: '10px',
        }}>
          {/* 主標題 */}
          <h2 style={{
            marginBottom: '10px',
            textAlign: 'center',
          }}>FAQ列表</h2>

          {
            /* 帶出陣列資料*/
            questions.map((q) => {
              return (
                // <motion.div key={q.id} layout>
                //   <div style={{
                //     display: 'flex',
                //     justifyContent: 'space-between',
                //     alignItems: 'center',
                //     padding: '10px',
                //     margin: '10px 0',
                //     backgroundColor: 'rgba(255, 255, 255, 0.8)',
                //     borderRadius: '5px',
                //     cursor: 'pointer',
                //   }}>
                //     <h3 style={{ margin: 0 }}>{q.question}</h3>
                //     <span>+</span>
                //   </div>
                // </motion.div>
                <div key={q.id} style={{ marginBottom: '10px' }}>
                  {/* QA按鈕 */}
                  <button style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '10px',
                    width: '100%',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    border: 'none',
                    outline: 'none',
                    alignItems: 'center',
                    fontSize: '1.2rem',
                  }}
                    onClick={() =>
                      setActiveQusetionId(q.id === activeQuestionId ? null : q.id)}
                  >
                    {/* 帶出題目 */}
                    {q.question}
                    {/* 加減號icon */}
                    {
                      activeQuestionId === q.id ? <FaSquareMinus /> : <FaSquarePlus />
                    }
                  </button>
                  {/* 摺疊扭動畫 motion */}
                  <AnimatePresence>
                    {
                      /* 作用中的ID與被展開的ID相同時 */
                      activeQuestionId === q.id && (
                        <motion.div
                          key={q.id}
                          /* 初始化 */
                          initial={{ opacity: 0, height: 0 }}
                          /* 展開動畫 */
                          animate={{ opacity: 1, height: 'auto' }}
                          /* 關閉動畫 */
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            // backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            // borderRadius: '5px',
                            padding: '10px',
                            margin: '10px 0',
                            color: 'White',
                            fontSize: '1.2rem',
                          }}
                        >
                          {/* 帶出答案 */}
                          {q.answer}
                        </motion.div>
                      )
                    }
                  </AnimatePresence>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}