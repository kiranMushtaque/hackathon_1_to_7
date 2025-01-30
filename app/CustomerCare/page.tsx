"use client";

import React, { useState } from "react";

const FAQItem: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border border-gray-200 rounded-lg ">
      <button
        type="button"
        className="flex items-center justify-between w-full p-4 font-bold text-left text-gray-900 rounded-lg rtl:text-right hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setIsOpen(!isOpen)}
        aria-controls="accordion-body-1"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <svg
          data-accordion-icon
          className="w-3 h-3 rotate-180 shrink-0"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 5L5 1L1 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-5 border-t border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqData = [
    {
      question: "How do we serve food?",
      answer:
        "We prepare every dish with fresh ingredients, cooked to perfection. Our packaging ensures your food stays hot and fresh until it reaches your doorstep.",
    },
    {
      question: "How can we get in touch with you?",
      answer:
        "You can reach us via our customer support phone number or email. We're always available to assist you with your order or any inquiries.",
    },
    {
      question: "How is our food quality?",
      answer:
        "We take pride in the quality of our food. Every dish is carefully prepared, using only the finest ingredients to ensure the best taste and nutritional value.",
    },
    {
      question: "What will be delivered? And When?",
      answer:
        "We deliver your food hot and fresh within 30-45 minutes. You will receive an estimated delivery time when you place your order.",
    },
    {
      question: "How do we give home delivery?",
      answer:
        "Our delivery team ensures that your order is safely delivered right to your doorstep. We track each order to make sure it's delivered on time.",
    },
    {
      question: "Will I be able to get it fast?",
      answer:
        "Yes, we ensure a quick delivery service to get your food to you as soon as possible. Our delivery team works around the clock to bring your order swiftly.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 mt-10">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-500 mb-12">
        Here are some common questions that our customers ask before placing an
        order. We strive to make your experience as smooth as possible!
      </p>
      <div className="max-w-3xl mx-auto">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
