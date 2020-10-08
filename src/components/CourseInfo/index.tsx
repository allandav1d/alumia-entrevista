import React from 'react';
import Prof from '../../assets/professorProfile.jpg'
import './styles.css';



const CourseInfo = () => {

    return(
        <main id="main">
            <h2>Unity - Masterclass</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nulla est, interdum sed sagittis et, tempus eu lorem. Ut elementum eget purus at viverra. Sed commodo orci eget elit lacinia rhoncus. Aenean sed quam eu lectus venenatis malesuada. Proin euismod nisl non nisi accumsan, vel dapibus nunc faucibus. Donec suscipit turpis felis, et venenatis sem convallis accumsan. Morbi lobortis, ipsum vel egestas congue, nisl tortor accumsan justo, non cursus orci orci at ante. Nunc tortor erat, consectetur in nisl in, blandit placerat leo. Sed mattis enim tellus, a ullamcorper nisl porttitor in. Integer dignissim a metus nec molestie. Ut sit amet felis eu erat egestas feugiat.</p>
            <h3>Metas e objetivos</h3>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Duis hendrerit sem at volutpat luctus.</li>
                <li>Integer vitae tortor id ante euismod egestas.</li>
                <li>Morbi porttitor ligula sed odio cursus semper.</li>
            </ul>
            <h3>O guia</h3>
            <div className="group">
                <img className="imagProfile" src={Prof} alt=""/>
                <div className="dataProfile">
                    <h4>Nome: </h4>
                    <p>Antonio José dos Campos</p>
                    <h4>Formação: </h4>
                    <p>Desenvolvedor Unity</p>
                    <h4>Background: </h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin nibh a neque ullamcorper interdum. Suspendisse in quam turpis. Mauris rhoncus quam urna, ut varius risus molestie nec. Nunc nibh elit, scelerisque sit amet tempor ac, dignissim ac lacus.</p>
                </div>
            </div>
            
        </main>    
    );
}

export default CourseInfo;