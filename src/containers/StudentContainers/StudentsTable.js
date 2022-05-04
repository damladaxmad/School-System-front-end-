import React, { useState } from "react";
import MaterialTable from "material-table";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const StudentsTable = (props) => {
  const columns = [
   
    { title: "First Name", field: "first_name" },
    { title: "Middle Name", field: "middle_name" },
    { title: "Last Name", field: "last_name" },
    { title: "Sex", field: "sex" },
    { title: "Parent", field: "parent" },
    { title: "City", field: "city" },   
    { title: "Fee", field: "monthlyFee" },
    { title: "Phone", field: "phone" },
    
  ];
  return (
    <div style={{ width: "95%", margin: "auto" }}>
      <MaterialTable
        columns={columns}
        data={props.data}
        options={{
          rowStyle: {},
          showTitle: false,
          selection: true,
          sorting: false,
          showTextRowsSelected: false,
          toolbar: false,
          pageSizeOptions: [2, 5, 8, 10, 20, 25, 50, 100],
          pageSize: 8,
          actionsColumnIndex: -1,
          headerStyle: { background: "#EFF0F6", fontSize: "13px" },
        }}
        // onSelectionChange={(rows) => alert('You selected ' + rows + ' rows')}
        actions={[
          {
            icon: () => <BiDotsHorizontalRounded />,
            tooltip: "Save User",
            onClick: (event, rowData) => alert("You clicked " + rowData.first_name),
            position: "row",
          },
        ]}
        style={{ borderRadius: "10px", boxShadow: "none" }}
      />
    </div>
  );
};

export default StudentsTable;
