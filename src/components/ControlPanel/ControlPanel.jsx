import "./ControlPanel.css"


export default function ControlPanel({ staffCount, data, users, currentOption, path }) {    
    const setStatus = (status) => {
        if (status === "completed") {
            return (
                <div className="status status-done">
                    <div className="status-icon done"></div>
                    <div className="title done-title">Completed</div>
                </div>
            )
        }
        if (status === "pending") {
            return (
                <div className="status status-pending">
                    <div className="status-icon pending"></div>
                    <div className="title pending-title">Pending</div>
                </div>
            )
        }
        if (status === "in-progress") {
            return (
                <div className="status status-in-progress">
                    <div className="status-icon in-progress"></div>
                    <div className="title in-progress-title">In Progress</div>
                </div>
            )
        }
    }

    const iconByOption = (option) => {
        switch (option) {
            case "Control Panel":
                return "control-panel"
                
            case "Variables":
                return "variables"
            case "Docs":
                return "docs"
            case "Dashboard":
                return "dashboard"
            case "Help":
                return "help"            
        }        
    }

    return (
        <div className="control-panel">
            {
                // path
            }
            <div className="path-container">
                <div className="current-option">
                    <div className={"current-option-logo " + iconByOption(currentOption) + "-logo"}></div>
                    <div className="current-option-title">{currentOption}</div>
                </div>
                {
                    path.map((value, key) => {
                        return (
                            <div key={key} className="current-path">
                                <div className="arrow-path"></div>
                                <div>
                                    <a className="path" href="#">{value}</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {
                // user logo
            }
            <div className="user-logo"></div>

            {
                // staff users and sales
            }
            <div className="staff-sales">
                <div className="data-container">
                    <div className="logo-and-title">
                        <div className="data-logo"></div>
                        <div className="data-title">Staff Users</div>                        
                    </div>
                    <div className="count">{staffCount}</div>
                </div>
                {
                    data.map((data, key) => {
                        return (
                            <div key={key} className="data-container">
                                <div className="logo-and-title">
                                    <div className={"data-logo " + data.logo}></div>
                                    <div className="data-title">{data.title}</div>
                                </div>
                                <div className="count">{data.count} EUR</div>
                                <div className="when">{data.when}</div>
                            </div>
                        )
                    })
                }
            </div>

            {
                // table
            }
            <div className="users-data">
                <table>
                    <tbody>
                        <tr className="titles">
                            <th className="user-id">ID</th>
                            <th className="user-name">USERNAME</th>
                            <th className="user-date">DATE & TIME</th>
                            <th className="user-amount">AMOUNT</th>
                            <th className="user-status">STATUS</th>
                        </tr>
                        {
                            users.map((user, key) => {
                                return (
                                    <tr className="received-data" key={key}>
                                        <td className="user-id">{user.id}</td>
                                        <td className="user-name">{user.username}</td>
                                        <td className="user-date">{user.date}</td>
                                        <td className="user-amount">{user.amount} €</td>
                                        <td className="user-status">{setStatus(user.status)}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>                    
                </table>
            </div>

            {
                // staff users panel
            }
            <div className="staff-users-panel">
                <div className="logo-and-title">
                    <div className="data-logo"></div>
                    <div className="data-title">Staff Users</div>
                </div>
                <div className="count">{staffCount}</div>
            </div>
        </div>
    )
}