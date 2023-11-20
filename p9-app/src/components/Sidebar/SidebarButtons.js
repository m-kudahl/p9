import React from "react";

export default function SidebarButtons ({ top, background, children}) {
    const MyButton = { 
        position: "absolute",
        width: "70%",
        height: "20%", 
        left: "15%",
        top: top,
        borderRadius: "8px",
        border: "1px solid #000000", 
        background: background,
        fontSize: 'calc(2vw + 2vh)',
      };
    
    return <button style={MyButton}>{children}</button>;

}
