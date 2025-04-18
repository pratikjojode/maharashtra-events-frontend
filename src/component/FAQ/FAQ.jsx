import React, { useState } from "react";
import "./FAQ.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the Maharashtra Education Icon Awards?",
      answer:
        "The Maharashtra Education Icon Awards is a prestigious ceremony that recognizes and honors outstanding contributions to education across Maharashtra. It celebrates educators, administrators, and innovators who are shaping the future of education in our state.",
    },
    {
      question: "Who can be nominated for these awards?",
      answer:
        "Any educator, administrator, institution, or educational initiative operating in Maharashtra is eligible for nomination. This includes teachers, principals, education NGOs, edtech startups, and other stakeholders in the education sector.",
    },
    {
      question: "How can I nominate someone for an award?",
      answer:
        "You can nominate candidates by filling out the online nomination form available on our website. Simply click on the 'Nominate Now' button and follow the instructions to complete your submission.",
    },
    {
      question: "What are the different award categories?",
      answer:
        "We have multiple categories including Academic Excellence, Innovation in Education, Reasearch Excellence , and Impact and Placements Achievements and Alumni Growth. Each category recognizes different aspects of educational excellence.",
    },
    {
      question: "When and where will the awards ceremony take place?",
      answer:
        "The ceremony will be held on June 7, 2025 at Sunny's World in Pune. The event begins at 6:30 PM and will feature the awards presentation along with networking opportunities.",
    },
    {
      question: "Is there a fee to attend the awards ceremony?",
      answer:
        "No, there is no fee to attend the awards ceremony. All guests, including nominees and attendees, are welcome to join the event free of charge."
    },
    {
      question: "How are the winners selected?",
      answer:
        "Winners are selected through a rigorous evaluation process by our panel of judges consisting of education experts. Criteria include impact, innovation, leadership, and measurable outcomes in their respective fields.",
    },
    {
      question: "Can I sponsor this event?",
      answer:
        "Absolutely! We offer various sponsorship packages that provide visibility and networking opportunities with Maharashtra's top educators. Visit our 'Become a Sponsor' section for more details.",
    },
    {
      question: "Who organizes the Maharashtra Education Icon Awards?",
      answer:
        "The awards are organized by Jobizza, a leading education and career platform in Maharashtra, in collaboration with educational institutions and government bodies.",
    },
    {
      question: "How can I contact the organizers for more information?",
      answer:
        "You can reach us at +91 8888181889 or email gaurav@jobizza.com. Our team is available to answer any questions you may have about the awards or nomination process.",
    },
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2 className="section-title-faq">FAQ's</h2>
        <p className="section-subtitle">
          Find answers to common questions about the awards
        </p>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div
                className={`faq-question ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              <div
                className={`faq-answer ${activeIndex === index ? "show" : ""}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
