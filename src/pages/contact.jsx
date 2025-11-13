import React, { useState } from "react";
import { Call, Facebook, Instagram, LinkedIn } from "@mui/icons-material";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Requirements, setRequirements] = useState("");
  // const [disableButton, setDisableButton] = useState(true);

  const Emailchangefunction = (e) => {
    setEmail(e.target.value);
    // setDisableButton(!disableButton);
  };
  console.log(email);
  const onFormSubmit = async (e) => {
    console.log("working");
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("Requirements", Requirements);
    formData.append("Subject", "Message From Quickbid Estimating");

    formData.append("recipient_name1", "MahRukh Tariq");
    formData.append("recipient_email1", "Director.mfbzone@gmail.com");

    formData.append("recipient_name2", "Muhammad Fiaz");
    formData.append("recipient_email2", "Rao@quickbidestimating.com");


    try {
      const response = await fetch("https://api.bluebookestimators.com/ ", {
        method: "POST",
        body: formData,
      });

      if (response.status === 200) {
        alert("Email sent successfully");
        setEmail("");
        setName("");
        setRequirements("");
      } else {
        alert("Email sending failed");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Email sending failed");
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:w-[80%] w-full p-6 container mx-auto mt-[220px]">
        <a target="blank" href="https://www.instagram.com/quickbidestimating/">
          <div className="hover:text-[#15A7AD]">
            <div className="flex justify-center">
              <Instagram style={{ width: "44px", height: "52px" }} />
            </div>
            <p className="text-center text-[18px] font-bold mt-[22px]  ">
              Contact us on Instagram
            </p>
            <hr className="" />
          </div>
        </a>

        <a
          target="blank"
          href="https://www.facebook.com/photo?fbid=122121676838111985&set=a.122097757328111985"
        >
          <div className="hover:text-[#15A7AD]">
            <div className="flex justify-center">
              <Facebook style={{ width: "44px", height: "48px" }} />
            </div>
            <p className="text-center text-[18px] font-bold mt-[26px] ">
              Contact us on Facebook
            </p>
            <hr />
          </div>
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/company/81810439/admin/feed/posts/"
        >
          <div className="hover:text-[#15A7AD]">
            <div className="flex justify-center">
              <LinkedIn style={{ width: "44px", height: "50px" }} />
            </div>
            <p className="text-center text-[18px] font-bold mt-6">
              Contact us on Linkedin
            </p>
            <hr />
          </div>
        </a>

        <a href="tel:+1 917 300 1079">
          <div className="hover:text-[#15A7AD]">
            <div className="flex justify-center ">
              <Call style={{ width: "44px", height: "50px" }} />
            </div>
            <p className="text-center text-[18px] font-bold mt-6">
              Contact us on Call
            </p>
            <hr />
          </div>
        </a>
      </div>

      <form>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-[80%] w-full p-6 mt-6 gap-6 container mx-auto">
          <div className="col-span-1">
            <h1 className=" text-[32px] font-bold ">
              GET IN <span className="text-[#15A7AD]">TOUCH</span>{" "}
            </h1>
            <p className=" text-[20px] font-normal mt-2 leading-[26px]">
            Feel free to contact us and we will get back to you as soon as possible. Fill this form or contact us directly.
            </p>
          </div>
          <div>
            <div className="col-span-1">
              <div className="">
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className=" w-full h-[34px] bg-transparent text-black pl-2 rounded-md border border-black"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className=" mt-8">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={Emailchangefunction}
                  className=" w-full h-[34px] bg-transparent text-black pl-2 rounded-md border border-black"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="mt-8">
              <textarea
                id="message"
                type="text"
                rows={60}
                columns={60}
                value={Requirements}
                onChange={(e) => setRequirements(e.target.value)}
                className="resize-none w-full text-black pl-2 h-[120px] rounded-md border border-black"
                placeholder="Message"
              />
            </div>
            <div className=" w-[100%] h-[50px] text-[18px] cursor-pointer rounded-md font-bold  bg-black text-white flex justify-center items-center mt-6">
              <button
                // disabled={disableButton}
                onClick={onFormSubmit}
                className="cursor-pointer"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Contact;
