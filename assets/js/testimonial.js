// class Testimonial {
//    constructor(quote, image) {
//       this._quote = quote;
//       this._image = image;
//    }

//    get quote() {
//       return this._quote;
//    }

//    get image() {
//       return this._image;
//    }

//    get display() {
//       return `<div class="card">
//                <img src="${this.image}" alt="Muhammad Ainurridho" />
//                <div class="card-body">
//                   <blockquote>"${this.quote}"</blockquote>
//                   <p class="author">- ${this.author}</p>
//                </div>
//             </div>`;
//    }
// }

// class Author extends Testimonial {
//    constructor(quote, image, author) {
//       super(quote, image);
//       this._author = author;
//    }

//    get author() {
//       return this._author;
//    }
// }

// class Company extends Testimonial {
//    constructor(quote, image, company) {
//       super(quote, image);
//       this._company = company;
//    }

//    get author() {
//       return this._company + " company";
//    }
// }

// const ridho = new Author(
//    "Mantep banget dah pokoknya, ajib pisan",
//    "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
//    "Muhammad Ainurridho"
// );

// const rifqi = new Author(
//    "Wah gg pisan ini mah, aing sampe terkagum-kagum",
//    "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//    "Muhammad Rifqi"
// );

// const microsoft = new Company(
//    "Aing mah perusahaan nomor 1 di dunia, enggak ada yang bisa kalahin urang",
//    "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//    "Microsoft"
// );

// const testimoni = [ridho];
// let card = "";
// testimoni.forEach((testi) => {
//    card += testi.display;
// });
// const container = document.getElementById("testimonial");
// container.innerHTML = card;

const testimonial = [
   {
      author: "Muhammad Ainurridho",
      quote: "Mantep banget dah pokoknya, ajib pisan",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
      rating: 4,
   },
   {
      author: "Muhammad Rifqi Fadhlurrohman",
      quote: "Wah gg pisan ini mah, aing sampe terkagum-kagum",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      rating: 5,
   },
   {
      author: "Ice Bear",
      quote: "Situsnya ngelag banget",
      image: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      rating: 1,
   },
   {
      author: "Amand Rizky Juniar",
      quote: "Bolehlah webnya, lumayan",
      image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=895&q=80",
      rating: 3,
   },
   {
      author: "Unknown People",
      quote: "Bolehlah webnya, lumayan",
      image: "https://images.unsplash.com/photo-1534294668821-28a3054f4256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      rating: 3,
   },
];
// Tampilan saat baru masuk page testimonial
const allTestimonial = (container) => {
   let cards = "";
   container.innerHTML = "";
   testimonial.forEach((card) => {
      setTimeout(() => {
         cards += `
         <div class="card">
            <img src="${card.image}" alt="Muhammad Ainurridho" />
            <div class="card-body">
               <blockquote>"${card.quote}"</blockquote>
               <p class="author">- ${card.author}</p>
               <p class="author">${card.rating} <i class="fa-solid fa-star"></i></p>
            </div>
         </div>
      `;
         container.innerHTML = cards;
      }, 500);
   });
};

const container = document.getElementById("testimonial");
allTestimonial(container);

const buttons = document.querySelectorAll(".ratings button");
// Saat menglik button sesuai rating
buttons.forEach((btn) => {
   btn.addEventListener("click", function () {
      testimonialFilter(btn.textContent);
   });
});

const testimonialFilter = (btn) => {
   container.innerHTML = "";
   if (btn == "All") {
      return allTestimonial(container);
   }

   const filter = testimonial.filter((card) => card.rating == btn);
   setTimeout(() => {
      let cards = "";

      if (filter.length === 0) {
         cards = `<h1>Data not found!</h1>`;
      } else {
         filter.forEach((card) => {
            cards += `
            <div class="card">
               <img src="${card.image}" alt="Muhammad Ainurridho" />
               <div class="card-body">
                  <blockquote>"${card.quote}"</blockquote>
                  <p class="author">- ${card.author}</p>
                  <p class="author">${card.rating} <i class="fa-solid fa-star"></i></p>
               </div>
            </div>
         `;
         });
      }
      container.innerHTML = cards;
   }, 500);
};
