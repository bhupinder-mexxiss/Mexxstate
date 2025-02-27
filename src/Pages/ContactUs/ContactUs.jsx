import {
  EmailOutlined,
  FmdGoodOutlined,
  PhoneOutlined,
} from "@mui/icons-material";
import React from "react";

const ContactUs = () => {
  return (
    <div className="py-8 sm:py-10 md:py-14 lg:py-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-3xl text-text1 font-semibold">Contact Us</h4>
            <p className="mt-2">
              Questions, comments, or suggestions? Simply fill in the form and
              we’ll be in touch shortly.
            </p>
            <ul className="flex flex-col gap-3 mt-6">
              <li className="flex items-start gap-2">
                <span>
                  <FmdGoodOutlined className="text-primary !text-lg" />
                </span>
                53, Shrinathji Industrial Estate, Indore Road, 382430,
                Ahmedabad, Gujarat, India
              </li>
              <li className="flex items-start gap-2">
                <span>
                  <PhoneOutlined className="text-primary !text-lg" />
                </span>
                +91-8779043458
              </li>
              <li className="flex items-start gap-2">
                <span>
                  <EmailOutlined className="text-primary !text-lg" />
                </span>
                sales@mexxiss.com
              </li>
            </ul>
          </div>
          <div>
            <div className="border border-border1 rounded-xl p-6 bg-white">
              <form action="">
                <div className="grid lg:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      className="focus:border-primary focus:ring-0 w-full rounded-md border-border1"
                      placeholder="First Name*"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="focus:border-primary focus:ring-0 w-full rounded-md border-border1"
                      placeholder="Last name*"
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <input
                      type="text"
                      className="focus:border-primary focus:ring-0 w-full rounded-md border-border1"
                      placeholder="Email*"
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <input
                      type="text"
                      className="focus:border-primary focus:ring-0 w-full rounded-md border-border1"
                      placeholder="Number*"
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <textarea
                      className="focus:border-primary focus:ring-0 w-full rounded-md border-border1 resize-none"
                      placeholder="Your message..."
                      rows={4}
                    ></textarea>
                  </div>
                  <div className="lg:col-span-2">
                    <button className="bg-primary text-white w-full py-2.5 rounded-full hover:opacity-90 duration-300">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
