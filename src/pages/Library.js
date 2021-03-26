// modules
import React from 'react';
// assets
import './Library.css';

function Library(props) {
  let books = [
    ["Data Feminism", "Lauren F. Klein and Catherine D'Ignazio", "https://bookshop.org/books/data-feminism/9780262044004", "https://images-production.bookshop.org/spree/images/attachments/7947402/product/9780262044004.jpg"],
    ["Hood Feminism: Notes from the Women That a Movement Forgot", "Mikki Kendall", "https://bookshop.org/books/hood-feminism-notes-from-the-women-that-a-movement-forgot/9780525560548", "https://images-production.bookshop.org/spree/images/attachments/248735/product/9780525560548.jpg"],
    ["Glitch Feminism: A Manifesto", "Legacy Russell", "https://bookshop.org/books/glitch-feminism-a-manifesto/9781786632661", "https://images-production.bookshop.org/spree/images/attachments/12295673/product/9781786632661.jpg"],
    ["Feminism Is for Everybody: Passionate Politics", "Bell Hooks", "https://bookshop.org/books/feminism-is-for-everybody-passionate-politics-9781138821590/9781138821620", "https://images-production.bookshop.org/spree/images/attachments/3563697/product/9781138821620.jpg"],
    ["Feminism for the 99%: A Manifesto", "Tithi Bhattacharya, Nancy Fraser, et al.", "https://bookshop.org/books/feminism-for-the-99-a-manifesto/9781788734424", "https://images-production.bookshop.org/spree/images/attachments/5846926/product/9781788734424.jpg"],
    ["Abolition. Feminism. Now.", "Angela Y. Davis, Gina Dent, et al.", "https://bookshop.org/books/abolition-feminism-now/9781642592580", "https://images-production.bookshop.org/spree/images/attachments/12524439/product/9781642592580.jpg"],
    ["Black Feminism Reimagined: After Intersectionality", "Jennifer C. Nash", "https://bookshop.org/books/black-feminism-reimagined-after-intersectionality/9781478000594", "https://images-production.bookshop.org/spree/images/attachments/1477511/product/9781478000594.jpg"]
  ];

  return (
    <div className="library">

      <div className="text">
        <h1 data-content="Library">Library</h1>
      </div>

      <div className="gallery">
        {books.map(book => (
          <div className="library__book" key={book[0]}>
            <div className="book__cover">
              <img src={book[3]} alt="" />
            </div>
            <p><a href={book[1]}>{book[0]}</a></p>
            <p>{book[1]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;