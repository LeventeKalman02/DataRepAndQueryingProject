import axios from 'axios';

function GetApiQuotes(){
    //gets a random quote from the api
    const getQuote = () => {
        axios.get('http://localhost:4000/quoteapi/getquote')
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
        axios.get('http://localhost:4000/quoteapi/getdailyquote')
            .then(response => {
                console.log(response.data);

                localStorage.setItem("quote", response.data[0].q);
                localStorage.setItem("author", response.data[0].a);
                //display the "h" element of the response which is pre formatted
                document.getElementById("quote").innerHTML = response.data[0].h;
            })
            .catch(error => console.warn(error));
    };
    
    return(
        <div class="page">
            <p id='quote'></p>

            {/* bootstrap buttons for styling */}
            <div class="buttons">
                <button class="btn btn-primary btn-lg" onClick={getQuote}>Click To Get A Random Inspirational Quote</button>
                <button class="btn btn-primary btn-lg" onClick={getDailyQuote}>Click To Get The Daily Inspirational Quote</button>
                <a class="btn btn-primary btn-lg" href="/addfavourite">Save This Quote!</a>
            </div>

            {/* footer for the reference to the api  */}
            <footer class="footer">
                <a href="https://zenquotes.io/" target="_blank">Inspirational quotes provided by ZenQuotes API</a>
            </footer>
        </div>
    );
}

export default GetApiQuotes;

