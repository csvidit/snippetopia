import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal2: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
          initial={{ opacity: 0, scale: 0.9}}
          animate={{ opacity: 1, scale: 1}}
          exit={{ opacity: 0, scale: 0.9}}
        >
          <div className="bg-white p-4 rounded-lg shadow-md w-1/2">
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

export default Modal2;
