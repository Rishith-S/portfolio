import React, { useState } from "react";
import SendIcon from "../icons/sendIcon";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/contact", {
        name,
        email,
        subject,
        message,
      });
      alert(response.data.message);

      // Clear form after successful submission
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <div className="inline-flex w-fit flex-col">
        <p className="text-2xl font-bold text-black dark:text-white" id="Contact">
          Contact
        </p>
        <div className="w-full h-[4px] rounded-full bg-accent" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2"></div>
        <div className="flex flex-col gap-4">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <InputBox
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
              <InputBox
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <InputBox
              placeholder="Subject"
              value={subject}
              onChange={handleSubjectChange}
            />
            <div className="h-64">
              <textarea
                placeholder="Message"
                value={message}
                onChange={handleMessageChange}
                className={`rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900/80 cursor-pointer p-4 w-full h-full focus:outline-none resize-none text-neutral-800 dark:text-white ${message ? "focus:border-accent" : "focus:border-red-500"}`}
                style={{ textAlign: "left", verticalAlign: "top" }}
              />
            </div>
            <div className="flex flex-row items-center justify-end">
              <div className="rounded-xl bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-100 dark:from-neutral-600 dark:via-neutral-800 dark:to-neutral-800 p-[1.25px] shadow-lg flex items-center justify-center transition-all duration-300">
                <button
                  type="submit"
                  className="rounded-xl font-semibold text-accent bg-white dark:bg-neutral-900/80 flex flex-row gap-2 items-center cursor-pointer p-4 w-full h-full focus:outline-none transition-colors duration-300"
                >
                  {" "}
                  <div className="w-5 h-5">
                    <SendIcon />
                  </div>{" "}
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

function InputBox({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900/80 cursor-pointer p-4 w-full h-full focus:outline-none text-neutral-800 dark:text-white ${value ? "focus:border-accent" : "focus:border-red-500"} placeholder:text-left`}
      style={{ textAlign: "left" }}
    />
  );
}

export default Contact;
