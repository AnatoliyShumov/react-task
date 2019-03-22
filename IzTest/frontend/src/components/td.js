import React from "react";


class TD extends React.Component {
    constructor(props) {
        super(props)
        const{type, person} = props;
        this.state = {
            type,
            person,
            editing: false,
            prevValue: this.props.person[type],
            value: this.props.person[type],
        }
    }

    handleClickTD = () => {
        if (this.state.editing === false) {
            this.setState({editing: true})
        }
    }
    handleChangeInput = (e) => {
        const value = e.target.value
        this.setState({value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {type, value} = this.state;
        this.setState({
            editing: false,
            prevValue: value
        })

        this.setState(prevState => ({
            person: {
                ...prevState.person,
                [type]: value
            }
        }))
    }

    handleCancel = () => {
        const{prevValue} = this.state;
        this.setState({
            editing:false,
            value: prevValue
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const{person} = this.state;
        const{onChangeTable} = this.props;
        if(person !== prevState.person) {
            onChangeTable(person)
        }
    }

    render() {
        const {editing, value, type} = this.state
        // винести в окрему функцію
        if(!!editing) {
            return (
                <td type={`td-${type}`}>
                    <form onSubmit={this.handleSubmit} >
                        <input type="text" value={value} onChange={this.handleChangeInput}/>
                        <input type="submit"  value="save"/>
                        <input type="button" value="cancel" onClick={this.handleCancel}/>
                    </form>
                </td>
            )
        }
        else{
            return (
                <td type={`td-${type}`} onClick={this.handleClickTD}>{value}</td>
            )
        }
    }

}

export default TD