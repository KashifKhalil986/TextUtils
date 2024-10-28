import React, { useState } from 'react'


export default function About(props) {


// const [btnText ,setBtnText] = useState("Enable Dark Mode")
    
// const [myStyle, setMyStyle] = useState({
//         color: 'black',
//         backgroundColor: 'white'
//     })
let myStyle ={
    color : props.mode==='dark' ? 'white' : '#042743',
    backgroundColor : props.mode==='dark' ? 'rgb(36 74 104)' : 'white',
}

    // const toggleStyle = () => {
    //     if (myStyle.color === 'white') {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border:'1px solid white'
    //         })
    //         setBtnText("Enable White Mode")
            
    //     }
    // }

    return (
        <div className='container' style={{color : props.mode==='dark' ? 'white' : '#042743'}}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyize your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        TextUtils is a simple tool for quick text manipulation, offering features like converting text to uppercase or lowercase, clearing text, removing extra spaces, and copying to the clipboard. It also provides word and character counts for easy text analysis.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        Completely free to use, TextUtils is designed to streamline text editing tasks for anyone, whether for documents, coding, or presentations, while offering helpful alerts for user actions
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        Built with React, TextUtils works smoothly across browsers and devices, offering a responsive, user-friendly interface with light and dark mode options for better readability.
                        </div>
                    </div>
                </div>
            </div>
            {/* <button className="btn btn-primary my-3" onClick={toggleStyle}>{btnText}</button> */}
        </div>
    )
}
