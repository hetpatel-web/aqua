import React from "react";

const AboutUS = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Who We Are</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Aqua Consulting is comprised of a team of highly experienced IT
            professionals, who hold leading positions in top companies in
            Canada, USA, and Israel. Our main goal is to meet the software
            industry&apos;s needs by providing theoretical knowledge along with
            practical skills, simulation of work environments, and solving
            real-world problems and tasks.
          </p>
          <ul className="text-lg text-gray-700 mt-6">
            <li>
              Learn by doing - we provide software testing at every stage of the
              application development process
            </li>
            <li>Guidance through the full job interview process</li>
            <li>
              Commitment to providing quality training, constant evaluation, and
              support in pursuing a successful IT career
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUS;
