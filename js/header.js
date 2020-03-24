 var opacity=document.getElementById("pics").style.opacity;
       var images= new Array("../img/img2.1.jpg","../img/img1.jpg","../img/img3.jpg","../img/img4.jpg","../img/img2.jpg");
        var i=0;

    /*   function imageShow()
        { 
            i++;
            if(i<4)
            {  
                setTimeout(
                function(){
                    document.getElementById('pics').style.transform=("scale(1.5)");
                    document.getElementById('pics').style.opacity=1;
                           
                document.images['pics'].src=images[i];},2000) 
            }
            else
            {   i=0;
                setTimeout(
                function(){
                    document.getElementById('pics').style.transform=("scale(1.5)");
                    document.getElementById('pics').style.opacity=1;
                           
                document.images['pics'].src=images[i];},2000)
            }
            document.getElementById('pics').style.opacity=0;
            document.getElementById('pics').style.transform=("scale(1.8)");
            
        }
        setInterval("imageShow()",5000);
        
     


  window.setInterval(function imageshow()
    {
        i++;
        if(i>=images.length) 
            i=0;
       else
           {
         document.images["img"].src=images[i];
           }
          
    }, 2000);
  