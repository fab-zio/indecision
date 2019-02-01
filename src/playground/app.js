class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        };
    }
    componentDidMount() {
        //this is useful for catch bad data and avoid it
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        //if our old state object has a different length to the current then I save the data
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    /////////Here below two method for deleting options first one so called explicit
    // or we can make it shorter by using the implicit method;


    // handleDeleteOptions() {
    //     this.setState(() => {
    //         return {
    //             options: []
    //         };
    //     });
    // }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        // this condition is going to say . if i get empty string
        if (!option) {
            return 'Enter valid value to add item';
        }
        //this cond. says that if I enter something already exist, back to the array
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        //////////////////explicit method////////
        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat(option)
        //     };
        // });
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}
//////////////Default Prop Value///////////////////

IndecisionApp.defaultProps = {
    options: []
};
///////////Stateless Functional Component///////////////////

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }
const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
      </button>
        </div>
    );
};
//  class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What should I do?
//         </button>
//             </div>
//         );
//     }
// }
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
};
// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option} />)
//                 }
//             </div>
//         );
//     }
// }
const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
      </button>
        </div>
    );
};
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        ////////////////explicit method
        // this.setState(() => {
        //     return { error };
        // });
        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
// class IndecisionApp extends React.Component {
//     render() {
//         const title = 'Indecision';
//         const subtitle = 'Put your life in the hands of a computer';
//         const options = ['Thing one', 'Thing two', 'Thing four'];
//         return (
//             <div>
//                 <Header title={title} subtitle={subtitle} />
//                 <Action />
//                 <Options options={options} />
//                 <AddOption />
//             </div>
//         );
//     }
// }
// //React and React dom are the 2 Global we can extend and Component is the class it self and component require the method render to be valid
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

// class Action extends React.Component {
//     handlePick() {
//         alert('handlePick');
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handlePick}>What should I do?</button>
//             </div>
//         )
//     }
// }

// class Options extends React.Component {
//     constructor(props) {
//         //without super I cannot have access to this.props
//         super(props)
//         this.handleRemoveAll = this.handleRemoveAll.bind(this);
//     }
//     handleRemoveAll() {
//         console.log(this.props.options);

//         alert('hey, I am working');
//     }
//     render() {
//         return (
//             <div>
//                 {/* this one below is a non efficient way to bind, because I need to repeat it in every line
//                 , a better way is to define bind at the beginning of the class */}
//                 {/* <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button> */}
//                 <button onClick={this.handleRemoveAll}>Remove All</button>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option} />)
//                 }

//             </div>

//         )
//     }
// }
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         )
//     }
// }
// class AddOption extends React.Component {
//     handleAddOption(e) {
//         e.preventDefault();
//         const option = e.target.elements.option.value.trim();
//         if (option) {

//             alert(option)

//             // this.props.options.push(option);
//             // e.target.elements.option.value = '';
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleAddOption}>
//                     <input type="text" name="option" />
//                     <button>Add Option</button>
//                 </form>
//             </div>
//         )
//     }
// }
// //the following example show a prior way to render my jsx variable passing the variable it self  inside ReactDo..render() 
// // const jsx = (
// //     <div>
// //         <h1>Title</h1>
// //         <Header />
// //         <Action />
// //         <Options />
// //         <AddOption />

// //     </div>
// // );

// // ReactDOM.render(jsx, document.getElementById('app'));
// ReactDOM.render(<IndecisionApp />, document.getElementById('app'));