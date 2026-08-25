function Team() {
  return (
    <div className="container">
      <div className="row p-4 border-top">
        <h1 className="fs-4 mt-5 text-center">
         People
        </h1>
      </div>
      <div className="row text-muted align-items-center">
        <div className="col-6 p-5 lh-lg text-center">
        
                <img style={{marginBottom:"35px",borderRadius: "50%", width: "50%", aspectRatio: '1 / 1',objectFit: 'cover' }} src="images\BirajPhoto.jpg" />
          <h4>Biraj Bhattarai</h4>
          <h5 className="my-3">Founder and CEO</h5>
            
        </div>
        <div className="col-6 p-5 lh-lg">
          <p>
            Biraj founded BullTrad while studying BSc CSIT, driven by a passion for building tools that make investing simpler for everyday Nepali traders.
          </p>
          <p>
            He's focused on combining clean design with practical trading features — pulling from firsthand experience following the NEPSE markets.
          </p>
          <p>
            When he's not coding, you'll find him playing chess or tracking market charts.
          </p>
          <p>Connect on <a href= "">Homepage</a> / <a href= "">GitHub</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
