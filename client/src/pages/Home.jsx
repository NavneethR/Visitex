import { useContext, useEffect, useState } from "react";
import HomeLayout from "../Components/Layouts/HomeLayout";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [content, setContent] = useState([]);
  const rootname = user === null ? "" : user.name;
  const navigate = useNavigate();

  useEffect(() => {
    console.log("hi");
    (async () => {
      try {
        const res = await fetch("http://localhost:8000/api/visitor-list", {
          method: "GET",
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        let Content = await res.json();
        Content = Object.values(Content);
        console.log(Content);
        setContent(Content);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (content.length != 0) {
    console.log(content.length);
  }

  return (
    <div className="m-5 ">
      <br />
      <h2>Hello {rootname},</h2>
      <hr />
      <p>Welcome to visitor management system, where things get simplified </p>
      <br />
      <h2>Visitor's List</h2>
      <hr />
      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">Visitor Name</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Reason</th>
            <th scope="col">Enter time</th>
            <th scope="col">Photo</th>
          </tr>
        </thead>
        <tbody className="table-active">
          {content.map((element, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{element.visitorName}</td>
              <td>{element.employeeName}</td>
              <td>{element.reason}</td>
              <td>{element.enterTime}</td>
              <td>
                <img src={element.photo} style={{ height: "150px" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
