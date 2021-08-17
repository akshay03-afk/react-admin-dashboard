import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import "./userList.css";

const UserList = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) =>{
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'user',
          headerName: 'User',
          renderCell: (params) => {
              return (
                  <div className="userListUser">
                      <img className="userListImage" src={params.row.avatar} alt="" />
                      {params.row.username}
                  </div>
              )
          },
          width: 150,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
      
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 160,
        },
        {
            field: 'transactions',
            headerName: 'Transactions',
            width: 160,
        },
        {
            field: 'actions',
            headerName: 'Action',
            width: 150,
            renderCell: (params) =>{
                return (
                    <>
                    <Link to={"/user/"+ params.row.id}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)}/>
                    </>
                )
            }
        },
    ];
    return (
        <div className="userList">
            <DataGrid
                rows={data}
                columns={columns}
                disableSelectionOnClick
                pageSize={10}
                checkboxSelection
                
            />
        </div>
    )
}

export default UserList;
