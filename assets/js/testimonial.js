class Testimonial {
   constructor(quote, image) {
      this._quote = quote;
      this._image = image;
   }

   get quote() {
      return this._quote;
   }

   get image() {
      return this._image;
   }

   get display() {
      return `<div class="card">
               <img src="${this.image}" alt="Muhammad Ainurridho" />
               <div class="card-body">
                  <blockquote>"${this.quote}"</blockquote>
                  <p class="author">- ${this.author}</p>
               </div>
            </div>`;
   }
}

class Author extends Testimonial {
   constructor(quote, image, author) {
      super(quote, image);
      this._author = author;
   }

   get author() {
      return this._author;
   }
}

class Company extends Testimonial {
   constructor(quote, image, company) {
      super(quote, image);
      this._company = company;
   }

   get author() {
      return this._company + " company";
   }
}

const ridho = new Author(
   "Mantep banget dah pokoknya, ajib pisan",
   "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
   "Muhammad Ainurridho"
);

const rifqi = new Author(
   "Wah gg pisan ini mah, aing sampe terkagum-kagum",
   "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
   "Muhammad Rifqi"
);

const microsoft = new Company(
   "Aing mah perusahaan nomor 1 di dunia, enggak ada yang bisa kalahin urang",
   "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
   "Microsoft"
);

const testimoni = [ridho, rifqi, microsoft];
let card = "";
testimoni.forEach((testi) => {
   card += testi.display;
});
const result = document.getElementById("testimonial");
result.innerHTML = card;
