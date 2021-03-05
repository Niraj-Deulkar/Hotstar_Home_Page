import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App';
import Card from "./Cards";
import Sdata from "./Sdata"
const img1= "https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/9143/919143-h";
const img2="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6769/826769-h";
const img3="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/9260/889260-h";
const link="http://localhost:3000/";



ReactDOM.render(<> 

<div className="topnav">
  <a className="active" href="#home">Home</a>
  <a className="active" href="#about">About</a>
  <a className="active" href="#contact">Contact</a>
  <div className="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit"><i className="fa fa-search"></i></button>
    </form>
  </div>
</div>


    <div id="demo" className="carousel slide" data-ride="carousel">
  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <a href={link} target="niraj">
      <img src={img1} alt="1962 movie" width="1100" height="500"/>
    </a>
      <div className="carousel-caption">
        <h3>1962 movies</h3>
        <p>1962 movie1962 movie</p>
      </div>   
    </div>
    <div className="carousel-item">
      <img src={img2} alt="anupama" width="1100" height="500"/>
      <div className="carousel-caption">
        <h3>Anupama</h3>
        <p>Anupama</p>
      </div>   
    </div>
    <div className="carousel-item">

      <img src={img3} alt="ya rishta kia khlata he" width="1100" height="500"/>
      <div className="carousel-caption">
        <h3>Ya Rista Kia Khlata He</h3>
        <p>Ya Rista Kia Khlata He</p>
      </div>   
    </div>
  </div>
  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div>
    
    
    
    
    
    
    
    
    
  
    
    
    
    <App/>
    
    <Card imgsrc={Sdata[0].imgsrc}
          title={Sdata[0].title}
          sname={Sdata[0].sname}
          link={Sdata[0].link}
    />

<Card imgsrc={Sdata[1].imgsrc}
          title={Sdata[1].title}
          sname={Sdata[1].sname}
          link={Sdata[1].link}
    />

<Card imgsrc={Sdata[2].imgsrc}
          title={Sdata[2].title}
          sname={Sdata[2].sname}
          link={Sdata[2].link}
    />
    <Card imgsrc={Sdata[3].imgsrc}
          title={Sdata[3].title}
          sname={Sdata[3].sname}
          link={Sdata[3].link}
    />

  
<div class="footer">
  <p>© 2021 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p>
</div>
   
    </>,
    document.getElementById("root"));
