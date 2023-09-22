//React render a component
const Hello = () => {
    const name = props.name;
    return (<h1> Hello {name} </h1>);
}



ReactDOM.render(<Hello name="Francis"></Hello>, document.getElementById('root'));

<div id="root"></div>