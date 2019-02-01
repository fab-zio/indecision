console.log('hi there');

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };

    }
    componentDidMount() {
        const numSaved = localStorage.getItem('update');
        // parse Int take a string and change it in a number
        const count = parseInt(numSaved, 10);
        console.log(numSaved);
        //is Non a Number is a kind of check after parse Int
        if (!isNaN(count)) {
            this.setState(() => ({ count }))

        }

    }
    //for saving
    componentDidUpdate(prevProps, prevState) {
        // By adding the if condition I avoid wastage of resources that might
        // cause for instance clicking moore time on reset(because) every time
        // I click data has been stored (and in real data base this is expensive)
        if (prevState.count !== this.state.count) {

            const numSaved = this.state.count;
            localStorage.setItem('update', numSaved);
            console.log(prevState.count);
            console.log(this.state.count);
        }


    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
        // this.state.count = this.state.count + 1;
        // console.log(this.state);
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>Add One</button>
                <button onClick={this.handleMinusOne}>Minus One</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

//////////////Default Prop Value///////////////////
// Counter.defaultProps = {
//     count: 5
// }
ReactDOM.render(<Counter count={-10} />, document.getElementById('app'));
// let count = 0;
// const addOne = () => {
//     count += 1;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count -= 1;
//     renderCounterApp();

// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();

// }
// const templateTwo = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>Reset</button>
//     </div>
// )


// // const user = {
// //     name: 'Fabrizio',
// //     age: 32,
// //     location: 'Rome'

// // }
// // function getLocation(location) {
// //     if (location) {
// //         return <p>location: {location}</p>;
// //     }

// // }
// // const templateTwo = (
// //     <div>
// //         {/* Ternary Operator if the condition true pass the first otherways the second*/}
// //         <h1>{user.name ? user.name : 'Aonymous'}</h1>
// //         {/* logical AND operator */}
// //         {(user.age >= 18) && <p>Age: {user.age}</p>}
// //         {/* JSX EXPRESSION */}
// //         {getLocation(user.location)}
// //     </div>
// // );
// const appRoot = document.getElementById('app');


// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);


// }
// renderCounterApp();