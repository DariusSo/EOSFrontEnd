import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import FilterEvents from "../../modules/FilterEvents";
import SearchByTitle from "../../modules/SearchByTitle";

export default function CardsPosition({ setData, setIsTidy, isTidy }) {

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(9999);
    const [minDate, setMinDate] = useState(dateFormatter(Date()));
    const [maxDate, setMaxDate] = useState("2030-01-01");
    const [category, setCategory] = useState("All");
    const [allCategories, setAllCategories] = useState([]);
    const [searchText, setSearchText] = useState("");


    const handleFilter = () => {
        FilterEvents({ minPrice, maxPrice, minDate, maxDate, category, setData })
    };
   
    useEffect(() => {
        fetch('http://localhost:8080/api/events/categories')
        .then(response => response.json())
        .then(data1 => setAllCategories(data1))
        .catch(err => console.log(err))
    },[])
    useEffect(() => {
        FilterEvents({ minPrice, maxPrice, minDate, maxDate, category, setData });
    },[])
    useEffect(() => {
        SearchByTitle({ searchText })
    },[searchText])

    return (
        <>
        <nav className="border-b-4 border-l-4 border-r-4 
                        border-lime-300 bg-lime-50">
            <div className="flex items-center justify-center 
                            z-10 relative p-5 space-x-4">
                <div className="flex items-center space-x-2">

                    <label className="text-lg font-semibold text-lime-700">
                        Search:
                    </label>

                    <input  
                        type="text"
                        value={searchText}
                        onChange={(e) => {setSearchText(e.target.value)
                            SearchByTitle({ searchText, setData})
                        }}
                        placeholder="Search by title"
                        className="px-2 py-1 border rounded-lg focus:outline-none 
                                    focus:ring-2 focus:ring-lime-500">
                    </input>

                    <label className="text-lg font-semibold text-lime-700">
                        Price:
                    </label>

                    <input  
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        placeholder="Min"
                        className="px-2 py-1 border rounded-lg focus:outline-none 
                                    focus:ring-2 focus:ring-lime-500">
                    </input>

                    <span>-</span>

                    <input 
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        placeholder="Max"
                        className="px-2 py-1 border rounded-lg focus:outline-none 
                                    focus:ring-2 focus:ring-lime-500">
                    </input>

                </div>

                <div className="flex items-center space-x-2">

                    <label className="text-lg font-semibold text-lime-700">
                        Date:
                    </label>
                    <input 
                        type="date"
                        value={minDate}
                        onChange={(e) => setMinDate(e.target.value)}
                        className="px-2 py-1 border rounded-lg focus:outline-none 
                                    focus:ring-2 focus:ring-lime-500">
                    </input>
                        
                    <span>-</span>

                    <input
                        type="date"
                        value={maxDate}
                        onChange={(e) => setMaxDate(e.target.value)}
                        className="px-2 py-1 border rounded-lg focus:outline-none 
                                        focus:ring-2 focus:ring-lime-500">
                    </input>
                    
                </div>

                <div className="flex items-center space-x-2">

                    <label className="text-lg font-semibold text-lime-700">
                        Category:
                    </label>

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="px-3 py-1 border rounded-lg focus:outline-none 
                                    focus:ring-2 focus:ring-lime-500">
                        <option value="All">All</option>
                        {allCategories.map((category, index) => (
                            <option value={category} key={index}>{category}</option>
                        )

                        )}
                    </select>
                </div>

                <button
                    onClick={handleFilter}
                    className="px-3 py-2 bg-gradient-to-r from-orange-300 
                            to-red-300 text-white font-semibold rounded-lg 
                            hover:from-orange-700 hover:to-red-700 
                            transition-colors duration-300 drop-shadow-lg">
                    Apply Filters
                </button>
                    {isTidy ? 
                    (
                        <button className="px-3 py-2 bg-gradient-to-r from-orange-300 to-red-300 
                                        text-white font-semibold rounded-lg hover:from-orange-700 
                                        hover:to-red-700 transition-colors duration-300 drop-shadow-lg"
                                onClick={() => {setIsTidy(false);
                                    console.log(isTidy)
                                }}>
                            Browse
                        </button>
                    ) : (
                        <button className="px-3 py-2 bg-gradient-to-r from-orange-300 
                                        to-red-300 text-white font-semibold rounded-lg 
                                        hover:from-orange-700 hover:to-red-700 transition-colors 
                                        duration-300 drop-shadow-lg"
                                onClick={() => {setIsTidy(true)}}>
                            I want more tidy look
                        </button>
                            
                    )
                    }
            </div>
        </nav>
        </>
    );
}

function dateFormatter(value) {
    var date = new Date(value);
    var years = date.getFullYear();
    var months = leadZero(date.getMonth() + 1);
    var days = leadZero(date.getDate());
  
    return years + '-' + months + '-' + days;
  }
  function leadZero(n) { return n>9 ? n : "0" + n; }
  
