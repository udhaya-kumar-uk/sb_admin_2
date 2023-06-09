import React from "react";
import { Outlet } from "react-router-dom";
import '../App.css';

export default function Blank(){
    return(
        <div>
            <body id="page-top">


<div id="wrapper">

   
    
    
    <div id="content-wrapper" class="d-flex flex-column">

        
        <div id="content">

          
        
            <div class="container-fluid blank">

              
                <h1 class="h3 mb-4 text-gray-800">Blank Page</h1>

            </div>
          

        </div>
       

       
       

    </div>
   

</div>

<a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
</a>


<div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div class="modal-footer">
                <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a class="btn btn-primary" href="login.html">Logout</a>
            </div>
        </div>
    </div>
</div>


<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>


<script src="vendor/jquery-easing/jquery.easing.min.js"></script>


<script src="js/sb-admin-2.min.js"></script>

</body>


            <Outlet/>
        </div>
    )
}