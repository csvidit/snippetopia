"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import { CopyBlock, irBlack } from "react-code-blocks";
import Modal2 from "./Modal2";

const SnippetItem = (props: {}) => {
  const [isCode, setIsCode] = useState(false);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <motion.div
      layout
      className="flex flex-col space-y-2.5 w-full h-[500px] overflow-hidden"
    >
      <div className="text-indigo-600 tracking-tight font-medium text-xl lg:text-2xl">
        Modal with button
      </div>
      <motion.div
        layout
        className={`w-full flex flex-row space-x-2.5 font-semibold`}
      >
        <motion.div layout className="flex flex-col space-y-1">
          <motion.button
            className={` ${isCode ? "text-indigo-600" : "text-gray-900"}`}
            onClick={() => setIsCode(true)}
          >
            Code
          </motion.button>
          {isCode && (
            <motion.div
              layout
              layoutId="snippet-tab-underline"
              className={`border-t ${
                isCode ? "border-indigo-600" : "border-gray-900"
              } w-full`}
            ></motion.div>
          )}
        </motion.div>
        <motion.div layout className="flex flex-col space-y-1">
          <motion.button
            className={` ${!isCode ? "text-indigo-600" : "text-gray-900"}`}
            onClick={() => setIsCode(false)}
          >
            Demo
          </motion.button>
          {!isCode && (
            <motion.div
              layout
              layoutId="snippet-tab-underline"
              className={`border-t ${
                !isCode ? "border-indigo-600" : "border-gray-900"
              } w-full`}
            ></motion.div>
          )}
        </motion.div>
      </motion.div>
      <motion.div layout className="flex w-full h-full">
        <LayoutGroup>
          {isCode ? (
            <AnimatePresence>
              <motion.div
                layout
                className="w-full h-full max-h-full overflow-hidden"
              >
                {/* <CopyBlock
                  text={`import { useEffect } from 'react';
          import { motion, AnimatePresence } from 'framer-motion';
          
          type ModalProps = {
            isOpen: boolean;
            onClose: () => void;
          };
          
          const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
            useEffect(() => {
              const handleEscapeKey = (event: KeyboardEvent) => {
                if (event.key === 'Escape') {
                  onClose();
                }
              };
          
              if (isOpen) {
                document.addEventListener('keydown', handleEscapeKey);
              }
          
              return () => {
                document.removeEventListener('keydown', handleEscapeKey);
              };
            }, [isOpen, onClose]);
          
            return (
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    className="fixed inset-0 bg-indigo-950 bg-opacity-50 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h2 className="text-lg font-bold mb-4">Modal Title</h2>
                      <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante eget ligula
                        scelerisque suscipit. Nulla facilisi. Sed tristique scelerisque iaculis. Sed feugiat
                        mauris non nisi mattis malesuada. Fusce accumsan mauris et pulvinar scelerisque.
                      </p>
                      <div className="mt-4 flex justify-end">
                        <button
                          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
                          onClick={onClose}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            );
          };
          
          export default Modal;
          `}
                  language="typescript"
                  showLineNumbers={false}
                  startingLineNumber={1}
                  theme={irBlack}
                  customStyle={{
                    width: "100%",
                    height: "100%",
                    overflow: "scroll",
                  }}
                  wrapLines
                /> */}
              </motion.div>
            </AnimatePresence>
          ) : (
            <AnimatePresence>
              <motion.div
                layout
                className="w-full h-full min-h-max bg-indigo-50 flex flex-col justify-center items-center relative overflow-scroll"
              >
                <button
                  className="border-2 font-medium border-gray-950 bg-gray-950 hover:bg-transparent hover:text-gray-950 transition-all ease-in-out duration-200 text-gray-100 rounded-full px-5 py-1 w-fit"
                  onClick={handleOpenModal}
                >
                  Open Modal
                </button>
                <div className="absolute top-0">
                  <Modal2 isOpen={isModalOpen} onClose={handleCloseModal} />
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </LayoutGroup>
      </motion.div>
    </motion.div>
  );
};

export default SnippetItem;
