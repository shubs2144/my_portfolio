// components/HireMe.js
'use client';
import React, { useState } from "react";
import { CircularText } from "./Icons";
import BookingSystem from "./BookingSystem";
import Link from "next/link";
import { motion } from 'framer-motion';

const HireMe = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <div className="fixed left-4 -bottom-28 flex items-center justify-center overflow-hidden max-md:right-0 max-md:left-auto max-md:-top-44 z-10 max-md:bottom-auto max-md:absolute">
        <div className="w-48 h-[450px] flex items-center justify-center relative max-md:w-24">
          <CircularText
            className={"fill-[var(--color-dark)] animate-spin-slow dark:fill-[var(--color-light)] dark:text-[var(--color-light)]"}
          />

          <button
            onClick={() => setShowOptions(true)}
            className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-dark)] text-[var(--color-light)] shadow-md border border-solid border-[var(--color-dark)] w-20 h-20 rounded-full font-semibold hover:bg-[var(--color-light)] hover:text-[var(--color-dark)] transition-colors duration-300 ease-in-out dark:bg-[var(--color-light)] dark:text-[var(--color-dark)] dark:border-[var(--color-light)] dark:hover:bg-[var(--color-dark)] dark:hover:text-[var(--color-light)] dark:hover:border-[var(--color-light)] max-md:w-12 max-md:h-12 max-md:text-[10px] hover:cursor-pointer"
          >
            Hire Me
          </button>
        </div>
      </div>

      {/* Options Modal */}
      {showOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[var(--color-light)] dark:bg-[var(--color-dark)] p-8 rounded-lg shadow-xl max-w-md w-full border border-[var(--color-dark)] dark:border-[var(--color-light)]"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold dark:text-[var(--color-light)]">How would you like to proceed?</h2>
              <button
                onClick={() => setShowOptions(false)}
                className="text-[var(--color-dark)] dark:text-[var(--color-light)] hover:text-[var(--color-primary)]"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => {
                  setShowResume(true);
                  setShowOptions(false);
                }}
                className="w-full bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] dark:text-[var(--color-dark)] text-[var(--color-light)] py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center hover:opacity-90 transition-opacity hover:cursor-pointer hover:bg-[var(--color-primary-dark)] hover:text-[var(--color-dark)] border-2 border-solid border-[var(--color-dark)]  border-transparent hover:border-[var(--color-dark)]"
              >
                View Resume
              </button>

              <button
                onClick={() => {
                  setShowBooking(true);
                  setShowOptions(false);
                }}
                className="w-full bg-[var(--color-dark)] dark:bg-[var(--color-light)] text-[var(--color-light)] dark:text-[var(--color-dark)] py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center hover:opacity-90 transition-opacity hover:cursor-pointer hover:bg-[var(--color-light)] hover:text-[var(--color-dark)] border-2 border-solid border-[var(--color-dark)]  border-transparent hover:border-[var(--color-dark)]"
              >
                Schedule Interview
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[var(--color-light)] dark:bg-[var(--color-dark)] p-8 rounded-lg shadow-xl max-w-4xl w-full border border-[var(--color-dark)] dark:border-[var(--color-light)]"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold dark:text-[var(--color-light)]">My Resume</h2>
              <button
                onClick={() => setShowResume(false)}
                className="text-[var(--color-dark)] dark:text-[var(--color-light)] hover:text-[var(--color-primary)] hover:cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="h-[70vh] overflow-y-auto">
              <iframe
                src="/Shubham_FullStack_Developer_2025.pdf"
                className="w-full h-full border border-[var(--color-dark)] dark:border-[var(--color-light)]"
              />
            </div>

            <div className="mt-4 flex justify-center">
              <Link
                href="/Shubham_FullStack_Developer_2025.pdf"
                target="_blank"
                download
                className="bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] dark:text-[var(--color-dark)] text-[var(--color-light)] py-2 px-6 rounded font-semibold hover:opacity-90 transition-opacity hover:cursor-pointer transition-opacity hover:bg-[var(--color-primary-dark)] hover:!text-[var(--color-dark)] border-2 border-solid border-[var(--color-dark)]  border-transparent hover:border-[var(--color-dark)]"
              >
                Download Resume
              </Link>
            </div>
          </motion.div>
        </div>
      )}

      {showBooking && <BookingSystem onClose={() => setShowBooking(false)} />}
    </>
  );
};

export default HireMe;