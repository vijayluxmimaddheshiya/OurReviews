const reviews =   [
    {
        "id": 1,
        "author": "Sara Jones",
        "job": "Software Engineer",
        "img": "./Components/Assets/person_1.jpg",
        "info": "I'm Sara Jones, and I thrive in the world of software engineering.\n\nMy journey as a software engineer has been incredibly rewarding, filled with opportunities to innovate and solve complex challenges. I specialize in developing robust software solutions that make a meaningful impact."
      },
      
    {
      "id": 2,
      "author": "Briana Smith",
      "job": "Graphic Designer",
      "img" :"./Components/Assets/person_2.jpg",
      "info": "I'm Briana Smith, a graphic designer with a keen eye for detail and a passion for creativity.\n\n When I'm not crafting stunning visuals, I love cycling. It provides me with inspiration and relaxation through the rhythm of the ride. My love for cycling not only keeps me active but also fuels my creative process,\n\n blending my professional skills with my personal interests."
    },
    {
      "id": 3,
      "author": "Carol White",
      "job": "Data Analyst",
      "img" :"./Components/Assets/person_3.jpg",
      "info": "I'm Carol White, a data analyst with a knack for uncovering insights from complex datasets. I enjoy diving into data to find patterns and trends that drive informed decision-making. Outside of work, I have a passion for cycling. It helps me clear my mind and stay active, offering a perfect balance to my analytical work. Cycling not only keeps me fit but also enhances my focus and productivity in my professional life."
    },
    {
      "id": 4,
      "author": "Danial Brown",
      "job": "Project Manager",
      "img" :"./Components/Assets/person_4.jpg",
      "info": "I'm Danial Brown, a project manager who thrives on organizing and leading successful projects. Outside of work, I have a deep passion for cooking. I find joy in experimenting with new recipes and flavors, which allows me to unwind and express my creativity. Cooking not only provides a delightful break from my professional responsibilities but also helps me bring the same level of precision and attention to detail to my work."
    },
    {
        "id": 5,
        "author": "Brian Tucker",
        "job": "Product Manager",
        "img" :"./Components/Assets/person_5.jpg",
        "info": "I'm Brian Tucker, a product manager dedicated to developing innovative solutions and driving projects to success. In my free time, I love playing football. The sport keeps me active and sharp, fostering teamwork and strategic thinking. Playing football not only helps me stay fit but also enhances my ability to collaborate and perform under pressure in my professional life."
      }
    
  ]
  // select items 
  const img  = document.getElementById("person-img")
  const author  = document.getElementById("author")
  const job  = document.getElementById("job")
  const info  = document.getElementById("info")

  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn')
  const randomBtn  = document.querySelector('.random-btn')


  // set starting item 
  let currentItem = 0;

  // load initial item 
/*window is the global object encompassing everything in the browser, including the document object.
document is specific to the HTML content of the page and is a property of the window object (window.document).
*/
 /* window.addEventListener('DOMContentLoaded', function() {
    showPerson(currentItem);
  });*/
  //  console.log("shake and bake")});
window.addEventListener('DOMContentLoaded', function() {
  console.log("Browser started");
      showPerson(currentItem);
  });
  // Add other event listeners and logic here
// show person based on item 
function showPerson(person){
  console.log("function showPerson is executed")
  const item = reviews[person];
  img.src = item.img
  author.textContent = item.author
  job.textContent = item.job
  info.textContent = item.info
}
// next button 
nextBtn.addEventListener('click' , function(){
  console.log("Next button is Clicked");
  currentItem +=1;
  if(currentItem >= reviews.length){
    currentItem = 0;
  }
  showPerson(currentItem);
});

// previou btn 
prevBtn.addEventListener("click" , function(){
  console.log("Previous button is clicked");
  currentItem -=1;
  if (currentItem < 0) {
   // currentItem = reviews.length - 1; // Wrap around to the end
   currentItem = reviews.length-1;
  
  }else{
    showPerson(currentItem);
  }
  
});
randomBtn.addEventListener('click' , function(){
  console.log("Random button is clicked");
  const randomNum = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
  showPerson(randomNum);
})



