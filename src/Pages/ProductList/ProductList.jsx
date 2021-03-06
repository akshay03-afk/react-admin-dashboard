import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import "./productlist.css";

const ProductList = () => {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) =>{
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'product',
          headerName: 'Products',
          renderCell: (params) => {
              return (
                  <div className="productListItem">
                      <img className="productListImage" src={params.row.img} alt="" />
                      {params.row.name}
                  </div>
              )
          },
          width: 250,
        },
        {
          field: 'stock',
          headerName: 'Stock',
          width: 150,
      
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 160,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'actions',
            headerName: 'Action',
            width: 150,
            renderCell: (params) =>{
                return (
                    <>
                    <Link to={"/product/"+ params.row.id}>
                        <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)}/>
                    </>
                )
            }
        },
    ];

    return (
        <div className="productList">
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

export default ProductList
