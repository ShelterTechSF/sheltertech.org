import React from "react";

import VolunteerSignupForm from "./VolunteerSignupForm";

export default {
  title: "Third Party/Mailchimp/Forms",
};

const Template = () => (
  <div style={{ maxWidth: "850px", padding: "50px" }}>
    <p
      style={{
        fontStyle: "italic",
        backgroundColor: "var(--color-gray-300)",
        padding: "15px",
      }}
    >
      Note: This is a real form, and submitting it will really subscribe you to
      a Mailchimp list.
    </p>
    <VolunteerSignupForm />
  </div>
);

export const VolunteerSignupFormStory = Template.bind({});
VolunteerSignupFormStory.storyName = "VolunteerSignupForm";
VolunteerSignupFormStory.args = {};
