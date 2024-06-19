const UserInputComponent = () => {
    return (
        <div>
            <form className="user-input-form">
                <div className="register-user-title">Register User</div>
                <hr/>
                <div className="user-field-title"><strong>Name:</strong></div>
                <input type="text"/>
                <br/>
                <div className="user-field-title"><strong>Employee Name:</strong></div>
                <input type="text"/>
                <br/>
                <div className="user-field-title"><strong>Reason:</strong></div>
                <textarea/>
                <br/>
                <div className="user-field-title"><strong>Enter time:</strong></div> 
            </form>
        </div>
    );
}

export default UserInputComponent;