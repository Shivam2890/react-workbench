import React, { useState } from "react";

const users = [
    { id: 1, name: "John Doe", email: "john@gmail.com" },
    { id: 2, name: "Jane Smith", email: "jane@gmail.com" },
    { id: 3, name: "Robert Brown", email: "robert@gmail.com" },
    { id: 4, name: "Alice Johnson", email: "alice@gmail.com" },
    { id: 5, name: "David Wilson", email: "david@gmail.com" },
    { id: 6, name: "Emily Davis", email: "emily@gmail.com" },
    { id: 7, name: "Shivam Kori", email: "shivam@gmail.com" },
];

const SearchFillter = () => {
    // const [data, setData] = useState([...users])
    const [input, setInput] = useState("");


    function handleChange(e) {
        // const searchText = e.target.value.toLowerCase()
        setInput(e.target.value);
        // setData(filterData)
    }

    const filterData = users.filter((item) => item.name.toLowerCase().includes(input.toLowerCase())) //now don't need to store the users data it causes me the driven state thats why get rid of the data state

    return (
        <div>
            <center>
                <input type="text" value={input} onChange={handleChange} />

                {
                    filterData.length === 0 ? (
                        <p>No user found</p>
                    ) : (
                        filterData.map((item) => (
                            <div key={item.id}>
                                <ul>
                                    <li>{item.name}</li>
                                    <li>{item.email}</li>
                                </ul>
                            </div>
                        )))
                }
            </center>
        </div>
    );
};

export default SearchFillter;
