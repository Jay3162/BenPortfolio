import {fireEvent, render, screen} from '@testing-library/react';
import Design1 from '../../design1';

describe("scrolls to navbar element on click", () => {
    render(<Design1/>)
    const navbarBtn = screen.getByTestId("contact-btn");
    const contactForm = screen.getByTestId("contact-form");
    fireEvent.click(navbarBtn);
    expect(contactForm).toBeInTheDocument();
});
