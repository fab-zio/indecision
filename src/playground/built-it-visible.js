
// JSX - JavaScript XML

const app = {
    title: "Indecision App",
    subtitle: "What a story",
    options: []
};
const onFormSubmit = (e) => {
    //prevent method for a default behaviour. the full page refresh
    e.preventDefault();
    //this const will hold the value
    const option = e.target.elements.option.value;
    //check if there is an event typed in
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderData();
    }
};
const wipe = () => {
    app.options = [];
    renderData();

}
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);

}
// const user = {
//     name: 'Fabrizio',
//     age: 32,
//     location: 'Rome'

// }
// function getLocation(location) {
//     if (location) {
//         return <p>location: {location}</p>;
//     }

// }
// const templateTwo = (
//     <div>
//         {/* Ternary Operator if the condition true pass the first otherways the second*/}
//         <h1>{user.name ? user.name : 'Aonymous'}</h1>
//         {/* logical AND operator */}
//         {(user.age >= 18) && <p>Age: {user.age}</p>}
//         {/* JSX EXPRESSION */}
//         {getLocation(user.location)}
//     </div>
// );
const appRoot = document.getElementById('app');
// const numbers = [55, 101, 1000];

const renderData = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options.length > 0) ? "Here are your options" : "No options"}</p>
            <p>{app.options.length}</p>
            {/* <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button> */}
            <button disabled={app.options.length <= 2} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={wipe}>Remove All</button>
            {/* {
                numbers.map((number) => <p key={number}>Number: {number}</p>)
                //here below I show that JSX support  array just Numbers and strings but ignore boolean and doesn't support object
                // [99, 98, 97, "Mike", null, undefined, true],
                // [    <p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]
            } */}

            <ol>
                {app.options.map((item) => <li key={item}>{item}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);

}

renderData(); console.log('App.js is !');

// JSX - JavaScript XML

const app = {
    title: "Indecision App",
    subtitle: "What a story",
    options: []
};
const onFormSubmit = (e) => {
    //prevent method for a default behaviour. the full page refresh
    e.preventDefault();
    //this const will hold the value
    const option = e.target.elements.option.value;
    //check if there is an event typed in
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderData();
    }
};
const wipe = () => {
    app.options = [];
    renderData();

}
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);

}
// const user = {
//     name: 'Fabrizio',
//     age: 32,
//     location: 'Rome'

// }
// function getLocation(location) {
//     if (location) {
//         return <p>location: {location}</p>;
//     }

// }
// const templateTwo = (
//     <div>
//         {/* Ternary Operator if the condition true pass the first otherways the second*/}
//         <h1>{user.name ? user.name : 'Aonymous'}</h1>
//         {/* logical AND operator */}
//         {(user.age >= 18) && <p>Age: {user.age}</p>}
//         {/* JSX EXPRESSION */}
//         {getLocation(user.location)}
//     </div>
// );
const appRoot = document.getElementById('app');
// const numbers = [55, 101, 1000];

const renderData = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options.length > 0) ? "Here are your options" : "No options"}</p>
            <p>{app.options.length}</p>
            {/* <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button> */}
            <button disabled={app.options.length <= 2} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={wipe}>Remove All</button>
            {/* {
                numbers.map((number) => <p key={number}>Number: {number}</p>)
                //here below I show that JSX support  array just Numbers and strings but ignore boolean and doesn't support object
                // [99, 98, 97, "Mike", null, undefined, true],
                // [    <p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]
            } */}

            <ol>
                {app.options.map((item) => <li key={item}>{item}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);

}

renderData();