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

class Display extends React.Component{
    render() {
        return (
            <div>
                Display component!
            </div>
        )
    }
};

class Input extends React.Component{
    render() {
        return (
            <div>
                Input Component!
            </div>
        )
    }
}



ReactDOM.render(<AuctionApp />, document.getElementById('app'));