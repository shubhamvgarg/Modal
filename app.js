// const toggleBtn = document.querySelector('.sidebar-toggle')
// const sidebar = document.querySelector('.sidebar')

// toggleBtn.addEventListener('click', function(){
  //   sidebar.classList.toggle('show-sidebar')
  //   })

  // closebtn.addEventListener('click', function(){
    //       sidebar.classList.remove('show-sidebar')
    //   })
    
    
    
    const openmodal = document.querySelector('.modal-btn')
    const modeloverlay = document.querySelector('.modal-overlay')
    const closebtn = document.querySelector('.close-btn')
    

  openmodal.addEventListener('click', function(){
    modeloverlay.classList.add('open-modal')
  })
  
  closebtn.addEventListener('click',function(){
    modeloverlay.classList.remove('open-modal')
  })