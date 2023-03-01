const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
   e.preventDefault();

   const name = document.getElementById("inputName").value;
   const email = document.getElementById("inputEmail").value;
   const phone = document.getElementById("inputPhone").value;
   const subject = document.getElementById("inputSubject").value;
   const message = document.getElementById("inputMessage").value;

   const emailReceive = "m.ainurridho11@gmail.com";
    document.location.href = `mailto:${emailReceive}?subject=I'm ${subject}&body=Hello, my name is ${name}, I want ${message}. or you can call me through my number (${phone}) `;
    
});
