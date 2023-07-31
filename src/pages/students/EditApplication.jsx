import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'


const EditApplication = () => {
    const param = useParams();
    const [application, setApplication] = useState();

    useEffect(() => {
        const getApplication = async () => {
            const response = await fetch(`http://localhost:5000/api/getApplicationTemplate?id=${param.applicationID}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const json = await response.json();
            setApplication(json);
        }

        getApplication();
    }, [])

    useEffect(() => {

        const link = document.createElement("link");
        link.href = "https://cdn.quilljs.com/1.0.0/quill.snow.css";
        link.rel = "stylesheet";


        const script = document.createElement("script");
        script.src = "https://cdn.quilljs.com/1.0.0/quill.js";

        document.head.append(link);
        document.head.append(script);

    }, []);


    return (
        <main className='editAppMain'>
            <div>
                <div id="toolbar">
                    <button className="ql-bold">Bold</button>
                    <button className="ql-italic">Italic</button>
                </div>
                {(application) ? (
                    <div id="editor">
                        <p>Subject - {application.subject}</p>
                        <p dangerouslySetInnerHTML={{ __html: application.body }}></p>
                    </div>) : "No Template Found"
                }
            </div>
        </main>
    )
}

export default EditApplication