import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';
import checkImg from '../images/check.svg';
import checkCompleteImg from '../images/checkComplete.svg';

class TodoItem extends Component {



    render() {
        const { item, onClick } = this.props;
        let url = checkImg;
        if(item.isComplete){
            url = checkCompleteImg;
        }

        return (
            <div className={classNames("TodoItem", {
                "TodoItem-complete": item.isComplete
            })}>
                <img onClick={onClick} src={url} width={25} height={25}/>
                <p>{this.props.item.title}</p>
            </div>
        )
    }
}

export default TodoItem;