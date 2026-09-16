import React, { useEffect, useMemo, useState } from "react";

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
    const [debounce, setDebounce] = useState("")


    function handleChange(e) {
        // const searchText = e.target.value.toLowerCase()
        setInput(e.target.value);
        // setData(filteredUser)
    }

    const filteredUser = useMemo(() => {
        return users.filter((item) =>
            item.name.toLowerCase().includes(debounce.toLowerCase()) ||
            item.email.toLowerCase().includes(debounce.toLowerCase())
        ) //now don't need to store the users data it causes me the driven state thats why get rid of the data state
    }, [debounce])

    useEffect(() => {
        let delay = setTimeout(() => {
            setDebounce(input)
        },1000)

        return () => {
            clearTimeout(delay)
        }

    }, [input])

    return (
        <div>
            <center>
                <input type="text" value={input} onChange={handleChange} />

                {
                    filteredUser.length === 0 ? (
                        <p>No user found</p>
                    ) : (
                        filteredUser.map((item) => (
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
