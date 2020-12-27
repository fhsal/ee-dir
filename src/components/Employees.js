import React from "react";
import "../styles/Employees.css";
import Moment from "moment";

const Employees = (props) => {

// using Moment to format date from API response

  let formattedDate = Moment(props.dob).format("LL");

// returning employee info with first and last name concatenated together + formatted date

  return (
    <tr className="tr">
      <td style-prop="margin-top: 10px" >
      <img  alt={props.firstName} src={props.icon} /></td>
      <td>{props.firstName} {props.lastName}</td>
      <td>{props.email}</td>
      <td>{props.phone} </td>
      <td>{formattedDate}</td>
    </tr>
  );
};

export default Employees;
