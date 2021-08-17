import React from 'react';
import { Link } from 'react-router-dom';
import "./product.css";
import Chart from "../../components/Charts/Chart";
import {productData} from "../../dummyData";
import { Publish } from '@material-ui/icons';

const Product = () => {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart 
                        data={productData} 
                        dataKey="Sales"
                        title="Sales Performance"
                    />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://m.media-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg" alt="product" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">Id:</span>
                            <span className="productInfoValue">1</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales:</span>
                            <span className="productInfoValue">4000</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Active:</span>
                            <span className="productInfoValue">Yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">In Stock:</span>
                            <span className="productInfoValue">No</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple Airpod"/>
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://m.media-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg" alt="product" className="productUploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none"}} />
                        </div>
                        <button className="productUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product;
