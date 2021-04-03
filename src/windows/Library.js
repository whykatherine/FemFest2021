// modules
import React from 'react';

function Library(props) {
  let books = [
    {
      "title": "Data Feminism",
      "author": "Lauren F. Klein and Catherine D'Ignazio",
      "link": "https://bookshop.org/books/data-feminism/9780262044004",
      "image": "https://images-production.bookshop.org/spree/images/attachments/7947402/product/9780262044004.jpg"
    },
    {
      "title": "Hood Feminism: Notes from the Women That a Movement Forgot",
      "author": "Mikki Kendall",
      "link": "https://bookshop.org/books/hood-feminism-notes-from-the-women-that-a-movement-forgot/9780525560548",
      "image": "https://images-production.bookshop.org/spree/images/attachments/248735/product/9780525560548.jpg"
    },
    {
      "title": "Glitch Feminism: A Manifesto",
      "author": "Legacy Russell",
      "link": "https://bookshop.org/books/glitch-feminism-a-manifesto/9781786632661",
      "image": "https://images-production.bookshop.org/spree/images/attachments/12295673/product/9781786632661.jpg"
    },
    {
      "title": "Feminism Is for Everybody: Passionate Politics",
      "author": "Bell Hooks",
      "link": "https://bookshop.org/books/feminism-is-for-everybody-passionate-politics-9781138821590/9781138821620",
      "image": "https://images-production.bookshop.org/spree/images/attachments/3563697/product/9781138821620.jpg"
    },
    {
      "title": "Feminism for the 99%: A Manifesto",
      "author": "Tithi Bhattacharya, Nancy Fraser, et al.",
      "link": "https://bookshop.org/books/feminism-for-the-99-a-manifesto/9781788734424",
      "image": "https://images-production.bookshop.org/spree/images/attachments/5846926/product/9781788734424.jpg"
    },
    {
      "title": "Abolition. Feminism. Now.",
      "author": "Angela Y. Davis, Gina Dent, et al.",
      "link": "https://bookshop.org/books/abolition-feminism-now/9781642592580",
      "image": "https://images-production.bookshop.org/spree/images/attachments/12524439/product/9781642592580.jpg"
    },
    {
      "title": "Black Feminism Reimagined: After Intersectionality",
      "author": "Jennifer C. Nash",
      "link": "https://bookshop.org/books/black-feminism-reimagined-after-intersectionality/9781478000594",
      "image": "https://images-production.bookshop.org/spree/images/attachments/1477511/product/9781478000594.jpg"
    }
  ];

  return (
    <div className="library">

      <div className="text">
        <h1 data-content="Library">Library</h1>
      </div>

      <div className="text">
        <h2>Mazer Lesbian Archives</h2>
        <p>The <a href="https://www.mazerlesbianarchives.org/" target="_blank" rel="noopener noreferrer">June L. Mazer Lesbian Archives</a> is a grass roots archive dedicated to collecting, protecting, and conserving lesbian and feminist women's history. The Archives was founded in 1981 as the West Coast Lesbian Collections by Lynn Fonfa and Cherrie Cox in Oakland, California.</p>
      </div>

      <div className="text">
        <h2>ONE Archives</h2>
        <p>The collections at <a href="https://one.usc.edu/collections" target="_blank" rel="noopener noreferrer">ONE Archives at the USC Libraries</a> are primarily national in scope, with special focus on LGBTQ histories in the Los Angeles region. The archives also include a number of international materials, such as books, periodicals, and posters.</p>
      </div>

      <div className="text">
        <h2>Sample Reading List</h2>
        <p><a href="https://bookshop.org/">Bookshop</a> is an online bookstore with a mission to financially support local, independent bookstores.</p>
        <div className="gallery gallery--library">
          {books.map(book => (
            <div className="gallery__item" key={book["title"]}>
              <div className="gallery__item_image">
                <a href={book["link"]} target="_blank" rel="noopener noreferrer">
                  <img src={book["image"]} alt={book["title"] + " cover"} />
                </a>
              </div>
              <p>{book["title"]}</p>
              <p>{book["author"]}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default Library;