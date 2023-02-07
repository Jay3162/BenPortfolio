import {fireEvent, getAllByTestId, getByTestId, render, screen, waitFor, waitForElement, queryByText, wait} from '@testing-library/react';
import Design1 from '../../design1';
import React, {useRef} from 'react';
import AudioFile from '../project/audio';
import audio from '../music/Anjel - Is It Fair_.mp3';
import image from '../images/Ben-image.jpg';
import { click } from '@testing-library/user-event/dist/click';
import Services from '../services/services';
import Contact from '../contact';

// import Project from '../project/project';

// confirm that navbar scroll works
test("scrolls selected section into view", async() => {
  window.HTMLElement.prototype.scrollIntoView = function() {};
  render(<Design1/>);
  const scrollContact = screen.getByTestId("contact-nav");
  fireEvent.click(scrollContact);
  const scrollComp = screen.getByTestId("contact-page");
  await waitFor(() => expect(scrollComp).toBeInTheDocument());
});

// confirm that video tab opens on click
test("video tab opens on click", () => {
  render(<Design1/>);
  const vidBtn = getByTestId("vid-btn");
  const vidTab = getByTestId("vid-tab");
  expect(vidBtn).toBeInTheDocument();
  fireEvent.click(vidBtn);
  expect(vidTab).toBeInTheDocument();

});

// confirm that audio component exists and plays audio on click
test('AudioFile component', async() => {
  const src = audio;
  // const { getByTestId } = render(<AudioFile src={src} />);
  render(<AudioFile src={src}/>);
  const audioFile = getByTestId("audio-file");
  await waitFor(() => expect(audioFile).toBeInTheDocument());
  waitFor(() => expect(audioFile.paused).toBe(true));

  const Project = ({projFiles}) => {
    return <div>{projFiles}</div>
  }

  const { getByText } = render(<Project projFiles={projFiles}/>)
  await waitFor(() => getByText("anjel"));

  const playButton = getByTestId('play-button');
  fireEvent.click(playButton);
  await waitFor(() => expect(getByTestId('audio-file').paused).toBe(false));
});


// confirm that contact form sends email via emailjs
describe("contact form", () => {
  it("should submit form with valid inputs", async() => {
    const { getByLabelText, getByText, queryByText } = render(<Contact/>);

    // fill input fields
    const nameInput = getByLabelText(/name/i);
    fireEvent.change(nameInput, { target: {value: "John Doe"} });
    const emailInput = getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: {valvue: "davisjamal647@gmail.com" } });
    const messageInput = getByLabelText(/message/i);
    fireEvent.change(messageInput, { target: {value: "Hello, I would like to inquire about..." } });

    // submit form
    const submitBtn = getByText(/submit/i);
    fireEvent.click(submitBtn);

    await wait(() => {
      const success = queryByText(/SENT!/i);
      expect(success).toBeInTheDocument();
  });
  })
})



