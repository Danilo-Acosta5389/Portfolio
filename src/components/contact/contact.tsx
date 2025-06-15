"use client";

import { useThemeContext } from "@/context/theme-context";
import { useActionState, useState, useEffect } from "react";
import { Input, Button, Textarea } from "@heroui/react";
import Form from "next/form";
import { sendEmail } from "@/actions/contact-action";
import { ActionResponse, ContactFormData } from "@/types/mail";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { motion } from "motion/react";
import { TypingEffectWhileInView } from "../ui/typing-effect";

const initialState: ActionResponse = {
  success: false,
  message: "",
};

export default function Contact() {
  const { theme } = useThemeContext();
  const [state, action, isPending] = useActionState(submitAction, initialState);
  const [submitted, setSubmitted] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  async function submitAction(
    prevState: ActionResponse | null,
    formData: FormData
  ): Promise<ActionResponse> {
    const rawData: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      number: formData.get("number") as string,
      message: formData.get("message") as string,
    };
    //console.log(rawData);
    try {
      if (!executeRecaptcha) {
        return initialState;
      }

      const token = await executeRecaptcha("form_submit");
      //console.log("Token:", token);
      const response = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      //console.log(response);
      const data = await response.json();
      //console.log(data);
      if (!data.success) {
        console.log("An error ocurred when virefying with reCAPTCHA");
        return {
          success: false,
          message: "Något gick fel",
          inputs: rawData,
        };
      } else {
        setSubmitted(true);
        return await sendEmail(prevState, formData);
      }
    } catch (err) {
      console.log("ERROR FROM RECAPTCHA CATCH BLOCK:", err);
      return {
        success: false,
        message: "Något gick fel",
        inputs: rawData,
      };
    }
  }

  useEffect(() => {
    if (state.success) {
      console.log("SUCCESSS");
    }
  }, [state]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className={`${theme} h-full w-full bg-background text-foreground  flex flex-col justify-center items-center py-40`}
    >
      {submitted ? (
        <div className="flex flex-col justify-center items-center px-8 space-y-10">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-2xl  py-5">Message sent!</h1>
            <p>I will get back to you as soon as possible</p>
          </div>
          <div>
            <Button onPress={() => setSubmitted(false)}>Got it</Button>
          </div>
        </div>
      ) : (
        <>
          <div className="  py-5 space-y-10 text-center">
            <TypingEffectWhileInView
              className="font-bankGothic text-4xl sm:text-5xl font-semibold"
              text="Make contact"
            />
            {/* <h1 className="font-bankGothic font-semibold text-3xl sm:text-4xl">
              Contact
            </h1> */}
            <p className="max-w-xs">
              Anything i can do for you? Just leave me a messege!
            </p>
          </div>
          <Form action={action} className="w-full h-full max-w-xs space-y-2">
            <Input
              disabled={isPending}
              defaultValue={state.inputs?.email}
              isRequired
              errorMessage="Please enter a valid email"
              label="Email"
              labelPlacement="inside"
              name="email"
              type="email"
            />
            <Input
              disabled={isPending}
              defaultValue={state.inputs?.name}
              isRequired
              errorMessage="Please enter a name"
              label="Name"
              labelPlacement="inside"
              name="name"
              type="name"
            />
            <Textarea
              disabled={isPending}
              defaultValue={state.inputs?.message}
              isRequired
              errorMessage="Please enter a message"
              label="Message"
              labelPlacement="inside"
              name="message"
              type="message"
            />
            <div className="text-xs py-2">
              This site is protected by reCAPTCHA and the Google{" "}
              <a
                className=" underline text-blue-700"
                href="https://policies.google.com/privacy"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                className=" underline text-blue-700"
                href="https://policies.google.com/terms"
              >
                Terms of Service
              </a>{" "}
              apply.
            </div>
            <Button type="submit" variant="bordered" disabled={isPending}>
              Submit
            </Button>
          </Form>
        </>
      )}
    </motion.section>
  );
}
