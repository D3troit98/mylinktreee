import React from "react";
import { Link } from "react-router-dom";
const Links = () => {
  return (
    <div className="link_container">
      <a href="https://twitter.com/duruaku_lithium">twitter link</a>

      <a id="btn__zuri" href="https://training.zuri.team/">
        zuri team
      </a>

      <a
        title="Click the link to get handpicked books and customized guides about design and coding to help you grow and advance your tech careers."
        id="books"
        href="http://books.zuri.team"
      >
        zuri books
      </a>

      <a
        title="Click the link if you want a book that takes you from a beginner python developer to an advanced python developer. The books are very beginner friendly and contain real world examples to help you along the way"
        id="book__python"
        href="https://books.zuri.team/python-for-beginners?ref_id=ebuka-duruaku"
      >
        python books
      </a>

      <a
        title="Click on the link for a service that runs background checks on coders"
        id="pitch"
        href="https://background.zuri.team"
      >
        background check for coders
      </a>

      <a
        title="Click on the link to get the free Design Rules Book by Zuri that gives you the tips & guidelines you need to create truly professional designs, by addressing errors that could you get you disqualified."
        id="book_design"
        href="https://books.zuri.team/design-rules"
      >
        design books
      </a>

      <Link id="contact" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Links;
