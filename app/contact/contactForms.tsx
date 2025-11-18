"use client";
import React, { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { Button } from "@/components/ui/button";
import { submitForm } from "./formActions";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COUNTRY_DIAL_CODES } from "@/global/countryDialCodes";

export default function ContactForm() {
  const [responseData, setResponseData] = useState({ message: "", code: null });
  const [isLoading, setIsLoading] = useState(false);
  const [contactUsState, setContactUsState] = useState<{
    yourName: string;
    message: string;
    programOfInterest: string;
    email: string;
    contact_number?: string;
    contact_number_dial_code?: string;
    contact_number_country_id?: string;
    institute_id?: number;
    add_db?: number;
  }>({
    yourName: "",
    message: "",
    programOfInterest: "",
    email: "",
  });
  const [errorContactUsState, setErrorContactUsState] = useState({
    yourName: "",
    message: "",
    programOfInterest: "",
    email: "",
    contactNumber: "",
  });

  // selected country dial code for mobile field
  const [selectedDialCode, setSelectedDialCode] = useState("+91");

  const form = useForm({
    defaultValues: {
      yourName: "",
      email: "",
      programOfInterest: "",
      message: "",
      contactNumber: "",
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponseData({ message: "", code: null });
    let isValidForm = true;
    setErrorContactUsState({
      yourName: "",
      message: "",
      programOfInterest: "",
      email: "",
      contactNumber: "",
    });

    const apiPayload = {
      first_name: form.state.values.yourName,
      email: form.state.values.email,
      programOfInterest: form.state.values.programOfInterest,
      message: `${form.state.values.message} \n programOfInterest: ${form.state.values.programOfInterest}`,
      source: "697",
      contact_number: form.state.values.contactNumber.trim(),
      contact_number_dial_code: selectedDialCode,
      contact_number_country_id: "103",
      institute_id: 9482,
      add_db: 1,
    };

    //your name validation
    if (
      form.state.values.yourName.length === 0 ||
      form.state.values.yourName.trim() === ""
    ) {
      setErrorContactUsState((prev) => ({
        ...prev,
        yourName: "Name is required",
      }));
      isValidForm = false;
    } else if (form.state.values.yourName.length < 3) {
      setErrorContactUsState((prev) => ({
        ...prev,
        yourName: "Your name must be at least 3 characters.",
      }));
      isValidForm = false;
    }

    //your email validation
    if (
      form.state.values.email === "" ||
      form.state.values.email.trim() === "" ||
      form.state.values.email.length === 0
    ) {
      setErrorContactUsState((prev) => ({
        ...prev,
        email: "Email is required",
      }));
      isValidForm = false;
    } else if (form.state.values.email.length < 3) {
      setErrorContactUsState((prev) => ({
        ...prev,
        email: "Your email must be at least 3 characters.",
      }));
      isValidForm = false;
    } else if (!form.state.values.email.includes("@")) {
      setErrorContactUsState((prev) => ({
        ...prev,
        email: "Invalid email address.",
      }));
      isValidForm = false;
    }

    //your message validation
    if (
      form.state.values.message.trim() === "" ||
      form.state.values.message.length === 0
    ) {
      setErrorContactUsState((prev) => ({
        ...prev,
        message: "Message is required",
      }));
      isValidForm = false;
    } else if (
      form.state.values.message.length < 20 ||
      form.state.values.message === ""
    ) {
      setErrorContactUsState((prev) => ({
        ...prev,
        message: "Message must be at least 20 characters.",
      }));
      isValidForm = false;
    }

    //your program of interest validation
    if (form.state.values.programOfInterest === "") {
      setErrorContactUsState((prev) => ({
        ...prev,
        programOfInterest: "Program of interest is required.",
      }));
      isValidForm = false;
    }

    //your contact number validation
    const contactNumberValue = form.state.values.contactNumber.trim();
    if (contactNumberValue === "") {
      setErrorContactUsState((prev) => ({
        ...prev,
        contactNumber: "Mobile number is required",
      }));
      isValidForm = false;
    } else if (!/^\d+$/.test(contactNumberValue)) {
      setErrorContactUsState((prev) => ({
        ...prev,
        contactNumber: "Mobile number must contain only digits.",
      }));
      isValidForm = false;
    } else if (
      contactNumberValue.length < 7 ||
      contactNumberValue.length > 15
    ) {
      setErrorContactUsState((prev) => ({
        ...prev,
        contactNumber: "Mobile number must be between 7 and 15 digits.",
      }));
      isValidForm = false;
    }

    if (Object.values(errorContactUsState).some((error) => error !== "")) {
      return;
    }
    if (!isValidForm) {
      return;
    } else {
      setIsLoading(true);

      setContactUsState({
        yourName: apiPayload.first_name,
        email: apiPayload.email,
        programOfInterest: apiPayload.programOfInterest,
        message: apiPayload.message,
        contact_number: apiPayload.contact_number,
        contact_number_dial_code: apiPayload.contact_number_dial_code,
        contact_number_country_id: "103",
        institute_id: 9482,
        add_db: 1,
      });

      const postContactFormResponse = await submitForm(apiPayload);
      setResponseData(postContactFormResponse);
      if (postContactFormResponse.code === 200) {
        form.reset();
        setTimeout(function () {
          setResponseData({ message: "", code: null });
        }, 5000);
      }
      setIsLoading(false);
    }
  };

  return (
    <>
      <form id="contact-form" className="w-full">
        <Card className="w-full gap-3 ">
          <CardContent>
            <FieldGroup>
              <Field
                orientation="horizontal"
                className=" flex md:flex-row flex-col items-center justify-between gap-4"
              >
                <form.Field name="yourName">
                  {(field) => {
                    const isInvalid = !!errorContactUsState?.yourName;
                    return (
                      <>
                        <Field data-invalid={isInvalid} className="relative ">
                          <FieldLabel
                            htmlFor={field.name}
                            className="text-blue-900 font-semibold text-lg"
                          >
                            Your Name
                          </FieldLabel>
                          <Input
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => {
                              field.handleChange(e.target.value);
                              setErrorContactUsState((prev) => ({
                                ...prev,
                                yourName: "",
                              }));
                            }}
                            aria-invalid={isInvalid}
                            placeholder="Enter your Name"
                            autoComplete="off"
                          />
                          {isInvalid && (
                            <FieldError
                              className="absolute bottom-[-25px] left-0 text-red-600"
                              errors={[
                                { message: errorContactUsState.yourName },
                              ]}
                            />
                          )}
                        </Field>
                      </>
                    );
                  }}
                </form.Field>

                <form.Field name="contactNumber">
                  {(field) => {
                    const isInvalid = !!errorContactUsState?.contactNumber;

                    return (
                      <Field
                        data-invalid={isInvalid}
                        className="relative w-full"
                      >
                        <FieldLabel
                          htmlFor={field.name}
                          className="text-blue-900 font-semibold text-lg"
                        >
                          Mobile Number
                        </FieldLabel>

                        {/* Combined country code + number box */}
                        <div
                          className={`flex items-center w-full border rounded-md overflow-hidden h-10 focus-within:ring-2 focus-within:ring-blue-500 ${
                            isInvalid ? "border-red-600" : ""
                          }`}
                        >
                          {/* Country code dropdown with custom arrow */}
                          <div className="relative h-full w-16 border-r bg-white flex items-center">
                            <select
                              className="h-full w-full pl-2 pr-6 bg-transparent text-gray-700 text-sm focus:outline-none appearance-none"
                              value={selectedDialCode}
                              onChange={(e) =>
                                setSelectedDialCode(e.target.value)
                              }
                            >
                              {COUNTRY_DIAL_CODES.map((c) => (
                                <option key={c.code} value={c.code}>
                                  {c.code}
                                </option>
                              ))}
                            </select>

                            {/* Arrow, slightly inset from the right border */}
                            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-xs">
                              ▼
                            </span>
                          </div>

                          {/* Mobile number input */}
                          <input
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => {
                              field.handleChange(e.target.value);
                              setErrorContactUsState((prev) => ({
                                ...prev,
                                contactNumber: "",
                              }));
                            }}
                            placeholder="Enter your mobile number"
                            aria-invalid={isInvalid}
                            autoComplete="off"
                            className="flex-1 h-full px-3 bg-white text-gray-800 text-sm focus:outline-none"
                          />
                        </div>

                        {isInvalid && (
                          <FieldError
                            className="absolute bottom-[-25px] left-0 text-red-600"
                            errors={[
                              { message: errorContactUsState.contactNumber },
                            ]}
                          />
                        )}
                      </Field>
                    );
                  }}
                </form.Field>

                <form.Field name="email">
                  {(field) => {
                    const isInvalid = !!errorContactUsState?.email;
                    return (
                      <>
                        <Field data-invalid={isInvalid} className="relative ">
                          <FieldLabel
                            htmlFor={field.name}
                            className="text-blue-900 font-semibold text-lg"
                          >
                            Your Email
                          </FieldLabel>
                          <Input
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => {
                              field.handleChange(e.target.value);
                              setErrorContactUsState((prev) => ({
                                ...prev,
                                email: "",
                              }));
                            }}
                            aria-invalid={isInvalid}
                            placeholder="Enter your email"
                            autoComplete="off"
                          />
                          {isInvalid && (
                            <FieldError
                              className="absolute bottom-[-25px] left-0 text-red-600"
                              errors={[{ message: errorContactUsState.email }]}
                            />
                          )}
                        </Field>
                      </>
                    );
                  }}
                </form.Field>
              </Field>

              <form.Field name="programOfInterest">
                {(field) => {
                  const isInvalid = !!errorContactUsState.programOfInterest;
                  return (
                    <>
                      <Field data-invalid={isInvalid} className="relative">
                        <FieldLabel
                          htmlFor={field.name}
                          className="text-blue-900 font-semibold text-lg"
                        >
                          Program of interest
                        </FieldLabel>
                        <Select
                          name={field.name}
                          value={field.state.value}
                          aria-invalid={isInvalid}
                          onValueChange={(value) => {
                            field.handleChange(value);
                            setErrorContactUsState((prev) => ({
                              ...prev,
                              programOfInterest: "",
                            }));
                          }}
                        >
                          <SelectTrigger
                            className={`w-[180px] ${
                              isInvalid ? "border-red-600" : ""
                            }`}
                          >
                            <SelectValue placeholder="Select your program of interest" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="pgp">
                                Enquiry about PGP in Entreprenuership
                              </SelectItem>
                              <SelectItem value="bootcamp">
                                Enquiry about 90-day Bootcamp
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        {isInvalid && (
                          <FieldError
                            className="absolute bottom-[-25px] left-0 text-red-600"
                            errors={[
                              {
                                message: errorContactUsState.programOfInterest,
                              },
                            ]}
                          />
                        )}
                      </Field>
                    </>
                  );
                }}
              </form.Field>

              <form.Field name="message">
                {(field) => {
                  const isInvalid = !!errorContactUsState.message;
                  return (
                    <Field data-invalid={isInvalid} className="relative">
                      <FieldLabel
                        htmlFor={field.name}
                        className="text-blue-900 font-semibold text-lg"
                      >
                        Message
                      </FieldLabel>
                      <InputGroup>
                        <InputGroupTextarea
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => {
                            field.handleChange(e.target.value);
                            setErrorContactUsState((prev) => ({
                              ...prev,
                              message: "",
                            }));
                          }}
                          placeholder="Type your query here..."
                          rows={6}
                          className="min-h-24 resize-none"
                          aria-invalid={isInvalid}
                        />
                        <InputGroupAddon align="block-end">
                          <InputGroupText className="tabular-nums">
                            {field.state.value.length}/200 characters
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                      {isInvalid && (
                        <FieldError
                          className="absolute bottom-[-25px] left-0 text-red-600"
                          errors={[{ message: errorContactUsState.message }]}
                        />
                      )}
                    </Field>
                  );
                }}
              </form.Field>
            </FieldGroup>
            <div className="mt-2 min-h-[30px]">
              <p
                className={`${
                  responseData?.code === 200 ? "text-green-600" : "text-red-600"
                }`}
              >
                {responseData?.message || null}
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex items-center justify-between w-full ">
              <Button
                type="button"
                variant="outline"
                className="w-full max-w-[45%] cursor-pointer"
                onClick={() => form.reset()}
              >
                Reset
              </Button>
              <Button
                onClick={(e) => handleSubmit(e)}
                type="submit"
                id="contact-us-submit-btn"
                className={`${
                  isLoading
                    ? "disabled cursor-no-drop pointer-events-none opacity-50"
                    : "cursor-pointer"
                } w-full max-w-[45%] `}
                form="bug-report-form"
              >
                {isLoading ? "Sending..." : "Contact Us"}
              </Button>
            </div>
          </CardFooter>
        </Card>
      </form>
    </>
  );
}
