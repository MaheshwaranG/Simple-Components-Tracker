import React, { Compoent } from "react";
import { connect } from "react-redux";


class ContentArea extends Compoent{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className=""></div>
        )
    }
}

export default connect()(ContentArea)
