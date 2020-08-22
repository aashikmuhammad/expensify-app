import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: { props.info}</p>
    </div>
)
const withAdminWarning = (WrappedComponents) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is admin without authention</p>}
            <WrappedComponents { ...props}/>
        </div>
    )
}
const requireAuthentication = (WrappedComponents) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <p>This is admin with authention</p> : <p>Please login</p>}
        </div>
    )
}

const Authinfo = requireAuthentication(Info);
const Admininfo = withAdminWarning(Info);

ReactDOM.render(<Authinfo isAuthenticated={true} info="Information" />, document.getElementById('app'));
// ReactDOM.render(<Admininfo isAdmin={true} info="Information" />, document.getElementById('app'));
