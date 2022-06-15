import React, { Component } from 'react';
import '../../components/App/App.css';
import Testcard from '../../components/Testcard/Testcard';
import './home.scss'
class HomePage extends Component {

  render() {
    return (
      <div className="home-container">
        <section className="home-page">
          <div className="welcome-message">
            <h1>Lets Get Things Done.</h1>
            <h2>Together.</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita labore sed minima maxime vero magnam consectetur numquam, nesciunt itaque atque odit, reprehenderit, ut error. Reprehenderit assumenda dolor eaque obcaecati non!</p>
            <button className="get-started-btn">Get Started</button>
          </div>
        </section>
        <section className="what-we-do">
          <div className="message">
            <h1>What is Time Blocking?</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore veritatis inventore aliquam iure molestias aspernatur a maiores atque deleniti assumenda, vel cupiditate rerum hic eligendi provident exercitationem facilis? Consequatur, quos.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi nam nobis accusamus, soluta ipsa impedit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam architecto dolor unde laudantium delectus eos qui aperiam officiis quis numquam possimus est saepe, asperiores et tempora! Repellendus nesciunt adipisci aut.</p>
          </div>
        </section>
        <section className="testimonials">
          <h1>Heres What Our Users Have To Say</h1>
          <div className="card-container">
            <Testcard /> 
            <Testcard />
            <Testcard />
          </div>
          <div className="details">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas voluptates, pariatur corrupti magnam ipsa soluta beatae totam eligendi eum deserunt quos in rerum optio perspiciatis qui aliquam necessitatibus cumque nemo!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem et ratione dolore repellat minus accusamus. Et, repudiandae sit ad autem alias sed odio ducimus, sapiente cumque ut consequuntur iste dolor!</p>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;