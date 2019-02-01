console.log('running!!');


class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            title: 'Visibility Toggle',
            visibility: false,
            show: 'Show details',
            hide: 'Hide details',
            message: 'Hey. These are some details you can now see!'
        }
    }
    handleToggleVisibility() {
        this.setState((e) => {
            return {
                visibility: !this.state.visibility,
            }
        })

    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? this.state.hide : this.state.show}</button>
                {this.state.visibility && (<p>{this.state.message}</p>)}
            </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const togglePage = {
//     title: 'Visibilty Toggle',
//     show: 'Show details',
//     hide: 'Hide details',
//     message: 'Hey. These are some details you can now see!'
// }

// let visibility = false;

// console.log(visibility);
// const toggleVisibility = () => {
//     // reverse the initial variable
//     visibility = !visibility;
//     render1()
// }
// const render1 = () => {

//     const toggle = (
//         <div>
//             <h2>{togglePage.title}</h2>
//             <button onClick={toggleVisibility}>{visibility ? togglePage.hide : togglePage.show}</button>
//             {visibility && (
//                 <p>{togglePage.message}</p>
//             )}


//         </div>
//     );
//     ReactDOM.render(toggle, document.getElementById('app'));

// }
// render1();