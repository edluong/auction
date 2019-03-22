//Root App
class AuctionApp extends React.Component{
    render(){
        return (
            <div>
                <Display />
                <Input />
            </div>
            );
    }
};

// Display Component
// This will display the Auction amounts on the screen
// This will be displayed in a list form, with latest bid on the screen first
class Display extends React.Component{
    render() {
        return (
            <div>
                Display component!
            </div>
        )
    }
};

// Input Component
// This is used to have the user enter their name and dollar amount
class Input extends React.Component{
    render() {
        return (
            <div>
                Input Component!
            </div>
        )
    }
}

// Render the Auction App on to the app div
ReactDOM.render(<AuctionApp />, document.getElementById('app'));