import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { SingleMessage } from "../../../utils/Messages/SingleMessage/SingleMessage";

export const ContactForm = () => {
  const form = useRef();
  const [state, setState] = useState(null);

  const {
    register,
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
          e.target.reset();
          setState("success");
        },
        (error) => {
          setState("error");
          console.log(error.text);
        }
      );
  };

  return (
    <form className="contact-spacing" ref={form} onSubmit={onSubmit}>
      <div className="form-section">
        <label className="body-text-xs">Name</label>
        <input
          className="body-text-sm input-form"
          type="text"
          name="user_name"
          placeholder="Your Name"
          onFocus={() => setState(false)}
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
          onFocus={() => setState(false)}
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
          onFocus={() => setState(false)}
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
      {state &&       
      <SingleMessage state={state}/>
      }
    </form>
  );
};
