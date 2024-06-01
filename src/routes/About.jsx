import React from "react";

const About = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8">
            <h1 className="mb-4">About This Project</h1>

            <section className="mb-5">
              <h2>Information about the project</h2>
              <p>
                Welcome to our Zoo/Animals project! This website is made to give
                you information on different creatures like Animals, Birds,
                Insects, and Fish. We aim to educate and entertain users with an
                easy-to-use interface and fun features.
              </p>
            </section>

            <section className="mb-5">
              <h2>Features Implemented</h2>
              <ul>
                <li>
                  <strong>Navigation Links:</strong> Home, Animals, Birds,
                  Insects, Fish, and About.
                </li>
                <li>
                  <strong>Home Page:</strong> Shows four big images that link to
                  the Animals, Birds, Insects, and Fish pages.
                </li>
                <li>
                  <strong>Category Pages:</strong>
                  <ul>
                    <li>Each category page lists creatures as cards.</li>
                    <li>
                      Search Feature: Search for specific creatures by name
                      within each category.
                    </li>
                    <li>
                      Creature Cards: Each card shows the creature's name and
                      image, and includes:
                      <ul>
                        <li>Add/Remove Likes: Like or unlike a creature.</li>
                        <li>Remove Card: Remove the creature's card.</li>
                        <li>
                          See More Button: Opens the detailed page for that
                          creature.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Single Creature Page:</strong> Shows detailed
                  information about the selected creature. Includes a "Back to
                  Previous Page" button for easy navigation.
                </li>
                <li>
                  <strong>About Page:</strong> This page includes information
                  about the project and features implemented.
                </li>
              </ul>
            </section>

            <section className="mb-5">
              <h2>What I Learned</h2>
              <ul>
                <li>
                  <strong>Web Development Fundamentals:</strong>
                  <ul>
                    <li>
                      Improved my skills in HTML, CSS, and JavaScript to make a
                      responsive and user-friendly interface.
                    </li>
                    <li>
                      Used React for creating dynamic components and managing
                      state effectively.
                    </li>
                    <li>
                      Learned new hooks like useParams, got to know about
                      components Link and NavLink, and discovered nested routing
                      with Outlet.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>User Experience Design:</strong> Focused on making
                  navigation simple and accessible. Developed interactive
                  features like likes, search functionality, and dynamic content
                  display to make the site more engaging.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
