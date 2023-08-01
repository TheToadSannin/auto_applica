import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { useContext } from 'react';
import AuthContext from '../../providers/AuthContext';


const EditApplication = () => {
    const param = useParams();
    const { user, isLoading, authenticated } = useContext(AuthContext);
    const [application, setApplication] = useState();
    const { quill, quillRef } = useQuill();

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
        if (quill && (!isLoading)) {
            let body = application.body;

            let countName = (body.match(/{name}/g) || []).length;
            let countStandard = (body.match(/{standard}/g) || []).length;

            let i = 0;
            let j = 0;
            while(i < countName || j < countStandard){
                body = body.replace("{name}", user.fullname);
                body = body.replace("{standard}", user.standard);
                i++;
                j++;
            }

            body = body.replace("{standard}", user.standard);
            quill.clipboard.dangerouslyPasteHTML(application.subject + "<br>" + body)
        }
    }, [quill, isLoading]);


    return (
        <main className='editAppMain'>
            <div>
                {(application) ? (
                    <div ref={quillRef}>
                        {/* <p>Subject - {application.subject}</p>
                        <p dangerouslySetInnerHTML={{ __html: application.body }}></p> */}
                    </div>) : "No Template Found"
                }
            </div>
        </main>
    )
}

export default EditApplication