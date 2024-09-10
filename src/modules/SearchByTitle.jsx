export default async function SearchByTitle({ searchText, setData }){
     
    try{
        (async () => {
          const rawResponse = await fetch('http://localhost:8080/api/events/search/title?text=' + searchText, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            
              
          });
          console.log(rawResponse.status)
          if(rawResponse.status == 404){
            setData([])
          }
          
          if(rawResponse.status == 200){
                var response = await rawResponse.json();
              setData(response)
          }
          
        })();
      }catch(err){
          console.error(err);
      }
      
}