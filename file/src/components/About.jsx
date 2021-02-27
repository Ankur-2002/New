import React from 'react';
import Carousel from './Carousel'
function About() {
  return (
    <>
    <div className="container-fluid about">
    <div className="row">
      <div className="col-lg-12 col-md-12 mx-auto">
      <img  className="food"  src="https://images.pexels.com/photos/1105166/pexels-photo-1105166.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
      
      <div className="row d-flex">
      <div className="col-lg-8 col-md-8 pt-5 order-2">
      <h1 className="headtext" ><><strong>Muskan Bansal</strong> Nutritionist & Diabetes</></h1>
      
      <div className="col-lg-10 col-md-10 mx-auto">
      <h5 className="pt-5">One Of The Best Dietitian In Delhi</h5>
      <p className="text pb-2">
      Muskan Bansal is a young & aspiring dietitian, nutritionist and Diabetes Educator from Delhi, India. She is enthusiastically working in the field of weight management and therapeutic nutrition. She believes in a natural way of achieving a healthy lifestyle & don’t recommend artificial methods like pills and supplement.</p>
      <p className="text pt-2 pb-2">
She founded Balanced Bites in 2019, located in Rohini, Delhi. She deals with individuals who are obese or suffering from lifestyle disorders and serving personalized diet plan to the clients.
She doesn’t believe in “give up on your favourite food” instead of this she encourages a healthy eating lifestyle by eating all your favourite food in balance with other meals. Her plan is based on balanced diet and you will get homemade and traditional food. She encourages use of food as medicine with a holistic approach.
Clients can also have free consultation and doubt handling sessions, you can get your own personalized diet plan by contacting us online with no clinic visit.

      </p>
      </div>
      </div>

      <div className="col-lg-4 col-md-4 order-1 pt-5 ">
      <img className="client" src="https://i.pinimg.com/236x/34/25/9d/34259d8b6b60a94f5e43bde242ecc26e.jpg"></img>
      </div>

    </div>
    </div>
    </div>
      </div>
      
    <Carousel></Carousel>
    </>
  );
}

export default About;
