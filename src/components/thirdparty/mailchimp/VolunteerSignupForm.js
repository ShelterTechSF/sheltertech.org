import React from "react";

import "./VolunteerSignupForm.css";
import s from "./VolunteerSignupForm.module.css";

/* eslint-disable react/no-danger */
// This entire file is just about embedding an external form

const rawInnerHtml = {
  __html: `
<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://sheltertech.us19.list-manage.com/subscribe/post?u=c47829732a0bea5c8e8a94604&amp;id=08f60e42ef" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">

<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address </label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
<div class="mc-field-group">
	<label for="mce-FNAME">First Name </label>
	<input type="text" value="" name="FNAME" class="" id="mce-FNAME">
</div>
<div class="mc-field-group">
	<label for="mce-LNAME">Last Name </label>
	<input type="text" value="" name="LNAME" class="" id="mce-LNAME">
</div>
<div class="mc-field-group">
	<label for="mce-MMERGE12">Volunteer Interests </label>
	<input type="text" value="" name="MMERGE12" class="" id="mce-MMERGE12">
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_c47829732a0bea5c8e8a94604_08f60e42ef" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';fnames[6]='MMERGE6';ftypes[6]='text';fnames[7]='MMERGE7';ftypes[7]='number';fnames[8]='MMERGE8';ftypes[8]='date';fnames[9]='MMERGE9';ftypes[9]='text';fnames[10]='LGL_SAL';ftypes[10]='text';fnames[11]='LGL_ID';ftypes[11]='text';fnames[12]='MMERGE12';ftypes[12]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->
`,
};

const VolunteerSignupForm = () => (
  <div>
    <h1 className={s.title}>Work With Us</h1>
    <p className={s.description}>
      Thank you for your interest in partnering with ShelterTech! Enter your
      contact information below and we&apos;ll get back to you shortly.
    </p>
    <div dangerouslySetInnerHTML={rawInnerHtml} />
  </div>
);
export default VolunteerSignupForm;
