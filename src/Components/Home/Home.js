import React from 'react';
import { useLoaderData } from 'react-router-dom';
import logo from '../../image/background.jpg'
import Quizs from '../Quizs/Quizs';



const Home = () => {
  let quizes = useLoaderData();
  return (
    <div className='container '>
      
    <div className='py-5'>
    <h1 className="  ">Welcome Programing Quiz Mailston </h1>
         <p className="">Never giveup and keep  larning</p>
         <p className="card-text"><small></  small></p>
         <img className='img-fluid' src={logo} alt="" />
    </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 m-3">
       {

          quizes.data.map(quiz => <Quizs quiz={quiz} key={quiz.id}></Quizs>)

       }
     
      </div>
    </div>
  );
};

export default Home;