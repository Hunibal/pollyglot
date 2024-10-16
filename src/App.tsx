import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Input from './components/Input'
import Result from './components/Result'
import OpenAI from 'openai'

type Message = {
  role: 'system' | 'user' | 'assistant'
  content: string
}

type ChatCompletionResponse = {
  choices: {
    message: {
      content: string | null
    }
  }[]
}

export default function App() {
  const [ translation, setTranslation ] = useState<boolean>(false)
  const [ textRequest, setTextRequest ] = useState<string>('')
  const [ language, setLanguage ] = useState<string>('')
  const [ translatedText, setTranslatedText ] = useState<string>('Test')

  const apiKey = import.meta.env.VITE_OPENAI_API_KEY

  async function translate(event: React.MouseEvent<HTMLButtonElement>) {
  event.preventDefault()
  const openai = new OpenAI({
    dangerouslyAllowBrowser: true,
    apiKey: apiKey
  })

  const messages: Message[] = [
    {
      role: 'system',
      content: 'You are a helpful translator. only output the translated text.'
    },
    {
      role: 'user',
      content: `Translate the following text into ${language}: ${textRequest}`
    }
  ]

  const response: ChatCompletionResponse = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages
  })

    setTranslatedText(response.choices[0].message.content ?? "Translation not available.");
  
  setTranslation(true)
  }

  function restart(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setTranslation(false);
    setTextRequest('');
    setLanguage('');
  }

  return (

      <main className='w-96 border-4 border-slate-200 bg-white dark:bg-gray-900 rounded-md'>
        <Header />
        <section className='main-wrapper border-2 border-black dark:border-white rounded-md p-4 m-4'>
          { !translation ? <Input translate={translate} 
                                  textRequest={textRequest} 
                                  setTextRequest={setTextRequest}
                                  language={language}
                                  setLanguage={setLanguage} 
                                  /> : 
                            <Result restart={restart}
                                    textRequest={textRequest}
                                    translatedText={translatedText}
                                    /> }
        </section>
      </main>
  )
}

