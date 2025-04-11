import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const faqs = [
  {
    question: "What is ThinkAi text-to-voice?",
    answer:
      "Actual teachings of the great explorer of the truth, the master builder of human happiness.",
  },
  {
    question: "How does it work?",
    answer:
      "It converts written text into spoken words using AI-powered voices.",
  },
  {
    question: "Is it free to use?",
    answer:
      "There might be a free plan, but premium features could require payment.",
  },
  {
    question: "Can I use it for my business?",
    answer:
      "Yes! Many businesses use AI voice tools to narrate product videos.",
  },
];

const FAQSection = () => {
  return (
    <section className="faq-section" id="faq">
      <div className="container py-5">
        <div className="row align-items-start">
          <div className="col-md-6">
            <span className="badge">FAQs 🔥</span>
            <h2 className="mb-4">Frequently Ask Questions</h2>

            <Accordion defaultActiveKey="0" flush>
              {faqs.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>

          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src="/assets/images/mobileapp/faq.png"
              alt="FAQ Visual"
              className="img-faq"
            />
          </div>
        </div>
      </div>

      {/* ✅ Final Custom CSS */}
      <style>{`
        .accordion-button::after {
          content: '+';
          font-size: 1.5rem;
          font-weight: bold;
          background-image: none !important;
          transform: none !important;
          margin-left: auto;
        }

        .accordion-button:not(.collapsed)::after {
          content: '−';
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
