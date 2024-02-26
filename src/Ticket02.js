function Ticket02()
{
    return(<>
     <div class="container-fluid bg-dark text-light">
  <div class="row align-items-start">
    <div class="col">
    <div class="card mb-3 container col-md-8 bg-transparent text-light border border-0 mt-3" style={{"max-width": "540px;"}}>
  <div class="row g-0">
    <div class="col-md-3">
      <img src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-samay-raina-unfiltered-india-tour-0-2023-12-13-t-13-43-45.jpg" class="img-fluid rounded-start" alt="..."style={{"height":"150px"}}/>
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title">Founder Institute Dhaka Graduate Showcase & Networking Event</h5>
        <p class="card-text"><i class="bi bi-geo-alt"></i> ULAB Campus, Bangladesh</p>
        <p class="card-text"style={{"color":"blueviolet"}}><i class="fa-solid fa-calendar-days text-light"></i> 7th Mar,2024 | 6:30 AM</p>
        
     
      </div>
    </div>
  </div>
</div>
    </div>
   
  </div>
  <div class="container text-center mt-5">
  <div class="row align-items-start">
    <div class="col">


        
    <div class="form-check form-check-inline radio">
  <input class="form-check-input fs-4" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"checked/>
  <label class="form-check-label fs-5 mx-1" for="inlineRadio1">Tickets <i class="bi bi-arrow-right"></i></label>
</div>
<div class="form-check form-check-inline ">
  <input class="form-check-input fs-4" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label fs-5" for="inlineRadio2">Attendee Info <i class="bi bi-arrow-right"></i></label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input fs-4" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label fs-5" for="inlineRadio2">Payment</label>
</div>

    </div>
   
    
  </div>
</div>

<div class="container mt-4">
  <div class="row align-items-start ">
    <div class="col ">
    <div class="card col-md-4 mx-auto mb-5" >
  <div class="card-body">
    <h5 class="card-title text-center scale">Already have an account? <button type="button" class="btn btn-outline-light border border-black text-dark ">Log in</button></h5>

    <form class="row g-3">
 
  <div class="col-12">
    <label for="inputAddress" class="form-label">Full Name</label>
    <input type="text" class="form-control border border-black" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="row">
  <label for="inputAddress" class="form-label mt-2">Phone Number</label>
  <div class="col-4">
    
  <select id="inputState" class="form-select border border-black">
      <option selected>In +91</option>
      <option>...</option>
    </select>
  </div>
  <div class="col">
    <input type="text" class="form-control border border-black" aria-label="Last name"/>
  </div>
</div>
  <div class="col-12">
    <label for="inputAddress" class="form-label ">Email</label>
    <input type="text" class="form-control border border-black" id="inputAddress"/>
  </div>
  
  
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Receive Updates via whatsapp
  </label>
</div>

 
  
  
 
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary w-100 border"style={{"backgroundColor":"blueviolet"}}>Proceed</button>
  </div>
  <p class="card-text text-center scale">An OTP will be sent to your phone number</p>

</form>
  </div>
</div>
    </div>
    
  </div>
</div>





</div>
    </>)
}
export default Ticket02