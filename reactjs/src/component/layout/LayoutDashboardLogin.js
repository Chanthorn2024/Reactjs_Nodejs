import React from 'react'
import {Outlet} from "react-router-dom"

function LayoutDashboardLogin() {
  return (
    <div>
        <div style={{padding:20,
            backgroundColor:'#888'
        }}>
            <h1>NIT Cambodai (Backend)</h1>

        </div>
        {/* Body Block */}
        <div>
          <Outlet />
        </div>
    </div>
  )
}

export default LayoutDashboardLogin;
