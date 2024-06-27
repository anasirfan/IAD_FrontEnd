import React from 'react';
import Navbar from './navbar';
// import philosophy from "../images/philosphy.webp";
const About = () => {
  return (
    <div>
      <Navbar />
      <div>

        <section className="py-16 ">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-extrabold text-center text-blue-500 mb-8 tracking-wide leading-tight">
              About Us
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-400 text-white px-6 py-4">
                  <h2 className="text-3xl font-bold">Our Philosophy</h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-800 leading-relaxed">
                    At The Secure Solutions, our philosophy is centered around delivering high-quality software solutions
                    that are secure, reliable, and tailored to meet the unique needs of our clients. We believe in
                    fostering strong partnerships with our clients, understanding their business objectives, and
                    leveraging the latest technologies to drive digital transformation.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-400 text-white px-6 py-4">
                  <h2 className="text-3xl font-bold">Our Team</h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-800 leading-relaxed">
                    Our team at The Secure Solutions consists of highly skilled and experienced professionals who are
                    passionate about delivering exceptional software solutions. We have a diverse group of experts,
                    including software engineers, web developers, UI/UX designers, project managers, and quality
                    assurance specialists. Together, we work collaboratively to understand our clients' needs and
                    provide customized solutions that meet their business objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-200 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">Excellence</h3>
                  <p className="text-gray-800 leading-relaxed">
                    We strive for excellence in everything we do, ensuring the highest quality of work.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">Innovation</h3>
                  <p className="text-gray-800 leading-relaxed">
                    We embrace innovation and continuously seek new and creative solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">Collaboration</h3>
                  <p className="text-gray-800 leading-relaxed">
                    We believe in the power of collaboration and teamwork to achieve great results.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">Customer Satisfaction</h3>
                  <p className="text-gray-800 leading-relaxed">
                    We prioritize customer satisfaction and strive to exceed expectations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">Integrity</h3>
                  <p className="text-gray-800 leading-relaxed">
                    We uphold the highest ethical standards and maintain transparency in our interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 ">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-500 mb-8">Our Clients</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-blue-400 rounded-lg shadow-lg border-4 ">
                <h3 className="text-2xl font-bold text-white mb-4">Startups</h3>
                <p className="text-gray-800 leading-relaxed">
                  We collaborate with startups to turn their innovative ideas into robust software solutions, fueling their growth and success.
                </p>
              </div>
              <div className="p-6 bg-blue-400 rounded-lg shadow-lg border-4">
                <h3 className="text-2xl font-bold text-white mb-4">Small & Medium-sized Businesses</h3>
                <p className="text-gray-800 leading-relaxed">
                  We support SMBs with scalable software solutions that optimize operations and drive efficiency, helping them achieve sustainable growth.
                </p>
              </div>
              <div className="p-6 bg-blue-400 rounded-lg shadow-lg border-4">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise-level Organizations</h3>
                <p className="text-gray-800 leading-relaxed">
                  We partner with enterprises to deliver enterprise-grade software solutions that enhance productivity, streamline processes, and ensure scalability.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
};

export default About;
