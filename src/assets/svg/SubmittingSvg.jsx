export default function SubmittingSvg(){
        return (
                <svg className="animate-spin h-5 w-5 text-white mr-2"
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24">
                            <circle className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4">
                            </circle>
                            <path className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0c-5.523 
                                    0-10 4.477-10 10h4zm2 5.291l1.853-1.853a7.967 
                                    7.967 0 001.09 1.08L6 17.25v-5.96z"
                            ></path>
                        </svg>
        )
}