
/* Global Variables */
const API_Url='https://api.openweathermap.org/data/2.5/weather?zip=';
const API_Keys='&appid=10aacb01930767b42f7ecf259d0cb7c0&units=metric';

  // adding event listener on the button
  document.getElementById('generate').addEventListener('click' , fetching);
//resbonsible in displaying the information on the browser
const dataUpdating = async () => {
    const req = await fetch('/getting');
    try{
        const allDatta = await req.json();
        document.querySelector('#date').innerHTML = `Date: ${allDatta.date}`;
        document.querySelector('#temp').innerHTML = `temp: ${allDatta.temp}`;
        document.querySelector('#content').innerHTML = `feeling : ${allDatta.content}`;
    }catch(error){
        console.log("error" , error);
    }
}

const dataPostiong = async (url = '' , data = {})=>{
    console.log(data);
    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
       // Body data type must match "Content-Type" header        
        body: JSON.stringify(data)
      });
  
        try {
          const newData = await response.json();
          console.log(newData);
          return newData;
        }catch(error) {
        console.log("error", error);
        }
}


//getting data from API
const getDataFromApi = async (url , zipCode , apiKey)=>{
    const res = await fetch(url+zipCode+apiKey)
    try{
        const data = await res.json();
        return data;
    }catch(error){
        console.log('error' , error);
    }
}

function fetching(ev){
    const getZip = document.getElementById('zip').value;
    const interests = document.getElementById('feelings').value;
    console.log(getZip);
    getDataFromApi(API_Url , getZip , API_Keys).then((data)=>{
        console.log(data);
        dataPostiong('/posting' , {date:newDate , temp:data.main.temp , content:interests})
    }).then(() => dataUpdating())

}

let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
