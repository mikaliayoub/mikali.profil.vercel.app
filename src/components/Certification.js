import { Card } from 'primereact/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



export default function Certification() {

   
    return (
        <div className='container mt-4'>

<section className='section'>
  <div className='project-container row'>
    <div className='project-card col-12 col-md-5 mb-4'>
      <Card  className="card" style={{backgroundColor :"#0090a3"}}>
        <div className='project-title card-title h5' style={{textAlign: "center" , color:"white"}}>
        Developing Back-End Apps with Node.js and Express
        </div>      
          <a href="https://coursera.org/share/00c9e0fc714eb6420beaf01cab562dfb" className="btn btn-primary" style={{ width: "100%", backgroundColor: "white", textAlign: "center" , color:"#635985"}}>Preview</a>
      </Card>
    </div>
  
    <div className='project-card col-12 col-md-5 mb-4'>
      <Card className="card" style={{backgroundColor :"#0090a3"}}>
        <div className='project-title card-title h5' style={{textAlign: "center" , color:"white"}}>
        Python Functions, Files, and Dictionaries
        </div>
        <a href="https://coursera.org/share/9cceb06e8ef852aa6a4a6a58c870f4db" className="btn btn-primary" style={{ width: "100%", backgroundColor: "white", textAlign: "center" , color:"#635985"}}>Preview</a>
      </Card>
    </div>

    <div className='project-card col-12 col-md-5 mb-4'>
      <Card className="card" style={{backgroundColor :"#0090a3"}}>
        <div className='project-title card-title h5' style={{textAlign: "center" , color:"white"}}>
        Data Collection and Processing with Python
        </div>
        <a href="https://coursera.org/share/2f9816abe0d82cfc895aca78e5de6b6f" className="btn btn-primary" style={{ width: "100%", backgroundColor: "white", textAlign: "center" , color:"#635985"}}>Preview</a>
      </Card>
    </div>

    <div className='project-card col-12 col-md-5 mb-4'>
      <Card className="card" style={{backgroundColor :"#0090a3"}}>
        <div className='project-title card-title h5' style={{textAlign: "center" , color:"white"}}>
        Introduction to DevOps
        </div>
        <a href="https://coursera.org/share/0ff08f9e2bc4813494beee353a0ba350" className="btn btn-primary" style={{ width: "100%", backgroundColor: "white", textAlign: "center" , color:"#635985"}}>Preview</a>
      </Card>
    </div>
    
    <div className="shadow p-3 mb-3 bg-white rounded card"  >
          <div className="card-body" style={{backgroundColor :"#0090a3" ,color:"white"}}>
            <div className="mb-4 card-title h5" >
              Certificats honoris
            </div>
            <p className="card-text">
            <ul>
		            <li>Improve Your Personal Effectiveness</li>
		            <li>Unlock Your Creative Potential Now</li>
	              <li>Boost Your Communication Style</li>
                <li>Run Your Business</li>
                <li>Get Your Team Working Together</li>
                <li>Master the Keys to Digital Marketing</li>
                <li>Dare to Become an Entrepreneur and Reap the Benefits</li>
          	</ul>
            </p>
          </div>
        </div>

    
  </div>
  
</section>


        </div>
    )
}

