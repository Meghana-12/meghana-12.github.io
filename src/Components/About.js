import React from "react";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = data.resumedownload;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>
            Hi Amigos! I'm Meghana Varanasi! Just another soul exploring
            different technologies with an ultimate goal to help others using
            tech.Along with my studies, I learnt different web
            dev techs like react, redux and saga, dynamic css, component css and
            ofc vanilla css and handling apis using axios .{" "}
          </p>
          <p>
            Adding to this I had the opportunity to be part of various events
            and play different roles. I’ve been a General secretary of cultural
            affairs(2019-2020), I’ve participated in hackathons, I’ve been a
            mentor, a mentee, core member, lead, a sports person and part of
            cultural clubs, helped build a few websites for clubs and a
            an open source contributer. If you think tech dev is the only thing I do,
            darling, you got me all wrong, I play guitar, make art and more
            importantly have fun!.{" "}
          </p>
          <p>Thanks for stopping by! I hope you have a Wonderful day!</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                Senior @IIT Bhilai
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumeDownload} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Meghana's Profile Pic"
            style={{ paddingTop: "25%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
