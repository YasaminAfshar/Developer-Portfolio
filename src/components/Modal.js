import React from 'react'

const Modal = ({ isOpen, onClose, title, message }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
          <div className="max-h-full w-full max-w-md sm:max-w-xl overflow-hidden rounded-2xl bg-white">
            <div className="w-full">
              <div className="my-10 sm:my-20 max-w-[400px] mx-auto">
                <div className="mb-8">
                  <h1 className="mb-8 mt-12 sm:mt-0 text-2xl sm:text-3xl font-extrabold text-center">
                    {title}
                  </h1>
                  <p className="text-gray-600 text-[0.9rem] sm:text-lg text-center">
                    {message}
                  </p>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={onClose}
                    className="py-3 px-6 bg-black rounded-full text-white sm:text-lg sm:w-full tracking-wider font-semibold"
                    aria-label="Close Button"
                  >
                    Close notification
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal