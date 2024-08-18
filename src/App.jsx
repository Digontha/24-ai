import { useState } from 'react'
import chatImage from "./assets/image/chatbot.webp"
import logo from "./assets/image/logo-transparent-png.png"
import axios from 'axios'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

// Access the API key from the environment variable
const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [loading, setLoading] = useState(false)

  async function generatorText() {
    setLoading(true)

    // Use the apiKey variable in the URL
    const response = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      method: "POST",
      data: { contents: [{ parts: [{ text: question }] }] }
    })

    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
    setLoading(false)
  }

  return (
    <>
      <main className='bg-gradient-to-t from-gray-900 to-slate-400 min-h-screen h-full'>
        <nav>
          <div className='flex items-center justify-between 2xl:px-[20%] px-5 pt-5'>
            <div>
              <img className='w-10 h-10' src={logo} alt="Logo" />
            </div>
            <div className="flex justify-center gap-4 items-center mt-5 text-xl">
              <a href="https://www.linkedin.com/in/digontha-das-04a1562a5"><FaLinkedin /></a>
              <a href="https://github.com/Digontha"><FaGithub /></a>
              <a href="https://www.facebook.com/digontha.das.7"><FaFacebook /></a>
            </div>
          </div>
        </nav>
        
        <header>
          <div className='flex flex-col justify-center items-center'>
            <img className='2xl:w-[600px] 2xl:h-[600px] mt-20' src={chatImage} alt="Chatbot" />
          </div>
        </header>

        <section>
          <div className="flex justify-center items-center 2xl:my-10 my-0">
            <div>
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Add your question..."
                className="p-2 focus:outline-1 bg-gradient-to-t from-pink-100 to-slate-400 focus:outline-blue-500 font-bold border-[0.1px] resize-none border-[#9EA5B1] rounded-md 2xl:w-[60vw] xl:w-[60vw] lg:w-[60vw] md:w-[60vw] w-[300px]"
              ></textarea>
              <div className="flex justify-end">
                <button onClick={generatorText} className="font-semibold btn bg-pink-500 text-white px-10">
                  Post
                </button>
              </div>
            </div>
          </div>

          <div className='bg-[#1C2333]'>
            <p className='text-white text-xl font-normal font-poppins 2xl:w-[60%] w-[80%] mx-auto'>
              {loading ? <progress className="progress w-full progress-success"></progress> : answer}
            </p>
          </div>
        </section>

        <footer className="footer footer-center text-white p-4">
          <aside>
            <p className='font-medium'>Copyright © {new Date().getFullYear()} - All right reserved by DIGONTHA</p>
          </aside>
        </footer>
      </main>
    </>
  )
}

export default App
