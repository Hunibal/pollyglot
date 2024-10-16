import React from "react"

type InputProps = {
    translate: React.MouseEventHandler<HTMLButtonElement>
    textRequest: string
    setTextRequest: React.Dispatch<React.SetStateAction<string>>
    language: string
    setLanguage: React.Dispatch<React.SetStateAction<string>>
  }

export default function Input({ translate, textRequest, setTextRequest, language, setLanguage }: InputProps) {

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextRequest(event.target.value)
        console.log(textRequest)
    }

    const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLanguage(event.target.value)
        console.log(language)
    } 

    return (
        <>
            <form className="input-form flex flex-col space-y-4">
                <label className="text-xl font-bold">Text to translate 👇</label>
                <textarea className="bg-slate-200 dark: bg-slate-700 p-4 text-black dark:text-white text-xl" 
                          rows={4} 
                          placeholder="e.g. How are you?" 
                          onChange={handleTextChange} 
                          />
                <label className="text-xl font-bold">Select language 👇</label>
                <section className="lang-choice flex flex-col space-y-0">
                    <section className="radio-button px-4 text-left">
                        <input type="radio" 
                               id="german" 
                               name="trans_language" 
                               value="German"
                               checked={language === 'German'}
                               onChange={handleLanguageChange}
                               />
                        <label htmlFor="german" className="pl-2">German</label>
                    </section>
                    <section className="radio-button px-4 text-left">
                        <input type="radio" 
                               id="french" 
                               name="trans_language" 
                               value="French"
                               checked={language === 'French'}
                               onChange={handleLanguageChange} 
                               />
                        <label htmlFor="french" className="pl-2">French</label>
                    </section>
                    <section className="radio-button px-4 text-left">
                        <input type="radio" 
                               id="norwegian" 
                               name="trans_language" 
                               value="Norwegian" 
                               checked={language === 'Norwegian'}
                               onChange={handleLanguageChange}
                               />
                        <label htmlFor="norwegian" className="pl-2">Norwegian</label>
                    </section>
                </section>
                <button type="button" 
                        className="flex items-center justify-center text-2xl  dark:bg-blue-900 bg-blue-600 rounded-lg text-white font-bold h-12" 
                        onClick={translate}>
                    Translate
                </button>
            </form>
        </>
    )
}