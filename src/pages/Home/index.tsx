import React, { useState, ChangeEvent, FormEvent } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Video from '../../components/VideoBackground';
import Aside from '../../components/Card';
import CourseInfo from '../../components/CourseInfo';

import { useHistory } from 'react-router-dom';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';

import './grid.css';
import './styles.css';


const Home = () => {
    const [sucessSubmit, setSucessSubmit] = useState(false);
    const history = useHistory();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: ''
    });

    function handleInputChange(e: ChangeEvent<HTMLInputElement>){
        const { name, value }  = e.target;
        setFormData({ ...formData, [name]: value });
    }

    async function handleSubmit(e: FormEvent){
        e.preventDefault();
        const { name, email, whatsapp } = formData;

        const data = new FormData();
            data.append('name',name); 
            data.append('email',email); 
            data.append('whatsapp',whatsapp); 

              // send email to api

              var xhr = new XMLHttpRequest();
              
              xhr.addEventListener('load', () => {

                if(xhr.responseText === "Mensagem enviada com sucesso!"){
                    setSucessSubmit(true);
                    
                    sleep(5000).then(() => { 
                        history.push('/');
                        setSucessSubmit(false);
                    });
                }
                else{
                    console.log(xhr.responseText);
                }
              });

              xhr.open('GET', 'http://api.allandavid.com.br/default.php?sendto='+email+
              '&name='+ name+
              '&message='+ whatsapp);

              xhr.send();
    }

    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return(
        <div id="page-home" className="grid-container">
            <div className={sucessSubmit ? 'is-success':'hide'}>
                <div className="alert">
                    <FiCheckCircle className="check-icon"/>
                    <h2>Cadastro concluído</h2>
                    <p>Agora é com a gente, até breve!</p>
                </div>
            </div>
            
            <Header onItemSelected={1}/>
            <Video/>
            
            <CourseInfo/>
            <Aside/>

            <form id="form" className="form" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                        <span>Informe seus dados e comece a planejar seu futuro hoje</span>
                    </legend>

                    <div className="field">
                        <label htmlFor="name">Nome</label>
                        <input type="text" name="name" id="name" onChange={handleInputChange}/>
                    </div>
                    <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="email" className="js-input-selector" onChange={handleInputChange}/>
                    </div>

                    <div className="field-group">
                       
                        <div className="field">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input type="number" name="whatsapp" id="whatsapp" onChange={handleInputChange}/>
                        </div>
                        <div className="field">
                            <label htmlFor="submit"></label>
                            <button type="submit">Cadastrar interesse <FiArrowRight/></button>
                        </div>
                    </div>
                </fieldset>
            </form>

            <Footer/>
        </div>
    );
}

export default Home;