function foo(){
    document.getElementById("outer").innerHTML=` <div class="row box-center">
    <div class="col col-lg-6 col-sm-12 col-md-12">
     <div class="card text-white card-has-bg click-col"
       style="background-image:url('https://source.unsplash.com/600x900/?tech,stree');">
       <img class="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street"
         alt="BackgroundImage">
       <div class="card-img-overlay d-flex flex-column">
         <div class="card-body">
           <h4 class="card-title mt-0 "><a class="text-white" herf="#">Name</a></h4>
           <h6>Country</h6>
         </div>
         <div class="card-footer">
           <div class="media">
     
             <div class="media-body">
               <h6 class="my-0 text-white d-block">Probability</h6>
     
             </div>
           </div>
         </div>
       </div>
     </div>`
}