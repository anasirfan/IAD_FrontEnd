import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import whoAreWe from "../images/whoarewe.jpg";
import philosophy from "../images/philosophy.svg";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* <section className="shadow-xl rounded-lg py-16 m-12 rounded-lg bg-zinc-700">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-5 ">
          <div className="container mx-auto px-7">
            <h2 className="text-4xl font-bold mb-4 text-blue-700 ">Who We Are</h2>
            <p className="text-gray-100">
              The Secure Solutions is a leading software house that
              is dedicated to providing innovative digital solutions
              to businesses of all sizes. With our team of highly skilled
              and experienced professionals, we are committed to helping our
              clients achieve their digital goals and stay ahead in today's
              competitive market. At The Secure Solutions, we understand the
              importance of staying up-to-date with the latest technologies and
              trends. We continuously strive to explore and implement cutting-edge
              solutions that can drive business growth and enhance efficiency.
              Our expertise covers a wide range of areas, including software development,
              web development, mobile app development, cloud computing, artificial intelligence,
              and more. We take pride in our customer-centric approach, where we prioritize
              understanding our clients' unique needs and tailoring our solutions to meet their specific requirements.
              Whether it's developing a custom software application, building a responsive website,
              or creating a user-friendly mobile app, we are dedicated to delivering high-quality solutions that exceed expectations.
              Collaboration and communication are at the core of our work philosophy.
            </p>
          </div>
          <div className="flex flex-col mx-auto">
            <div className="my-auto">
              <img src={whoAreWe} className="w-auto rounded-lg " alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="shadow-2xl rounded-lg bg-orange-500 py-16 m-12 rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-5">
          <div className="flex flex-col mx-auto">
            <div className="my-auto transition duration-200 ease-in-out transform hover:scale-110">
              <img src={philosophy} className="w-auto rounded-lg " alt="" />
            </div>
          </div>
          <div className="container mx-auto px-4 ">
            <h2 className="text-3xl font-bold mb-4 text-zinc-700">Our Philosophy</h2>
            <p className="text-emerald-200">
              At The Secure Solutions, our philosophy is centered around delivering high-quality software solutions that are secure, reliable,
              and tailored to meet the unique needs of our clients. We believe in fostering strong partnerships with our clients, understanding their business objectives, and leveraging the latest technologies to drive digital transformation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non arcu sed arcu mattis consequat. Quisque et sapien eu lectus ullamcorper lobortis. Nulla facilisi. Suspendisse potenti. Proin at commodo felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer condimentum elit non est scelerisque, sit amet lobortis lacus tincidunt. Donec eleifend elementum massa, nec faucibus sapien ultrices eu. Aliquam vitae lacinia ligula, in pellentesque mauris.
            </p>
          </div>
        </div>
      </section>

      <section className=" m-12 rounded-lg bg-gray-500">
        <div className="container mx-auto p-7 rounded-xl ">
          <h2 className="text-4xl uppercase text-center font-bold mb-4 text-blue-900">Our Services</h2>
          <hr className="border-blue-700" />
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-md shadow-md p-6 bg-gradient-to-r from-sky-300 to-sky-500 transition duration-500 ease-in-out transform hover:scale-110">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Software Management</h3>
              <p className="text-gray-700">
                We offer comprehensive software management services to help businesses streamline their software development and maintenance processes.
                From requirements gathering to deployment and ongoing support, our team ensures smooth and efficient software management throughout the lifecycle.
              </p>
            </div>
            <div className="rounded-md shadow-md p-6 bg-gradient-to-r from-sky-300 to-sky-500 transition duration-500 ease-in-out transform hover:scale-110">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Project Management</h3>
              <p className="text-gray-700">
                Our project management services enable businesses to effectively plan, execute, and control software development projects.
                We utilize industry-standard methodologies and tools to ensure timely delivery, cost control, and quality assurance.
              </p>
            </div>
            <div className="rounded-md shadow-md p-6 bg-gradient-to-r from-sky-300 to-sky-500 transition duration-500 ease-in-out transform hover:scale-110">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Sales of Softwares</h3>
              <p className="text-gray-700">
                We offer a wide range of software solutions for various industries. Our software products are designed to address specific business
                needs and deliver exceptional performance, reliability, and security. We provide comprehensive support and maintenance services for our software products.
              </p>
            </div>
            <div className="rounded-md shadow-md p-6 bg-gradient-to-r from-sky-300 to-sky-500 transition duration-500 ease-in-out transform hover:scale-110">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Customer Service</h3>
              <p className="text-gray-700">
                Our customer service team is dedicated to providing excellent support and assistance to our clients. We prioritize customer satisfaction
                and strive to exceed expectations by offering prompt and efficient resolution of issues and inquiries.
              </p>
            </div>
            <div className="rounded-md shadow-md p-6 bg-gradient-to-r from-sky-300 to-sky-500 transition duration-500 ease-in-out transform hover:scale-110 col-span-1 md:col-span-2 mx-auto">
              <h3 className="text-xl font-bold mb-4 text-center text-blue-700">E-commerce Website</h3>
              <p className="text-gray-700 text-center">
                We specialize in developing customized e-commerce websites that are secure, user-friendly, and optimized for conversions.
                Our team creates visually appealing designs and integrates efficient functionalities to help businesses establish a strong online presence and drive sales.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="shadow-xl rounded-lg py-16 m-12 bg-blue-400">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-5">
          <div className="container mx-auto px-7">
            <h2 className="text-4xl font-bold mb-4 text-white">Who We Are</h2>
            <p className="text-zinc-100">
              The Secure Solutions is a leading software house that
              is dedicated to providing innovative digital solutions
              to businesses of all sizes. With our team of highly skilled
              and experienced professionals, we are committed to helping our
              clients achieve their digital goals and stay ahead in today's
              competitive market. At The Secure Solutions, we understand the
              importance of staying up-to-date with the latest technologies and
              trends. We continuously strive to explore and implement cutting-edge
              solutions that can drive business growth and enhance efficiency.
              Our expertise covers a wide range of areas, including software development,
              web development, mobile app development, cloud computing, artificial intelligence,
              and more. We take pride in our customer-centric approach, where we prioritize
              understanding our clients' unique needs and tailoring our solutions to meet their specific requirements.
              Whether it's developing a custom software application, building a responsive website,
              or creating a user-friendly mobile app, we are dedicated to delivering high-quality solutions that exceed expectations.
              Collaboration and communication are at the core of our work philosophy.
            </p>
          </div>
          <div className="flex flex-col mx-auto">
            <div className="my-auto">
              <img src={whoAreWe} className="w-auto rounded-lg" alt="Who We Are" />
            </div>
          </div>
        </div>
      </section>

      <section className="shadow-2xl rounded-lg bg-blue-400 py-16 m-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-5">
          <div className="flex flex-col mx-auto">
            <div className="my-auto transition duration-200 ease-in-out transform hover:scale-110">
              <img src={philosophy} className="w-auto rounded-lg" alt="Our Philosophy" />
            </div>
          </div>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Philosophy</h2>
            <p className="text-zinc-100">
              At The Secure Solutions, our philosophy is centered around delivering high-quality software solutions that are secure, reliable,
              and tailored to meet the unique needs of our clients. We believe in fostering strong partnerships with our clients, understanding their business objectives, and leveraging the latest technologies to drive digital transformation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non arcu sed arcu mattis consequat. Quisque et sapien eu lectus ullamcorper lobortis. Nulla facilisi. Suspendisse potenti. Proin at commodo felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer condimentum elit non est scelerisque, sit amet lobortis lacus tincidunt. Donec eleifend elementum massa, nec faucibus sapien ultrices eu. Aliquam vitae lacinia ligula, in pellentesque mauris.
            </p>
          </div>
        </div>
      </section>

      <section className="m-12 rounded-lg bg-blue-400">
        <div className="container mx-auto p-7 rounded-xl">
          <h2 className="text-4xl capitalize text-center font-bold mb-4 mt-8 text-white">Our Services</h2>
          <hr className="border-gray-500" />
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-md bg-white shadow-md p-6 transition duration-500 ease-in-out transform hover:scale-110">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Software Management</h3>
              <p className="text-gray-800">
                We offer comprehensive software management services to help businesses streamline their software development and maintenance processes. From requirements gathering to deployment and ongoing support, our team ensures smooth and efficient software management throughout the lifecycle.
              </p>
            </div>
            <div className="rounded-md bg-white shadow-md p-6 transition duration-500 ease-in-out transform hover:scale-110">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Project Management</h3>
              <p className="text-gray-800">
                Our project management services enable businesses to effectively plan, execute, and control software development projects. We utilize industry-standard methodologies and tools to ensure timely delivery, cost control, and quality assurance.
              </p>
            </div>
            <div className="rounded-md bg-white shadow-md p-6 transition duration-500 ease-in-out transform hover:scale-110">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Sales of Software</h3>
              <p className="text-gray-800">
                We offer a wide range of software solutions for various industries. Our software products are designed to address specific business needs and deliver exceptional performance, reliability, and security. We provide comprehensive support and maintenance services for our software products.
              </p>
            </div>
            <div className="rounded-md bg-white shadow-md p-6 transition duration-500 ease-in-out transform hover:scale-110">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Customer Service</h3>
              <p className="text-gray-800">
                Our customer service team is dedicated to providing excellent support and assistance to our clients. We prioritize customer satisfaction and strive to exceed expectations by offering prompt and efficient resolution of issues and inquiries.
              </p>
            </div>
            <div className="rounded-md bg-white shadow-md p-6 transition duration-500 ease-in-out transform hover:scale-110 col-span-1 md:col-span-2 mx-auto">
              <h3 className="text-xl font-bold mb-4 text-center text-blue-700">E-commerce Website</h3>
              <p className="text-gray-800 text-center">
                We specialize in developing customized e-commerce websites that are secure, user-friendly, and optimized for conversions. Our team creates visually appealing designs and integrates efficient functionalities to help businesses establish a strong online presence and drive sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full dark:bg-gray-900 py-8"></div>
    </div>
  );
};

export default Home;
