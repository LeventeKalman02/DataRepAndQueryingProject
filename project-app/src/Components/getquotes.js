import axios from 'axios';

function GetApiQuotes(){
    //gets a random quote from the api
    const getQuote = () => {
        axios.get('http://localhost:4000/api/getquote')
            .then(response => {
                console.log(response.data);

                //save the latest quote to local storage 
                localStorage.setItem("quote", response.data[0].q);
                localStorage.setItem("author", response.data[0].a);

                //display the "h" element of the response which is pre formatted
                document.getElementById("quote").innerHTML = response.data[0].h;
            })
            .catch(error => console.warn(error));
    };
    getQuote();

    //gets the daily quote from the api
    const getDailyQuote = () => {
        axios.get('http://localhost:4000/api/getdailyquote')
            .then(response => {
                console.log(response.data);

                localStorage.setItem("quote", response.data[0].q);
                localStorage.setItem("author", response.data[0].a);
                //display the "h" element of the response which is pre formatted
                document.getElementById("quote").innerHTML = response.data[0].h;
            })
            .catch(error => console.warn(error));
    };

    // window.onload = () => {
    //     document.getElementById("author").value = localStorage.getItem("author");
    // };

    return(
        <div>
            <p id='quote'></p>
            <br />

            {/* button to get random quote */}
            <button onClick={getQuote}>Click To Get A Random Inspirational Quote</button>
            <br/>
            <br/>
            <button onClick={getDailyQuote}>Click To Get The Daily Inspirational Quote</button>
            <br/>
            <br/>
            <a href="/addfavourite"><button>Save This Quote!</button></a>

            {/* footer for the reference to the api  */}
            <footer style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: "50px", backgroundColor: 'lightgray' }}>
                <a href="https://zenquotes.io/" target="_blank">Inspirational quotes provided by ZenQuotes API</a>
            </footer>
        </div>
    );
}

export default GetApiQuotes;

