export default function SubmitNewsletterButton(){
    return (
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
                    
    )
}