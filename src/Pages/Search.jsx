import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProduct } from "../Redux/ProductSlice";

const Search = () => {
    const [data, setMydata] = useState("");
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        const value = e.target.value;
        setMydata(value);
        dispatch(searchProduct(value)); // Dispatch search action
    };

    return (
        <div>
            <input
                type="text"
                value={data}
                onChange={handleSearch}
                id="Search"
                placeholder="Search by name"
                style={{
                    padding: "10px",
                    width: "100%",
                    border: "1px solid black",
                    borderRadius: "4px",
                }}
            />
        </div>
    );
};

export default Search;
