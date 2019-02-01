import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

//This is the explanation of how to convert the oldSyntax method 
//to class properties and make the code shorter


// class OldSyntax {
//     constructor() {
//         this.name = 'Mike';
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting() {
//         return `Hey. My name is ${this.name}.`;
//     }
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());
// // -----------------------
// class NewSyntax {
//     name = 'fab';
//     getGreeting = () => {
//         return `Hey.My name is ${this.name}.`;
//     }
// }
// const nes = new NewSyntax()
// const newGetGreeting = nes.getGreeting;

// console.log(newGetGreeting());



/////--------------PASSING JSX or CHILDREN TO COMPONENTS-------/////

// const Layout = (props) => {
//     return (
//         <div>
//             <p>Header</p>
//             {/* {props.content} */}
//             {props.children}
//             <p>Footer</p>
//         </div>
//     )
// }

// const newStyle = (
//     <div>
//         <h1>This is  a  new Style</h1>
//         <p>Check this out</p>
//     </div>
// );

// // ReactDOM.render(<Layout content={newStyle} />, document.getElementById('app'));

// // ReactDOM.render(<Layout>
// //     <p>This is in line</p>
// // </Layout>, document.getElementById('app'));