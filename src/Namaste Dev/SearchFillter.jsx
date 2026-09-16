import React, { useEffect, useMemo, useRef, useState } from "react";

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
    const [debounceInput, setDebounceInput] = useState("")


    //useRef for persit timer do avoid create the new timer on the every render
    const timerRef = useRef(null)
    function debounceFn(fn, t = 1000) {
        return function (...args) {
            clearTimeout(timerRef.current)
            timerRef.current = setTimeout(() => fn(...args), t)
        }
    }
    function handleChange(e) {
        // const searchText = e.target.value.toLowerCase()
        setInput(e.target.value)
        handleDebounce(e.target.value) //separte input state and debounceInput
        // setData(filteredUser)
    }
    //here the function which take the value in the handleChange and setDebounceInput thorugh the cb
    const handleDebounce = useMemo(
        () => debounceFn((val) => setDebounceInput(val), 1000),
        []
    )

    const filteredUser = useMemo(() => {
        const searchText = debounceInput.toLowerCase()

        return users.filter((item) =>
            item.name.toLowerCase().includes(searchText) ||
            item.email.toLowerCase().includes(searchText)
        ) //now don't need to store the users data it causes me the driven state thats why get rid of the data state
    }, [debounceInput])

    useEffect(() => {
        return () => {
            clearTimeout(timerRef.current)
        }
    }, [])

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
