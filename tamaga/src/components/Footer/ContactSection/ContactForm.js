import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export const ContactForm = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2bfqox7",
        "template_gb88i89",
        form.current,
        "-0kyWJEfM-P3jb1nR"
      )
      .then(
        () => {
          alert(
            "Thank you for your messege. We will response as soon as possible."
          );
          e.target.reset();
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <form className="contact-form" ref={form} onSubmit={onSubmit}>
      <div className="form-section">
        <label className="body-text-xs">Name</label>
        <input
          className="body-text-sm input-form"
          type="text"
          name="user_name"
          placeholder="Your Name"
          aria-invalid={errors.user_name ? "true" : "false"}
          {...register("user_name", {
            required: "Name is required",
          })}
        />
        <p className="input-error">{errors.name?.message}</p>
      </div>

      <div className="form-section">
        <label className="body-text-xs">Email</label>
        <input
          className="body-text-sm input-form"
          type="email"
          name="user_email"
          placeholder="Your E-mail"
          aria-invalid={errors.user_email ? "true" : "false"}
          {...register("user_email", {
            required: "E-mail is reqired",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "E-mail is incorrect",
            },
          })}
        />
        <p className="input-error">{errors.email?.message}</p>
      </div>
      <div className="form-section">
        <label className="body-text-xs">Message</label>
        <textarea
          className="body-text-sm input-form"
          name="message"
          placeholder="Tell us about your project"
          rows="5"
          aria-invalid={errors.message ? "true" : "false"}
          {...register("message", {
            required: "Fill the form",
            maxLength: {
              value: 500,
              message: "Max. 500 characters",
            },
          })}
        />
        <p className="input-error">{errors.message?.message}</p>
      </div>
      <input
        type="submit"
        value="Send"
        className="btn-primary-sm-default form-button"
      />
    </form>
  );
};
