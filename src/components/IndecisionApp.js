import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    //class property
    state = {
        options: [],
        selectedOption: undefined
    }
    // constructor(props) {
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     this.state = {
    //         options: []
    //     };
    // }
    handleDeleteOptions = () => {
        // handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }
    removeModule = () => {
        this.setState(() => ({ selectedOption: undefined }));

    }
    handleDeleteOption = (optionToRemove) => {
        // handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    handlePick = () => {
        // handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option })

        );

    }
    handleAddOption = (option) => {
        // handleAddOption(option) {
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
    componentDidMount = () => {
        // componentDidMount() {

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
    componentDidUpdate = (prevProps, prevState) => {
        // componentDidUpdate(prevProps, prevState) {
        //if our old state object has a different length to the current then I save the data
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount = () => {
        // componentWillUnmount() {
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

    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    removeModule={this.removeModule}
                />
            </div>
        );
    }
}

export default IndecisionApp