import SimpleMap from "./SimpleMap";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/mike.jpeg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
    
            </div>
            {/* Google map stuff */}
            <div style={{border: '2px solid black'}}>
              <SimpleMap  />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
