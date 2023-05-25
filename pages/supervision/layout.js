import React from `react`;


export default function Layout({ children }) {
    return (
        <div>
            <h2>Hellow world</h2>
            <div>
                Announcements: Tomorrow is a holiday!
            </div>
            <div>
                {children}
            </div>
        </div>)
}
