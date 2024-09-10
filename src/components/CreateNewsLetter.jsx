import React, { useEffect, useRef, useState } from "react";
import SubmittingSvg from "../assets/svg/SubmittingSvg";
import GeneratingSvg from "../assets/svg/GeneratingSvg";


export default function CreateNewsLetter(){
    const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);
    const [isGeneratingContent, setIsGeneratingContent] = useState(false);

    const promtInput = useRef();
    const newsletterInput = useRef();

    const [newsletterText, setNewsletterText] = useState("");

    const handleNewsletterSubmit = async () => {
        setIsSubmittingNewsletter(true);
        await sendNewsletters(newsletterInput.current.value);
        setIsSubmittingNewsletter(false);
        
    };

    const handlePromptSubmit = async () => {
        setIsGeneratingContent(true);
        await sendAiPrompt(promtInput.current.value, newsletterInput);
        setIsGeneratingContent(false);
    };

    return (
                <div className="min-h-screen bg-white 
                                flex flex-col items-start 
                                justify-start p-6">
                    <div className="w-full max-w-lg bg-white 
                                    shadow-lg rounded-lg p-8 
                                    space-y-6 border-2">
                        <div>
                            <label className="block text-lg font-semibold 
                                            text-gray-700 mb-2">
                                Newsletter Text
                            </label>
                            <textarea className="w-full px-4 py-2 border 
                                                border-gray-300 rounded-lg 
                                                focus:outline-none focus:ring-2 
                                                focus:ring-orange-400 h-48"
                                id="newsletter"
                                rows="4"
                                placeholder="Write your newsletter content here..."
                                ref={newsletterInput}>
                            </textarea>
                            <button
                                onClick={handleNewsletterSubmit}
                                className={`mt-3 w-full py-2 bg-gradient-to-r 
                                        from-orange-400 to-red-500 
                                        text-white font-bold rounded-lg 
                                        hover:from-orange-500 hover:to-red-600 
                                        transition-colors duration-300 flex 
                                        items-center justify-center ${
                                isSubmittingNewsletter ? 'cursor-not-allowed' : ''
                                }`}

                                disabled={isSubmittingNewsletter}>
                                {isSubmittingNewsletter ? (
                                <SubmittingSvg/>
                                ) : null}
                                {isSubmittingNewsletter ? 'Submitting...' : 'Submit Newsletter'}
                            </button>
                        </div>
                        <div>
                            <label className="block text-lg font-semibold 
                                            text-gray-700 mb-2">
                                Prompt
                            </label>
                            <textarea className="w-full px-4 py-2 border 
                                                border-gray-300 rounded-lg 
                                                focus:outline-none focus:ring-2 
                                                focus:ring-blue-400"
                                    id="prompt"
                                    rows="2"
                                
                                placeholder="Enter a prompt to generate content..."
                                ref={promtInput}>
                                {newsletterText}
                            </textarea>
                            <button
                                onClick={handlePromptSubmit}
                                className={`mt-3 w-full py-2 bg-gradient-to-r 
                                        from-blue-400 to-purple-500 text-white 
                                        font-bold rounded-lg hover:from-blue-500 
                                        hover:to-purple-600 transition-colors duration-300 
                                        flex items-center justify-center ${
                                isGeneratingContent ? 'cursor-not-allowed' : ''
                                }`}
                                disabled={isGeneratingContent}>
                                {isGeneratingContent ? (
                                <GeneratingSvg/>
                                ) : null}
                                {isGeneratingContent ? 'Generating...' : 'Generate Content'}
                            </button>
                        </div>
                    </div>
                </div>
        )


}
async function sendAiPrompt(text, newsletterInput){
    
    const response = await fetch('http://localhost:8080/api/ai/generate?message=' + text, {
    method: 'GET',
    headers: {
       'Content-Type': 'application/json',
    },
    
   });
    

    newsletterInput.current.value = await response.text();
}
async function sendNewsletters(text) {
    const response = await fetch('http://localhost:8080/send/newsletter?text=' + text, {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
        },
        
       });
}
