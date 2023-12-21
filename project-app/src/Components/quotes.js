import QuoteItem from "./quoteitems";

function Quotes(items){

    //returns the quote and reload method
    return items.myQuotes.map(
        (quote)=>{
            return <QuoteItem myQuote={quote} key={quote._id} Reload={() => { items.reloadData();}}></QuoteItem>
        }
    );
}

export default Quotes;