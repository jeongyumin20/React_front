// Empemployee.jsx (src - components)
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Table from "react-bootstrap/Table" // 컴포넌트로 미리 만들어진 것이라 대문자

export default function Empemployee(){
  const [empList, setEmpemployee] = useState([]);
  useEffect(() => {
    // 서버 연동 작업 : axios
    axios.get('http://127.0.0.1:8000/') // {data: {서버결과}}
    // 서버에서 결과를 객체로 전송 (객체 메모리에 덩어리로 존재하고 누가 가르키고 있는 것 : 가르키는 주소가 넘어옴 )
    .then((result) => {
      // console.log(result); // [object object] => {result : {data:{서버결과}}}
      // console.log(result.data[0].emp_name); 
      setEmpemployee(result.data);
    })
    .catch((err) => console.log(err));
  }, [] );

  return(
    <>
      <h2>Employees</h2>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>번호</th>
              <th>사원아이디</th>
              <th>사원명</th>
              <th>입사일</th>
              <th>부서</th>
              <th>폰번호</th>
              <th>이메일</th>
            </tr>
          </thead>
          <tbody>
          { empList.map((employee) => 
              <tr>
                <td>{employee.rno}</td>
                <td>{employee.emp_id}</td>
                <td>{employee.emp_name}</td>
                <td>{employee.hire_date}</td>
                <td>{employee.dept_id}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
              </tr>
          )}
          </tbody>
        </Table>
    </>
  );
}