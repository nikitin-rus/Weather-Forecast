import { useRef } from "react";

export const useSlider = (content, contentWrapper) => {
    
    const transformedRef = useRef(0);

    function moveLeft() {

        // Getting contentWrapper width
        let width = getWidth();

        // If left overflow < slider width
        if (Math.abs(transformedRef.current) < width) 
        {
            // Return to initial state
            transformedRef.current = 0;
        } 
        else 
        {
            transformedRef.current += width;
        }

        // Moving slider left
        content.current.style.transform = `translateX(${transformedRef.current}px)`;
    }

    function moveRight() {

        // Getting contentWrapper width
        let width = getWidth();

        // Getting contentWrapper overflow
        let overflow = getOverflow();

        // If pulled content left on all overflow content
        if (Math.abs(transformedRef.current) >= overflow) {
            return;
        }

        // If overflow > visible width
        if (overflow + transformedRef.current > width) {
            transformedRef.current -= width;
        } 
        else {
            transformedRef.current = -1 * overflow;
        }

        // Moving slider right
        content.current.style.transform = `translateX(${transformedRef.current}px)`;
    }
    
    function getWidth() {
        return contentWrapper.current.clientWidth;
    }

    function getOverflow() {
        return contentWrapper.current.scrollWidth - contentWrapper.current.clientWidth;
    }

    return [moveLeft, moveRight];
}