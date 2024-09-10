export default async function AddEvent(image64Url,  titleRef, descriptionRef, categoryeRef, priceRef, placeRef, dateRef, timeRef, e, buttonRef, refund100Ref, isChecked){
    
    var dateAndTime = dateRef.current.value + "T" + timeRef.current.value;
    var imageUrl = await getImageUrl({image64Url});
    console.log(isChecked);
     

    try{
        (async () => {
          const rawResponse = await fetch('http://localhost:8080/api/events/add?refund100=' + refund100Ref.current.value + '&refund24=' + isChecked, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title : titleRef.current.value,
              description: descriptionRef.current.value,
              price : priceRef.current.value,
              category : categoryeRef.current.value,
              dateAndTime : dateAndTime,
              place : placeRef.current.value,
              imageUrl : imageUrl
              })
              
          });
          var response = await rawResponse.text();
          if(rawResponse.status == 200){
              alert(response);
          }
        })();
      }catch(err){
          console.error(err);
          buttonRef.current.textContent = "Add item";
      }
      
}

async function getImageUrl(){
    var img = ""
    var i64 = document.getElementById("hiddenSrc").src;
    for(let i = 23; i < i64.length; i++){
        img = img + i64[i]
    }
    console.log(img)
    

    var form = new FormData();
    form.append("image", img)
    try {
      const response = await fetch('https://api.imgbb.com/1/upload?key=c8333c8f143afc76b9ed9efa9cec0aa0', {
          method: 'POST',
          
        body : form
         
          
      });
  
      const imgResponse = await response.json();
      console.log(imgResponse.data.display_url);
      
      if(!Object.keys(imgResponse).length){
        console.log("no data found");
    }else{
        return imgResponse.data.display_url;
      }
      
  } catch (error) {
    console.log(error);
  }
}