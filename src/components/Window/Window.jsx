import { useEffect, useRef, useState } from "react"
import ControlPanel from "../ControlPanel/ControlPanel"
import { motion } from "framer-motion"
import "./Window.css"


export default function Window() {
    const settingArrow = useRef()
    const discountArrow = useRef()
    const pagesCmsArrow = useRef()

    const settingsSelector = () => {
        return (
            <motion.div
                animate={{
                    width: "100%",
                    height: "100px"
                }}
                className="settings-selector">
            </motion.div>
        )
    }
    const discountSelector = () => {
        return (
            <motion.div
                animate={{
                    width: "100%",
                    height: "100px"
                }}
                className="discount-selector">
            </motion.div>
        )
    }
    const pagesCmsSelector = () => {
        return (
            <motion.div
                animate={{
                    width: "100%",
                    height: "100px"
                }}
                className="discount-selector">
            </motion.div>
        )
    }

    const controlPanel = (path) => {
        return (
            <ControlPanel
                currentOption={path}
                path={[
                    "Dashboard"
                ]}
                staffCount={14}
                data={[
                    {
                        title: "Total In Sales",
                        count: "200.000",
                        when: "All Time",
                        logo: "cash"
                    },
                    {
                        title: "Total In Sales",
                        count: "200.000",
                        when: "Current Month",
                        logo: "calendar"
                    },
                    {
                        title: "Average Payment",
                        count: "13",
                        when: "Current Month",
                        logo: "receipt-refund"
                    }
                ]}
                users={[
                    {
                        id: 12312,
                        username: "FEDERICOSCHI",
                        date: "May 20, 2023 10:34:12",
                        amount: 120,
                        status: "completed" // completed, pending, in-progress
                    },
                    {
                        id: 12311,
                        username: "Feryzz",
                        date: "May 20, 2023 09:12:43",
                        amount: 15,
                        status: "completed" // completed, pending, in-progress
                    },
                    {
                        id: 12310,
                        username: "Cinquanta",
                        date: "May 20, 2023 04:44:02",
                        amount: 27,
                        status: "pending" // completed, pending, in-progress
                    },
                    {
                        id: 12309,
                        username: "NotAffected",
                        date: "May 19, 2023 23:57:52",
                        amount: 59,
                        status: "in-progress" // completed, pending, in-progress
                    },
                    {
                        id: 12308,
                        username: "Ytnoos",
                        date: "May 19, 2023 23:30:59",
                        amount: 12,
                        status: "completed" // completed, pending, in-progress
                    },
                    {
                        id: 12307,
                        username: "MattiaB22",
                        date: "May 19, 2023 22:19:27",
                        amount: 33,
                        status: "completed" // completed, pending, in-progress
                    }
                ]}
            />
        )
    }

    const [settingOpts, setSettingOpts] = useState()
    const [discountOpts, setDiscountOpts] = useState()
    const [pagesCmsOpts, setPagesCmsOpts] = useState()
    const [mainWindow, setMainWindow] = useState(controlPanel("Control Panel"))

    useEffect(() => {
        const options = document.querySelectorAll(".option-content")
        options.forEach(elem => {
            elem.addEventListener("click", () => {
                options.forEach(elem => elem.classList.remove("option-selected"))
                elem.classList.add("option-selected")
            })
        })
    })

    const arrowRotated = "arrow-rotated"
    return (
        <div className="window">
            {
                // sidebar
            }
            <div className="sidebar">
                {
                    // coral logo, coral title
                }
                <div className="coral-container">
                    <div className="coral_logo-title square" onClick={() => {
                        window.open("https://www.coralmc.it/", "_self")
                    }}>
                        <div className="coral_logo-title_content">
                            <div className="coral-logo"></div>
                            <div className="coral-title">CoralMC</div>
                        </div>
                    </div>
                </div>

                {
                    // sidebar options
                }
                <div className="sidebar-options">
                    <div className="main">
                        <div className="options-centered">
                            <div className="option" onClick={() => {
                                setMainWindow(
                                    controlPanel("Control Panel")
                                )
                            }}>
                                <div className="option-content option-selected">
                                    <div className="option-logo control-panel-logo"></div>
                                    <div className="option-title">Control Panel</div>
                                </div>
                            </div>
                            <div className="option" onClick={() => {
                                setMainWindow(
                                    controlPanel("Variables")
                                )
                            }}>
                                <div className="option-content">
                                    <div className="option-logo variables-logo"></div>
                                    <div className="option-title">Variables</div>
                                </div>
                            </div>
                            <div className="option settings-opt">
                                <div className="option-content" onClick={() => {
                                    settingArrow.current.classList.toggle(arrowRotated)
                                    discountArrow.current.classList.remove(arrowRotated)
                                    pagesCmsArrow.current.classList.remove(arrowRotated)
                                    if (settingArrow.current.classList.contains(arrowRotated)) {
                                        setSettingOpts(settingsSelector())
                                        setDiscountOpts(<></>)
                                        setPagesCmsOpts(<></>)
                                    } else {
                                        setSettingOpts(<></>)
                                    }
                                }}>
                                    <div className="option-logo settings-panel-opt"></div>
                                    <div className="option-title">Settings</div>
                                </div>
                                <div className="arrow" ref={settingArrow} onClick={() => {
                                    settingArrow.current.classList.toggle(arrowRotated)
                                    discountArrow.current.classList.remove(arrowRotated)
                                    pagesCmsArrow.current.classList.remove(arrowRotated)
                                    if (settingArrow.current.classList.contains(arrowRotated)) {
                                        setSettingOpts(settingsSelector())
                                        setDiscountOpts(<></>)
                                        setPagesCmsOpts(<></>)
                                    } else {
                                        setSettingOpts(<></>)
                                    }
                                }}></div>
                                {settingOpts}
                            </div>
                            <div className="option discount-opt">
                                <div className="option-content" onClick={(e) => {
                                    discountArrow.current.classList.toggle(arrowRotated)
                                    settingArrow.current.classList.remove(arrowRotated)
                                    pagesCmsArrow.current.classList.remove(arrowRotated)
                                    if (discountArrow.current.classList.contains(arrowRotated)) {
                                        setDiscountOpts(discountSelector())
                                        setSettingOpts(<></>)
                                        setPagesCmsOpts(<></>)
                                    } else {
                                        setDiscountOpts(<></>)
                                    }
                                }}>
                                    <div className="option-logo discount-panel-opt"></div>
                                    <div className="option-title">Discount</div>
                                </div>
                                <div ref={discountArrow} className="arrow" onClick={(e) => {
                                    discountArrow.current.classList.toggle(arrowRotated)
                                    settingArrow.current.classList.remove(arrowRotated)
                                    pagesCmsArrow.current.classList.remove(arrowRotated)
                                    if (discountArrow.current.classList.contains(arrowRotated)) {
                                        setDiscountOpts(discountSelector())
                                        setSettingOpts(<></>)
                                        setPagesCmsOpts(<></>)
                                    } else {
                                        setDiscountOpts(<></>)
                                    }
                                }}></div>
                                {discountOpts}
                            </div>
                            <div className="option pages-cms-opt">
                                <div className="option-content" onClick={(e) => {
                                    pagesCmsArrow.current.classList.toggle(arrowRotated)
                                    settingArrow.current.classList.remove(arrowRotated)
                                    discountArrow.current.classList.remove(arrowRotated)
                                    if (pagesCmsArrow.current.classList.contains(arrowRotated)) {
                                        setPagesCmsOpts(pagesCmsSelector())
                                        setSettingOpts(<></>)
                                        setDiscountOpts(<></>)
                                    } else {
                                        setPagesCmsOpts(<></>)
                                    }
                                }}>
                                    <div className="option-logo pages-cms-logo"></div>
                                    <div className="option-title">Pages & CMS</div>
                                </div>
                                <div className="arrow" ref={pagesCmsArrow} onClick={() => {
                                    pagesCmsArrow.current.classList.toggle(arrowRotated)
                                    settingArrow.current.classList.remove(arrowRotated)
                                    discountArrow.current.classList.remove(arrowRotated)
                                    if (pagesCmsArrow.current.classList.contains(arrowRotated)) {
                                        setPagesCmsOpts(pagesCmsSelector())
                                        setSettingOpts(<></>)
                                        setDiscountOpts(<></>)
                                    } else {
                                        setPagesCmsOpts(<></>)
                                    }
                                }}></div>
                                {pagesCmsOpts}
                            </div>
                        </div>
                    </div>
                    <div className="main">
                        <div className="options-centered">
                            <div className="option docs" onClick={() => {
                                setMainWindow(
                                    controlPanel("Docs")
                                )
                            }}>
                                <div className="option-content">
                                    <div className="option-logo docs-logo"></div>
                                    <div className="option-title">Docs</div>
                                </div>
                            </div>
                            <div className="option" onClick={() => {
                                setMainWindow(
                                    controlPanel("Dashboard")
                                )
                            }}>
                                <div className="option-content">
                                    <div className="option-logo dashboard-logo"></div>
                                    <div className="option-title">Dashboard</div>
                                </div>
                            </div>
                            <div className="option" onClick={() => {
                                setMainWindow(
                                    controlPanel("Help")
                                )
                            }}>
                                <div className="option-content">
                                    <div className="option-logo help-logo"></div>
                                    <div className="option-title">Help</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    // end of sidebar options

                    // sidebar bottom icons
                }
                <div className="sidebar-bottom-icons">
                    <div className="icon adjustments"></div>
                    <div className="icon globe"></div>
                    <div className="icon cog"></div>
                </div>

                {
                    // end of sidebar
                    // mainwindow
                }
            </div>
            {mainWindow}
        </div>
    )
}
