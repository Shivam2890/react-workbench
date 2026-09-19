import React, { useState } from 'react'


const tabs = [
    {
        id: "profile",
        label: "Profile",
        content: "This is the Profile section."
    },
    {
        id: "settings",
        label: "Settings",
        content: "This is the Settings section."
    },
    {
        id: "messages",
        label: "Messages",
        content: "This is the Messages section."
    }
];
const TabSwitcher = () => {
    const [open, setOpen] = useState(tabs[0].id)
    function handleClick(id) {
        if (id == open) {
            setOpen(null)
            return
        }
        setOpen(id)
    }
    return (
        <div>
            <div>
                {tabs.map((item) => (
                    <div key={item.id} className='flex gap-2 border m-2.5 justify-center'>
                        <button
                            className='bg-amber-200 border-amber-300 p-2'
                            onClick={() => handleClick(item.id)}
                        >{item.label}</button>
                        {open === item.id && <p>{item.content}</p>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TabSwitcher