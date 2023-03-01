const form = document.querySelector("form");
const projects = [];

form.addEventListener("submit", function (e) {
   e.preventDefault();

   const projectName = document.getElementById("inputProjectName").value;
   const startDate = document.getElementById("inputStartDate").value;
   const endDate = document.getElementById("inputEndDate").value;
   const description = document.getElementById("inputDescription").value;
   const skills = Array.from(document.querySelectorAll("input[type='checkbox']"));

   const icons = getIcon(skills);
   let image = document.getElementById("uploadImg").files;

   image = URL.createObjectURL(image[0]);

   const project = {
      projectName,
      startDate,
      endDate,
      description,
      icons,
      image,
   };

   projects.push(project);
   updateUI();
});

function getIcon(skills) {
   const icon = skills.map((i) => {
      return i.checked ? i : "";
   });
   return icon;
}

function getDuration(start, end) {
   const startDate = new Date(start);
   const endDate = new Date(end);

   const selisih = endDate - startDate;
   const day = selisih / (1000 * 60 * 60 * 24);
   const week = Math.floor(selisih / (1000 * 60 * 60 * 24 * 7));
   const month = Math.floor(selisih / (1000 * 60 * 60 * 24 * 30));

   if (day < 7) {
      if (day === 1) {
         return `Duration: ${day} day`;
      } else {
         return `Duration: ${day} days`;
      }
   } else {
       if (day < 30) {
           if (week === 1) {
               return `Duration: ${week} week`;
           } else {
               return `Duration: ${week} weeks`;
           }
       } else {
           if (month === 1) {
              return `Duration: ${month} month`;
           } else {
              return `Duration: ${month} months`;
           }
       }
   }

    
}

function updateUI() {
   let card = "";
   projects.forEach((project) => {
      card += `
        <div class="card">
            <img src="${project.image}" alt="Image Theme" />
            <div class="card-body">
                <h2 class="title">${project.projectName}</h2>
                <span class="duration">${getDuration(project.startDate, project.endDate)}</span>
                <p class="description">${project.description}</p>
            </div>
            <div class="icon-skills">
                ${project.icons[0] ? `<i class="fa-brands fa-node"></i>` : ""}
                ${project.icons[1] ? `<i class="fa-brands fa-react"></i>` : ""}
                ${project.icons[2] ? `<i class="fa-brands fa-vuejs"></i>` : ""}
                ${project.icons[3] ? `<i class="fa-brands fa-laravel"></i>` : ""}
            </div>
            <div class="change">
                <a href="#">Edit</a>
                <a href="#">Delete</a>
            </div>
        </div>
        `;
   });
   const container = document.querySelector(".container-card");
   container.innerHTML = card;
}
