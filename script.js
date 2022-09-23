//adding event listener to the button
document.getElementById("btn").addEventListener("click", randomchar);

function randomchar(){
    //alert("Hello");
    //to get random number between 0 & 10 and also rounding that number
    let rdnum = Math.round(Math.random() * 10);
    //alert(rdnum);
    //to display random number
    document.getElementById("cnb").innerHTML = rdnum;
    
    //to fetch API
    fetch('https://swapi.dev/api/people/'+rdnum+'/')
        .then(response => response.json())
        .then(data =>{
            //console.log(data)
            const mydata = data;
            document.getElementById("nm").innerHTML = mydata.name;
            document.getElementById("gd").innerHTML = mydata.gender;
            document.getElementById("byr").innerHTML = mydata.birth_year;
            /*console.log(mydata);
            console.log(mydata.name);
            console.log(mydata.gender);
            console.log(mydata.birth_year);*/
            
        })
}