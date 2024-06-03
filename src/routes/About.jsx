import React from "react";


const About = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8">
            <h1 className="mb-4 text-center">About This Project</h1>

            <section className="mb-5 p-4">
              <h2 className="mb-3">Description</h2>
              <p className="fs-4">
                Welcome to my Zoo/Animals project ! This website is made to give
                you information on different creatures like Animals, Birds,
                Insects, and Fish. I aim to educate and entertain users with an
                easy-to-use interface and some great features.
              </p>
            </section>

            <section className="mb-5 border border-success border-2 p-4 ms-0">
              <h2 className="mb-3">Features Implemented</h2>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <strong>Navigation Links:</strong>
                  </div>
                  <div className="col">
                    Home, Animals, Birds, Insects, Fish, and About.
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <strong>Home Page:</strong>
                  </div>
                  <div className="col">
                    Shows four big images that link to the Animals, Birds,
                    Insects, and Fish pages.
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <strong>Creature Cards:</strong>
                  </div>
                  <div className="col">
                    <ul>
                      Each card shows the creature's name and image, and
                      includes:
                      <li>Add/Remove Likes: Like or unlike a creature.</li>
                      <li>Remove Card: Remove the creature's card.</li>
                      <li>
                        See More Button: Opens the detailed page for that
                        creature.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <strong>Single Creature Page:</strong>
                  </div>
                  <div className="col">
                    Shows detailed information about the selected creature.
                    Includes a "Back to Previous Page" button for easy
                    navigation.
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <strong>About Page:</strong>
                  </div>
                  <div className="col">
                    This page includes information about the project and
                    features implemented.
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-5 p-4">
              <h2 className="mb-3">What I Learned</h2>
              <ul className="list-unstyled">
                <li>
                  <strong>Web Development Fundamentals:</strong>
                  <ul className="list-unstyled">
                    <li>
                      Improved my skills in HTML, CSS, and JavaScript to make a
                      responsive and user-friendly interface.
                    </li>
                    <li>
                      Used React for creating dynamic components and managing
                      state effectively.
                    </li>
                    <li>
                      Learned hooks like <code>useParams</code>,{" "}
                      <code>useState</code>, and <code>useEffect</code>. Got to
                      know about components <code>Link</code> and{" "}
                      <code>NavLink</code>, and discovered nested routing with{" "}
                      <code>Outlet</code>.
                    </li>
                    <li>
                      Discovered how to fetch data through API using{" "}
                      <code>axios</code>.
                    </li>
                  </ul>
                </li>
                <li className="mt-2">
                  <strong>User Experience Design:</strong>
                  <ul className="list-unstyled">
                    <li>
                      Focused on making navigation simple and accessible.
                      Developed interactive features like likes, search
                      functionality, and dynamic content display to make the
                      site more engaging.
                    </li>
                  </ul>
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
