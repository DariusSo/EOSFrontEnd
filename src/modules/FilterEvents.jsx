export default async function FilterEvents({minPrice, maxPrice, minDate, maxDate, category, setData}){
     
    try{
        (async () => {
          const rawResponse = await fetch('http://localhost:8080/api/events/getFiltered?minPrice=' + minPrice +'&maxPrice='+ maxPrice +'&minDate='+ minDate +
            '&maxDate='+ maxDate +'&category=' + category, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            
              
          });
          var response = await rawResponse.json();
          if(rawResponse.status == 200){
              console.log(response)
              setData(response)
          }
        })();
      }catch(err){
          console.error(err);
      }
      
}