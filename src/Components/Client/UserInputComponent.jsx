import { useEffect, useState } from "react";

const UserInputComponent = () => {

    const [enterTime,setEnterTime] = useState();
    const [leaveTime,setLeaveTime] = useState();
    const [data,setData] = useState({name:"",employeeName:"",reason:"",enterTime:"",leaveTime:""}); 
    const [photo, setPhoto] = useState(false);
    const [done, setDone] = useState(false);

    useEffect(() => {
        const myInterval = setInterval(() => {
          const date = new Date();
          let hour = date.getHours();
          let minute = date.getMinutes();
          let meridian = (hour<12)?" A.M":" P.M"
          hour = (hour<12)?hour:hour-12;
          minute = (minute<10)?"0"+minute:minute;
          const time_now = (hour+":"+ minute + meridian);
          const estimated_time = (minute>=30)?(hour+1)+":"+((minute+30)-60) + meridian:hour+":"+(parseInt(minute)+30)+meridian ;
          setEnterTime(time_now);
          setLeaveTime(estimated_time);
        }, 10);
    
        return () => {
          clearInterval(myInterval);
        }
    });

    const handleInput = (event) => {
        setData((data)=> {return {...data,[event.target.name]:event.target.value}});
        console.log(data)
    };

    return (
        <div>
            <form className="user-input-form">
                {console.log(done)}
                {(!done)?
                <div>
                <div className="register-user-title">Register User</div>
                <hr/>
                <div className="user-field-title"><strong>Name:</strong></div>
                <input type="text" placeholder="What's your name?" name="name" value={ data.name||""} onChange={handleInput}/>
                <br/>
                <div className="user-field-title"><strong>Employee Name:</strong></div>
                <input type="text" placeholder="Who do you want to visit?" name="employeeName" value={data.employeeName||""} onChange={handleInput}/>
                <br/>
                <div className="user-field-title"><strong>Reason:</strong></div>
                <textarea placeholder="What's your reason for this visit?" name="reason" value={data.reason||""} onChange={handleInput}/>
                <br/>
                <div style={{display:"flex",width:"auto"}}>
                    <div style={{display:"flex",flexDirection:'column',width:"50%"}}>
                        <div className="user-field-title"><strong>Enter time:</strong></div> 
                        <div>{enterTime}</div>
                    </div>
                    <div style={{display:"flex",flexDirection:'column',width:"50%"}}>
                        <div className="user-field-title"><strong>Leave time:</strong></div> 
                        <div>{leaveTime}</div>
                    </div>
                </div>
                <div style={{display:"flex",marginTop:"5px"}}><p className="error">*</p>Max visit time is 30 mins</div>
                <br/>
                
                <button className="submit-button" style={{margin:"0px 0px", height:"38px", width:"100%",color:"white"}}>
                    <div style={{fontSize:"17px",fontWeight:"700"} }>submit</div>
                </button>
                </div>
                :
                <div  style={{position:"absolute"}}>
                    <div style={{position:"relative",top:"200px",left:"105px"}}>Visitor Registered!</div>
                    <button className="submit-button" style={{position:"relative",top:"220px",left:"144px"}}>back</button>
                </div>
                }
            </form>
        </div>
        
    );
}

export default UserInputComponent;