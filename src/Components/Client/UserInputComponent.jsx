import { useEffect, useState } from "react";

const UserInputComponent = () => {

    const [enterTime,setEnterTime] = useState();
    const [leaveTime,setLeaveTime] = useState();
    const [data,setData] = useState({name:"",employeeName:"",reason:"",enterTime:"",leaveTime:""});

    useEffect(() => {
        const myInterval = setInterval(() => {
          const date = new Date();
          let hour = date.getHours();
          let minute = date.getMinutes();
          let meridian = (hour<12)?" A.M":" P.M"
          hour = (hour<12)?hour:hour-12;
          minute = (minute<10)?"0"+minute:minute;
          const time_now = (hour+":"+ minute + meridian);
          const estimated_time = (minute>=30)?(hour+1)+":"+"0"+((minute-60)+30) + meridian:hour+":"+(parseInt(minute)+30)+meridian ;
          setEnterTime(time_now);
          setLeaveTime(estimated_time);
        }, 10);
    
        return () => {
          clearInterval(myInterval);
        }
    });

    const handleInput = (event) => {
        setData({...data,[event.target.name]:event.target.value});
    };

    return (
        <div>
            <form className="user-input-form">
                <div className="register-user-title">Register User</div>
                <hr/>
                <div className="user-field-title"><strong>Name:</strong></div>
                <input type="text" placeholder="What's your name?" value={"" || data.name} onChange={handleInput}/>
                <br/>
                <div className="user-field-title"><strong>Employee Name:</strong></div>
                <input type="text" placeholder="Who do you want to visit?" value={"" || data.employeeName}/>
                <br/>
                <div className="user-field-title"><strong>Reason:</strong></div>
                <textarea placeholder="What's your reason for this visit?" value={"" || data.reason}/>
                <br/>
                <div style={{display:"flex"}}>
                    <div style={{display:"flex",flexDirection:'column'}}>
                        <div className="user-field-title"><strong>Enter time:</strong></div> 
                        <div>{enterTime}</div>
                    </div>
                    <div style={{display:"flex",flexDirection:'column',margin:"0 0 0 75px"}}>
                        <div className="user-field-title"><strong>Leave time:</strong></div> 
                        <div>{leaveTime}</div>
                    </div>
                </div>
                <br/>
                <div style={{display:"flex"}}><p className="error">*</p>please note that the allowed time for visit is only 30 minutes</div>
                <button className="submit-button" style={{margin:"10px 0px", height:"38px", width:"100%",color:"white"}}>
                    <div style={{fontSize:"17px",fontWeight:"700"}}>submit</div>
                </button>
            </form>
        </div>
    );
}

export default UserInputComponent;