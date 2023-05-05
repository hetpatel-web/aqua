import React from "react";

const AboutUS = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            AquaConsulting is a team of highly experienced IT professionals that
            hold leading positions in top companies in Canada, USA and Israel.
          </li>
          <li>
            Our e-learning programs are designed to provide theoretical
            knowledge and practical skills necessary to meet software industry
            needs, including simulation of work environment and real-world
            problem-solving.
          </li>
          <li>
            We believe in learning by doing, and therefore, we provide software
            testing at every stage of the application development process and
            guide students through the full job interview process.
          </li>
          <li>
            Our commitment is to provide our students with quality training,
            constant evaluation, and support in pursuing their successful IT
            career.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUS;
