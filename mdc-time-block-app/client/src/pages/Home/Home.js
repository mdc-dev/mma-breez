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
        <section id='what-we-do' className="what-we-do">
          <div className="message">
            <h1>What is Time Blocking?</h1>
            <p>If there's one thing that can be said about the modern workplace, it's this: If you don't control your schedule, it will control you.</p>
            <p>How do you balance the necessary evils of meetings, email, team chat, and "busy work" with focused time for the things you truly care about? Since becoming a digital hermit isn’t an option for most of us, we need concrete strategies to help us focus in a world designed to distract us.</p>
            <p>That’s where time blocking comes in.</p>
            <p>Time blocking is a time management method that asks you to divide your day into blocks of time. Each block is dedicated to accomplishing a specific task, or group of tasks, and only those specific tasks. Instead of keeping an open-ended to-do list of things you’ll get to as you’re able, you’ll start each day with a concrete schedule that lays out what you’ll work on and when.</p>
            <p>The key to this method is prioritizing your task list in advance — a dedicated weekly review is a must. Take stock of what’s coming up for the week ahead and make a rough sketch of your time blocks for each day. At the end of every workday, review any tasks you didn’t finish — as well as any new tasks that have come in — and adjust your time blocks for the rest of the week accordingly.</p>
            <p>With days that are time blocked in advance, you won’t have to constantly make choices about what to focus on. All you need to do is follow your time blocked schedule. If you get off-task or distracted, simply look at your schedule and get back to whichever task you blocked off time for.</p> 
          </div>
          <div className="steps">
            <h1>How It Works</h1>
            <ul className="step-list">
              <li className="step">
                <h2>Step One: Figure Out What You Want to Accomplish</h2>
                <p>Start by making a master list of the things you would like to achieve for the day. Once you have made this list, break it down into sections based on priority. High priority items can go into the Priority Tasks section, and lower priority items can go into the Other Tasks section.</p>
              </li>
              <li className="step">
                <h2>Step Two: Determine How Much Time Each Task Will Take</h2>
                <p>After you have completed your list of tasks, you need to decide how long you would like to spend on each task. To do this, you can either pick a definitive amount of time you would like to spend on a task or estimate how long you think a task will take to accomplish.</p>
              </li>
              <li className="step">
                <h2>Step Three: Add Your Tasks to Your TimeBlocker Schedule</h2>
                <p>Once you know what your day looks like with those things added, you can start to time block for the things you would like to accomplish with the rest of your time. Create an event for the block of time, and use the event title and description box to note what you would like to be doing during that time.</p>
              </li>
              <li className="step">
                <h2>Manage Your Day More Effectively Using TimeBlocker</h2>
                <p>Time blocking can be something you do at the beginning of the week for the whole week, or it can be something you incorporate into your morning routine. Using time blocking is supposed to make your life easier and more efficient, so do whatever works best for you! </p>
              </li>
            </ul>
          </div>
        </section>
        <section id='testimonials' className="testimonials">
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
        <section className="about" id="who-we-are">
          <h1>About Us</h1>
          <div className="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rem quas tempora harum nesciunt doloribus quam minima voluptatibus, eveniet omnis, illum reiciendis corrupti totam officia nostrum voluptas, hic expedita ut.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam aliquam itaque facere veniam quaerat repellendus corrupti nisi minus officia repudiandae!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et praesentium sequi eius corrupti eligendi expedita fuga, vel fugiat cupiditate dicta, ipsum exercitationem adipisci omnis velit, qui veritatis dolores aperiam atque dolor inventore facere quia libero!</p>
            <div className="image"></div>
          
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;