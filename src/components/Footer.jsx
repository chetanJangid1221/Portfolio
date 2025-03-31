import React from "react";

function Footer(){
  const currentYear = new Date().getFullYear(); 
    return(
  //   <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
  //   <div class="col-md-12 d-flex align-items-center">
  //     <span class="mb-3 mb-md-0 text-body-secondary ">© 2023 Company, Inc</span>
  //   </div>   
  // </footer>
  <div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#gotoAbout" class="nav-link px-2 text-body-secondary">About</a></li>
      <li class="nav-item"><a href="#gotoSkills" class="nav-link px-2 text-body-secondary">Skills</a></li>
      <li class="nav-item"><a href="#gotoProject" class="nav-link px-2 text-body-secondary">Projects</a></li>
      <li class="nav-item"><a href="https://drive.google.com/file/d/1SjXI1MkSRIkQ0E7mpqfNpWghJMnXzIs7/view?usp=sharing" class="nav-link px-2 text-body-secondary">View CV</a></li>
      </ul>
    <p class="text-center text-body-secondary">© Copyright {currentYear} I'm Chetan Jangid. All rights reserved</p>
  </footer>
</div>
    )
}
export default Footer;