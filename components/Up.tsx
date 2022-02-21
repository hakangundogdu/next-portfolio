import { useEffect, useState } from 'react';
import { FaCaretUp } from 'react-icons/fa';

const Up = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  return (
    <>
      {isVisible && (
        <button
          className="hidden  sm:block fixed right-10 bottom-10 rounded-xl items-center bg-slate-100 text-slate-500 z-30 py-3 px-3 shadow-lg"
          onClick={scrollToTop}
        >
          <FaCaretUp />
        </button>
      )}
    </>
  );
};

export default Up;
