import { useEffect, useState } from "react";

const useScrollToTop = () => {
    const [showButton, setShowButton] = useState<boolean>(false);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    return { showButton, goToTop }
}

export default useScrollToTop;
