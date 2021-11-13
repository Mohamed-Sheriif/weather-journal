
/* Global Variables */
const API_Keys='&appid=0463aac12728657ef94575df02be8116&units=metric';
const API_Url='http://api.openweathermap.org/data/2.5/forecast?zip=';

// adding Eventlistner 
document.querySelector('#generate').addEventListener('click',fetching);



function fetching (){
 const zip_Code = document.querySelector('#zip').value;
 console.log(zip_Code);
 const interests =document.querySelector('#feelings').value;
 console.log(API_Url+zip_Code+API_Keys);
 getApiData (API_Url+zip_Code+API_Keys). 
 then( item=>{
     console.log(item);
    postData('/postData',{item:d ,content:interests.value , temp:item.list[0].main.temp});
    updateDataUI('/allData');

 })

}


async function postData(url = '', data = {}) {
    // Default options are marked with *
    console.log(data);
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    try {
        const data=await response.json();
        return data ;
    }
    catch(error)
    {console.log('error',error)}// parses JSON response into native JavaScript objects
  }
  

  const updateDataUI =async (url='')=>{
   console.log(url);
    const response=await fetch(url) ;
    try {
       
        const allData=await response.json();

        document.getElementById('date').innerHTML=`Date: ${allData.date}`;
        document.getElementById('temp').innerHTML=`Temp: ${allData.temp} C`;
        document.getElementById('content').innerHTML=`content: ${allData.content}`

    }
    catch(error)
    {console.log('error',error)}
};
const getApiData =async (url='')=>{
   
    const response=await fetch(url) ;
    try {
        const data=await response.json();
        return data ;
    }
    catch(error)
    {console.log('error',error)
}};
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
