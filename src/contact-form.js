import emailjs from "@emailjs/browser";
import $ from "jquery";
import Notiflix from "notiflix";

emailjs.init("m4OyE3Sm8ICuVh9gq");

let isLoaded = false;

function onSubmit() {
  if (isLoaded) {
    Notiflix.Block.standard(".contact-form", "Sending email, please wait.");
    document.getElementById("contact-form").submit();
  }
}

(function ($) {
  "use strict";

  /*==================================================================
    [ Validate ]*/
  const name = $('.omrs-input-group input[name="user_name"]');
  const email = $('.omrs-input-group input[name="user_email"]');
  const message = $('.omrs-input-group textarea[name="message"]');

  onSubmit();

  isLoaded = true;

  $(".contact-form").on("submit", function (event) {
    event.preventDefault();
    let check = true;

    if ($(name).val().trim() == "") {
      showError(name);
      check = false;
    }

    if (
      $(email)
        .val()
        .trim()
        .match(
          /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
        ) == null
    ) {
      showError(email);
      check = false;
    }

    if ($(message).val().trim() == "") {
      showError(message);
      check = false;
    }

    if (check === true) {
      sendMail(this);
    }

    return check;
  });

  //Create an event for each form input that remove error from them on Focus
  $(".contact-form .form-input").each(function () {
    $(this).on("focus", function () {
      hideError(this);
    });
  });

  function showError(input) {
    let thisAlert = $(input).parent();
    $(thisAlert).addClass("omrs-input-danger");
  }

  function hideError(input) {
    let thisAlert = $(input).parent();
    $(thisAlert).removeClass("omrs-input-danger");
  }
})($);

function sendMail(form) {
  // generate a five digit number for the contact_number variable
  form.contact_number.value = (Math.random() * 100000) | 0;
  // these IDs from the previous steps
  emailjs.sendForm("service_670tzp8", "template_34focay", form).then(
    function () {
      Notiflix.Block.remove(".contact-form");
      notifySuccess("Mail sent successfully");
    },
    function (error) {
      Notiflix.Block.remove(".contact-form");
      notifyError(
        "Unable to send mail, check your internet connection and try again."
      );
    }
  );
}

function notifyError(msg) {
  Notiflix.Notify.failure(msg, {
    position: "right-top",
    plainText: true,
    backOverlay: true,
    clickToClose: true,
    messageMaxLength: 110,
    timeout: 3000,
    cssAnimationStyle: "from-top",
  });
}

function notifySuccess(msg) {
  Notiflix.Notify.success(msg, {
    position: "right-top",
    plainText: true,
    backOverlay: true,
    clickToClose: true,
    messageMaxLength: 110,
    timeout: 3000,
    cssAnimationStyle: "from-top",
  });
}
