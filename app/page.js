import mysql from 'mysql2/promise';
import Head from 'next/head'; 
import Image from 'next/image'; 
import '../styles/styles.css';
import '../styles/globals.css';
import Carousel from '../components/carousel.js';


async function fetchCourses() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sqlpassword1',
    database: 'cantor-database',
  });

  const [courses] = await connection.execute('SELECT * FROM computingcourses');
  connection.end();

  console.log(courses); 
  return courses;
}

export default async function Home() {
  const courses = await fetchCourses();

  console.log(courses); 


  const carouselImages = [
    '/cantorcampus.jpg',
    '/cantor.atrium1.jpg',
    '/cantor.atrium2.jpg',
    '/cantor.lecture1.JPG',
    '/cantor.main1.png',
  ];


    return (
      <>
        <Head>
          <title>Cantor College Website</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          
        </Head>
        <body>
    
        <header className="header">
      <Image
      src="/cantor-logo.png"
      alt="Cantor College Logo"
      width={160}
      height={160}
      className="logo" />
              <nav>
     
              <ul>
                <li>
                  <a href="#about-us">About Us</a>
                </li>           
                <li>
                  <a href="#facilities">Facilities</a>
                </li>
                <li>
                  <a href="#computing-courses">Computing Courses</a>
                </li>
                <li>
                  <a href="#design-courses">Design Courses</a>
                </li>
                <li>  
                  <a href="#information-for-students">Information for Students</a>
                </li>
                <li>
                  <a href="##information-for-staff">Information for Staff</a>
                </li>
                <li>
                  <a href="#information-for-business">Information for Business</a>
                </li>
                <li>  
                  <a href="#rules">Rules</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </nav>
          </header>
  
          <main>

  <section id="about-us">
    <h2>About Us</h2>
    <div className="about-us-content">
      <p>
        Cantor College was established in 1989 to specialize in Computing
        and Design. At Cantor College, we want to give students the
        education they need to achieve their career aims, leaving them
        equipped with the knowledge, skills, and experience to succeed.
        Cantor College gives you the opportunities that can give you the
        edge when you enter the world of work, through our teaching and
        our links to some of the world's leading researchers and
        employers. Our students have gone on to successful careers in a
        wide range of industries across the globe. Whatever your
        ambitions, our learning and support can help to get the most out
        of your time with Cantor College, both as a student and in your
        future career.
      </p>
      <div className="images-container">
        <Image
          src="/cantor-campus2.jpg"
          alt="Cantor Campus"
          width={400}
          height={300}
          className="about-image"
        />
        <Image
          src="/cantor1.jpg"
          alt="Another Campus Image"
          width={400}
          height={300}
          className="about-image"
        />
        <Image
          src="/cantor4.jpg"
          alt="Another Campus Image"
          width={400}
          height={300}
          className="about-image"
        />
        <Image
          src="/cantor2.jpg"
          alt="Another Campus Image"
          width={400}
          height={300}
          className="about-image"
        />
      </div>
    </div>
  </section>

            <section id="facilities">
              <h2>Facilities</h2>
              <p>
                The College is located in the attractive and pleasantly
                refurbished building. The building houses computing laboratories,
                and lecture/tutorial rooms. It has its own catering facilities
                and student work areas. There is also a car park to the back of
                the building.
              </p>
              <p>
                Our building has space of 9500m², houses over 240 staff and
                provides teaching space for more than 1600 students.
              </p>
  
              <h3>Facilities include:</h3>
              <ul>
                <li>Wi-fi technology</li>
                <li>Pool teaching rooms, including classrooms to teach from 25 - 80 students</li>
                <li>Specialist faculty facilities</li>
                <li>A double height lecture theatre at first and second floor level</li>
                <li>Dramatic three-storey glass open atrium</li>
                <li>Meeting rooms</li>
                <li>Office accommodation</li>
                <li>Specialist IT facilities</li>
                <li>Reception desk area</li>
                <li>Catering outlet</li>
                <li>Parking for disabled badge holders</li>
                <li>Cycle racks</li>
                <li>Gallery</li>
              </ul>
              
              {/*Carousel*/}
              <Carousel images={carouselImages} />

            </section>

            

            <section id="computing-courses">
              <h2>Computing Courses</h2>
              <p>
                The College offers a range of courses to suit applicants with
                varying backgrounds and educational abilities. At undergraduate
                level, there are single BSc Honours Degree courses in Computing,
                Computer Networks, Software Engineering and Cyber Security with
                Forensics amongst others.
              </p>
              <p>
                The College teaches undergraduate and postgraduate courses in a
                wide range of specialisms, including computer science, software
                development, information systems, networking and software
                engineering. It is at the heart of a passionate computing
                community, including student societies devoted to games
                development, digital forensics and programming.
              </p>
              <p>
                The courses are British Computer Society accredited and are
                highly relevant to modern industry. They are designed to prepare
                students for professional occupations in Computing and related
                fields. Many graduates continue their studies to pursue a higher
                degree such as an MSc. or PhD.
              </p>
            </section>
  
            <section id="design-courses">
              <h2>Design Courses</h2>
              <p>
                The College is an internationally connected creative community of
                diverse disciplines housed under one roof. We shape our students'
                futures, preparing them to shape the world through applied
                knowledge and creativity.
              </p>
              <p>
                The College's art and design courses don't just train you, they
                promote alternative ways of thinking, making and communicating;
                they provide you with space, tools and inspiration to develop
                your creative practice and a clear career path. You'll get expert
                teaching from active practitioners and researchers who will
                encourage you to adopt innovative and resourceful approaches that
                both perceive and create opportunities for better lives.
              </p>
              <p>
                You’ll develop your creative practice whilst interacting with your
                peers in well-equipped studios, making and digital workshops. At
                the same time, you'll learn professional skills by working on
                applied briefs facilitated through our links with commercial
                clients, cultural institutions, businesses and organisations.
              </p>

              <h3>Courses Available:</h3> 

              <div className="course-list">
    {courses.map((course) => (
      <div key={course.CourseTitle} className="course-card">
        <h3>{course.CourseTitle}</h3>
        <p>
          <strong>Course Type:</strong> {course.CourseType}
        </p>
        <p>
          <strong>Summary:</strong> {course.CourseSummary}
        </p>
        <p>
          <strong>Award:</strong> {course.CourseAwardName}
        </p>
        <p>
          <strong>UCAS Code:</strong> {course.UcasCode} | 
          <strong> UCAS Points:</strong> {course.UcasPoints}
        </p>
        <p>
          <strong>Year of Entry:</strong> {course.YearOfEntry}
        </p>
        <p>
          <strong>Mode of Attendance:</strong> {course.ModeOfAttendance}
        </p>
        <p>
          <strong>Study Length:</strong> {course.StudyLength}
        </p>
        <p>
          <strong>Has Foundation Year:</strong> {course.HasFoundation ? 'Yes' : 'No'}
        </p>
        <p>
          <strong>Subject:</strong> {course.CourseSubject}
        </p>
        <p>
          <strong>No Longer Recruiting:</strong> {course.NoLongerRecruiting ? 'Yes' : 'No'}
        </p>
      </div>
    ))}
  </div>


            </section>
  

            <section id="information-for-students">
              <h2>Information for Students</h2>
              <p>
                <strong>Explore Cantor College: World-Class Facilities for Your Success</strong>
              </p>
              <p>
                At Cantor College, we are committed to providing our students with the best possible environment to learn, create, and innovate. Our state-of-the-art facilities are designed to support your academic journey and help you thrive in your chosen field. Whether you’re studying computing, design, or technology, our campus offers everything you need to excel.
              </p>

              <h3>Our Facilities</h3>
              <ul>
                <li><strong>Advanced Computing Labs</strong>: Our computing labs are equipped with the latest hardware and software, providing you with the tools you need to develop your skills in programming, cybersecurity, data science, and more. The labs are accessible 24/7, ensuring you can work on your projects at any time that suits you.</li>
                <li><strong>Design Studios</strong>: Our design studios offer a creative space for students in graphic design, digital media, and product design. Each studio is equipped with high-end graphic tablets, professional-grade software, and large-format printers, allowing you to bring your ideas to life. The studios also feature collaborative spaces where you can work with peers and faculty on group projects.</li>
                <li><strong>Innovation and Makerspace</strong>: Cantor College’s Innovation and Makerspace is a hub for creativity and invention. This facility is equipped with 3D printers, laser cutters, CNC machines, and other advanced prototyping tools. Whether you're working on a design project or developing a new tech product, this space provides the resources to turn your concepts into reality.</li>
                <li><strong>Technology Sandbox</strong>: The Technology Sandbox is an experimental space where students can explore the latest in VR, AR, and AI technologies. With access to cutting-edge devices and software, you’ll be able to experiment with emerging technologies and push the boundaries of what’s possible in your field.</li>
                <li><strong>Collaborative Learning Spaces</strong>: Our campus features numerous collaborative learning spaces designed to foster teamwork and creative problem-solving. These spaces are equipped with smartboards, video conferencing tools, and flexible seating arrangements, making them ideal for group work, study sessions, or brainstorming meetings.</li>
                <li><strong>Library and Resource Centre</strong>: The Cantor College Library is a comprehensive resource Centre offering an extensive collection of books, journals, and digital resources related to computing, design, and technology. The library also provides quiet study areas, computer stations, and access to online databases, ensuring you have the information you need at your fingertips.</li>
                <li><strong>Student Hub</strong>: The Student Hub is the social heart of our campus, providing a place for relaxation and connection. Here, you’ll find a café, lounge areas, and recreational facilities, making it the perfect spot to unwind between classes, meet with friends, or join student-led activities and clubs.</li>
                <li><strong>Career and Development Centre</strong>: Our Career and Development Centre is dedicated to helping you plan your future. Offering career counseling, resume workshops, and job placement services, this Centre provides the support you need to transition from student to professional. The Centre also hosts regular employer networking events and industry talks to help you build connections in your field.</li>
                <li><strong>Fitness and Wellness Centre</strong>: We believe in nurturing both the mind and body. Our Fitness and Wellness Centre offers a fully equipped gym, exercise studios, and a range of fitness classes to help you stay healthy and active. The Centre also includes wellness services such as yoga, meditation, and counseling to support your overall well-being.</li>
                <li><strong>On-Campus Housing</strong>: For those who choose to live on campus, Cantor College offers modern, comfortable housing options. Our residence halls provide a supportive community environment, with amenities like high-speed internet, study lounges, and common areas where you can relax and socialize.</li>
              </ul>

              <p><strong>Experience Cantor College</strong>: Cantor College’s facilities are designed to enhance your learning experience and support your academic and personal growth. We invite you to explore our campus, discover our resources, and make the most of everything we have to offer.</p>
            </section>


            <section id="information-for-staff">
            <h2>Information for Staff</h2>
            <h3>News</h3>
            <p>
              Cantor College recently hosted the Software Engineering student of the year awards. Shortlisted candidates from around the country attended the one-day event.
            </p>
            <h3>Academic Registry</h3>
            <p>
              For academic regulations, assessment, awards, student records, and course validation.
            </p>
            <h3>Catering Services</h3>
            <p>
              Contact the Catering Services regarding on and off-site catering.
            </p>
            <h3>Financial Services</h3>
            <p>
              The financial team based on the 2nd Floor are responsible for all areas of student finance as well as College budgeting.
            </p>
            <h3>Information Systems Services</h3>
            <p>
              The ISS team delivers the College’s computing facilities including all hardware and software. They also run the staff helpdesk.
            </p>
            <h3>Marketing Services</h3>
            <p>
              The Marketing Team will help promote events and new courses. They will help with press release preparation.
            </p>
            <h3>Personnel Services</h3>
            <p>
              All staff pay and conditions enquiries should be directed to the Personnel Services team on the 3rd floor.
            </p>
            <h3>Facilities</h3>
            <p>
              The facilities are responsible for the general care and maintenance of the College. All enquiries via the main helpdesk.
            </p>
          </section>

          <section id="information-for-business">
              <h2>Information for Business</h2>
              <p>
                Partner with Cantor College: Unlock Expertise, Innovation, and Growth
              </p>
              <p>
                At Cantor College, we believe in the power of collaboration between education and industry. Our College offers a range of specialized services designed to support businesses in achieving their goals through cutting-edge expertise, innovation, and tailored solutions. With a focus on Computing, Design, and Technology, we are uniquely positioned to help your business thrive in an increasingly digital world.
              </p>
              <h3>Our Services</h3>
              <ul>
                <li>Custom Training and Development Programs</li>
                <li>Research and Development Partnerships</li>
                <li>Design and Technology Consultancy</li>
                <li>Internships and Graduate Recruitment</li>
                <li>Event Hosting and Sponsorship</li>
              </ul>
              <p>
                Why Partner with Cantor College?
              </p>
              <ul>
                <li>Cutting-Edge Expertise: Our programs are at the forefront of industry trends, ensuring that our services reflect the latest advancements in technology and design.</li>
                <li>Innovation at the Core: We foster a culture of creativity and problem-solving, making us the ideal partner for businesses seeking innovative solutions.</li>
                <li>Tailored Solutions: We understand that every business is unique. Our services are customized to meet your specific objectives and challenges.</li>
                <li>Future-Ready Talent: Our students are trained to excel in the modern workplace, equipped with both theoretical knowledge and practical skills.</li>
              </ul>
              <p>
                Ready to explore how Cantor College can help your business grow? Contact our Business Services team today to discuss your needs and learn more about our offerings. We look forward to working with you to achieve your business goals.
              </p>
            </section>

            <section id="contact">
              <h2>How to Find Us</h2>
              <address>
                <p>
                  Cantor College<br />
                  Main Street<br />
                  Sheffield<br />
                  SC4 2BB
                </p>
                <p>Tel: (01321) 2340 235</p>
                <p>Fax: (01321) 2340 236</p>
                <p>
                  Email: <a href="mailto:info@cantorcollege.ac.uk">info@cantorcollege.ac.uk</a>
                </p>
              </address>
            </section>
          </main>
  
          <footer>
            <p>&copy; 2024 Cantor College. All rights reserved.</p>
          </footer>
        </body>
      </>
    );
  }
  