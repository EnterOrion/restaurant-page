function homePage(){
    const content = document.querySelector('#content');
    const para = document.createElement('p');
    para.textContent = "This is the greatest restaurant of all time. Furthermore, we are the greatest restaurant in all of the alternate realities!";
    content.appendChild(para);
 }
  

  
export default homePage;