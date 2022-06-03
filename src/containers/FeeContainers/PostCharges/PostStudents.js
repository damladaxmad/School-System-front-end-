import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Typography, Button, MenuItem, Menu, Avatar } from "@mui/material";
import "./Posts.css";
import { useSelector } from "react-redux";
import axios from "axios";

const PostStudents = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [show, setShow] = useState(false);
  const [student, setStudent] = useState();

  const examCharges = useSelector((state) => state.exams.examCharges);
  const feeCharges = useSelector((state) => state.fees.feeCharges);
  const allCharges = examCharges.concat(feeCharges);

  console.log(allCharges);

  const columns = [
    { title: "StudentId", field: "studentId" },
    { title: "Student Full Name", field: "fullName", width: "2%" },
    { title: "Class", field: "className" },
    { title: "Phone", field: "phone" },
    { title: "Credit", field: "credit" },
    { title: "Debit", field: "debit" },
    { title: "Balance", field: "balance" },
  ];

  //   const showModal = () =>{
  //     setShow(true)
  //     handleClose()
  //   }

  //   const hideModal = () =>{
  //     setShow(false)
  //     props.change()
  //   }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, student) => {
    setAnchorEl(event.currentTarget);
    setStudent(student);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const postCharges = async (students, chargeId, type) => {
    const response =
      type == "exam"
        ? await axios
            .get(
              `api/v1/transactions/postExamCharges?students=${students}&examId=${chargeId}`
            )
            .then(() => alert("Successfully Charged Exam"))
            .catch((err) => console.log(err))
        : await axios
            .get(
              `api/v1/transactions/postFeeCharges?students=${students}&feeChargeId=${chargeId}`
            )
            .then(() => alert("Successfully Charged Fee"))
            .catch((err) => console.log(err));
  };

  const itemsClickHandler = (chargeId, type) => {
    handleClose();
    postCharges(student._id, chargeId, type);
  };

  return (
    <div style={{ width: "98%", margin: "auto" }}>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        style={{}}
      >
        {allCharges.map((charge) => (
          <MenuItem onClick={() => itemsClickHandler(charge._id, charge.type)}>
            {charge.name}
          </MenuItem>
        ))}
      </Menu>

      {/* <div>
<ul>
  <li><a href="#">Pages <i ></i></a>

      <div class="dropdown-menu">
          <ul>
          <li>
              <a href="#">Exam Charge <i class="fas fa-caret-right"></i></a>
              </li>
            <li>
              <a href="#">Fee Charge <i class="fas fa-caret-right"></i></a>
              
              <div class="dropdown-menu-1">
                <ul>
                  <li><a href="#">January</a></li>
                  <li><a href="#">February-2</a></li>
                  <li><a href="#">March-3</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
  </li>
</ul>
</div> */}
      <MaterialTable
        columns={columns}
        data={props.data}
        options={{
          rowStyle: {},
          showTitle: false,
          selection: true,
          exportButton: true,
          sorting: false,
          showTextRowsSelected: false,
          toolbar: false,
          pageSizeOptions: [2, 5, 8, 10, 20, 25, 50, 100],
          pageSize: 8,
          draggable: false,
          // rowStyle: {
          //   overflowWrap: 'break-word'
          // },
          actionsColumnIndex: -1,
          headerStyle: { background: "#EFF0F6", fontSize: "13px" },
        }}
        // onSelectionChange={(rows) => selectionHandler(rows)}
        actions={[
          {
            icon: () => (
              <BiDotsHorizontalRounded
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              />
            ),
            tooltip: "Save User",
            onClick: (event, rowData) => {
              handleClick(event, rowData);
            },
            position: "row",
          },
        ]}
        style={{ borderRadius: "10px", boxShadow: "none" }}
      />
    </div>
  );
};

export default PostStudents;
