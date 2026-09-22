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
    const [activeTab, setActiveTab] = useState(tabs[0].id)

    function handleClick(id) {
        // if (id == activeTab) {
        //     setActiveTab(null)
        //     return
        // }
        setActiveTab(id)
    }   

    const activeContent = tabs.find((item) => item.id === activeTab)
    return (
        <div>
            <div className='flex gap-2 m-2.5 justify-center'>
                {tabs.map((item) => (
                    <div key={item.id} >
                        <button
                            className={activeTab === item.id ? "bg-amber-300 border p-2" : "bg-gray-200 border p-2"}
                            onClick={() => handleClick(item.id)}
                        >{item.label}</button>
                    </div>
                ))}
            </div>

            <p className='text-center text-2xl mt-8 '>{activeContent.content}</p>
        </div>
    )
}

export default TabSwitcher