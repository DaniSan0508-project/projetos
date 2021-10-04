import './main.css'
import { useEffect, useState } from "react";

import { Formik, Form, Field } from 'formik';

import api from '../../services/api';
import * as Yup from 'yup';

    

const schema = Yup.object().shape({
    text: Yup.string().required('O campo first name é obrigatório'),
    tel: Yup.string().min(13).required('O campo phone number é obrigatório')
})




export default function Main() {
    const [types, setTypes] = useState([]);

    useEffect(()=>{
        async function loadTypes(){
            const response = await api.get('types');
            setTypes(response.data);
        };
        loadTypes();
    },[])

    return(
        <div className="container">
                <Formik
                validationSchema={schema}
                    initialValues={{
                        text:'enter your first name',
                        tel:'(11)9999-9999',
                    }}
                >
                    {({errors})=>(
                            <Form>
                                {types.map((item)=>{
                                    return(
                                    <div key={item.key}>
                                        <label htmlFor={item.key}>{item.label}</label><br/>
                                        <Field id={item.key} name={item.type} type={item.type} required={item.required}/>
                                    </div>
                                    )
                                })}
                                <div>{errors.text && (<div>{errors.text}</div>)}</div>
                                <div>{errors.tel && (<div>{errors.tel}</div>)}</div>
                            </Form>
                    )}
                    
                </Formik>
        </div>
    )
  };
  