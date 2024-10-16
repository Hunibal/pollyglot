import React from "react"

type ResultProps = {
    restart: React.MouseEventHandler<HTMLButtonElement>
    textRequest: string
    translatedText: string
  }

export default function Result({ restart, textRequest, translatedText }: ResultProps) {
    return (
        <form className="input-form flex flex-col space-y-4">
                <label className="text-xl font-bold">Original Text 👇</label>
                <textarea className="bg-slate-200 p-4 bg-slate-700 p-4 text-black dark:text-white text-xl" 
                          rows={4} 
                          placeholder="Your original request..." 
                          defaultValue={textRequest} 
                          />
                <label className="text-xl font-bold">Your Translation 👇</label>
                <textarea className="bg-slate-200 p-4  bg-slate-700 p-4 text-black dark:text-white text-xl" 
                          rows={4} 
                          placeholder="Your translated text..." 
                          defaultValue={translatedText} />
                <button type="button" 
                        className="flex items-center justify-center text-2xl bg-blue-600 dark:bg-blue-900 rounded-lg text-white font-bold h-12" 
                        onClick={restart}>Restart</button>
            </form>
    )
}