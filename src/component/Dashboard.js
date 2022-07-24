import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <section >
      <h1>LoggedIn User</h1>
      <p>
        <h6>Email</h6>
      </p>
      <p>
        <h6>User Id</h6>
      </p>

      
      
         
       </section>

        {/* <div className="row">
          <div className="col-md-4">

          </div>
        

        <div className="col-md-4"></div>
        </div>
        <div className="col-md-4"></div>
        
        <div className="col-md-4"></div>
         */}


<section style={{backgroundColor: '#eee'}}>
  <div class="container py-5">
    <h4 class="text-center mb-5"><strong>Choose any option</strong></h4>

    <div class="row">
      <div class="col-lg-4 col-md-12 mb-3">
        <div class="bg-image hover-zoom ripple shadow-1-strong rounded">
          <img src="https://static.thenounproject.com/png/2059162-200.png"
            class="w-100" />
            <h1>Upload Data</h1>
          <a href="#!">
            <div class="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
              <div class="d-flex justify-content-start align-items-start h-100">
                <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">$123</span></h5>
              </div>
            </div>
            <div class="hover-overlay">
              <div class="mask" style={{backgroundColor: 'rgba(253, 253, 253, 0.15)'}}></div>
            </div>
          </a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-3">
        <div class="bg-image hover-zoom ripple shadow-1-strong rounded">
          <img src="https://assets.materialup.com/uploads/378d2c84-810d-477a-802b-d495646b9c4e/preview.jpg"
            class="w-100" />
            <h1> Send Email</h1>
          <a href="#!">
            <div class="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
              <div class="d-flex justify-content-start align-items-start h-100">
                <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">$239</span></h5>
              </div>
            </div>
            <div class="hover-overlay">
              <div class="mask" style={{backgroundColor: 'rgba(253, 253, 253, 0.15)'}}></div>
            </div>
          </a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-3">
        <div class="bg-image hover-zoom ripple shadow-1-strong rounded">
          <img src="https://c.neh.tw/thumb/f/720/comvecteezy377227.jpg"
            class="w-100" />
            <h1>Add Contacts</h1>
          <a href="#!">
            <div class="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
              <div class="d-flex justify-content-start align-items-start h-100">
                <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">$147</span></h5>
              </div>
            </div>
            <div class="hover-overlay">
              <div class="mask" style={{backgroundColor: 'rgba(253, 253, 253, 0.15)'}}></div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4 col-md-12 mb-3">
        <div class="bg-image hover-zoom ripple shadow-1-strong rounded ripple-surface">
          <img src="https://cdn.techmesto.com/wp-content/uploads/2016/02/Clear-Caches-1.png"
            class="w-100" />
            <h1>Clean Data</h1>
          <a href="#!">
            <div class="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
              <div class="d-flex justify-content-start align-items-start h-100">
                <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">$83</span></h5>
              </div>
            </div>
            <div class="hover-overlay">
              <div class="mask" style={{backgroundColor: 'rgba(253, 253, 253, 0.15)'}}></div>
            </div>
          </a>
        </div>
      </div>

      

      
    </div>
  </div>
</section>

    </div>
  )
}

export default Dashboard;