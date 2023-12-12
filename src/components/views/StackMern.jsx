import React from 'react';
import html from '../../assets/iconos/html.svg'
import css from '../../assets/iconos/css.svg'
import js from '../../assets/iconos/js.svg'
import corelDraw from '../../assets/iconos/corelDraw.svg'
import github from '../../assets/iconos/github.svg'
import logos_nodejs from '../../assets/iconos/logos_nodejs.svg'
import expressjs from '../../assets/iconos/expressjs.svg'
import mongodbIcon from '../../assets/iconos/mongodbIcon.svg'
import boostrapIcon from '../../assets/iconos/boostrapIcon.svg'
import logos_figma from '../../assets/iconos/logos_figma.svg'
import visualIcon from '../../assets/iconos/visualIcon.svg'
import react from '../../assets/iconos/react.svg'
import { Container } from 'react-bootstrap';
const StackMern = () => {
    return (
        <div className='bg-verde py-5'>
          <Container>
          <h1 className='text-center text-white fs-1 pb-1 fw-semibold'>Mi Stack tecnologico</h1>

    <div className='bg-grey text-center py-3 my-2'>
                  <img src={html} alt="" className='img-fluid mx-3 icon-size'/>
                  <img src={css} alt="" className='img-fluid mx-3 icon-size'/>
                  <img src={js} alt="" className='img-fluid mx-3 icon-size'/>
                  <img src={react} alt="" className='img-fluid mx-3 icon-size'/>
    </div>
    
    <div className='bg-cemento text-center py-3'>
                  <img src={github} alt="" className='img-fluid mx-3 icon-size'/>
                  <img src={expressjs} alt="" className='img-fluid mx-3 icon-size'/>
                  <img src={mongodbIcon} alt="" className='img-fluid mx-3 icon-size'/>
                  <img src={logos_nodejs} alt="" className='img-fluid mx-3 icon-size'/>

    </div>
    <div className='bg-white text-center py-3 my-2'>
                  <img src={logos_figma} alt="" className='img-fluid mx-3 icon-size'/>
                  <img src={boostrapIcon} alt="" className='img-fluid mx-3 icon-size'/>
                  <img src={visualIcon} alt="" className='img-fluid mx-3 icon-size'/>

                  <img src={corelDraw} alt="" className='img-fluid mx-3 icon-size'/>
    </div>
          </Container>
        </div>
    );
};

export default StackMern;