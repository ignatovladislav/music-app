import React, { Component } from 'react'
import ReactDOM from "react-dom";

export default class Modal extends Component {
	render() {
            const { children, open } = this.props
            return open 
                ? ReactDOM.createPortal(<div className="modal">
                    {children}
            </div>,
            document.body) 
            : null
	}
}