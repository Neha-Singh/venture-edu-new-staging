"use client";
import React, { useState, useEffect, useRef } from "react";
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

type ContactUsState = {
  yourName: string;
  message: string;
  programOfInterest: string;
  email: string;
  contact_number?: string;
  contact_number_dial_code?: string;
  contact_number_country_id?: string;
  institute_id?: number;
  add_db?: number;
};

type ErrorState = {
  yourName: string;
  message: string;
  programOfInterest: string;
  email: string;
  contactNumber: string;
};

export default function ContactForm() {
  const [responseData, setResponseData] = useState<{
    message: string;
    code: number | null;
  }>({
    message: "",
    code: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [contactUsState, setContactUsState] = useState<ContactUsState>({
    yourName: "",
    message: "",
    programOfInterest: "",
    email: "",
  });
  const [errorContactUsState, setErrorContactUsState] = useState<ErrorState>({
    yourName: "",
    message: "",
    programOfInterest: "",
    email: "",
    contactNumber: "",
  });

  const [selectedDialCode, setSelectedDialCode] = useState("+91");
  const [isDialDropdownOpen, setIsDialDropdownOpen] = useState(false);
  const dialWrapperRef = useRef<HTMLDivElement | null>(null);

  const form = useForm({
    defaultValues: {
      yourName: "",
      email: "",
      programOfInterest: "",
      message: "",
      contactNumber: "",
    },
  });

  // close dial code dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dialWrapperRef.current &&
        !dialWrapperRef.current.contains(event.target as Node)
      ) {
        setIsDialDropdownOpen(false);
      }
    }

    if (isDialDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDialDropdownOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponseData({ message: "", code: null });
    let isValidForm = true;
    const newErrorState: ErrorState = {
      yourName: "",
      message: "",
      programOfInterest: "",
      email: "",
      contactNumber: "",
    };

    const { yourName, email, programOfInterest, message, contactNumber } =
      form.state.values;

    const trimmedName = yourName.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    const trimmedNumber = contactNumber.trim();

    const apiPayload = {
      first_name: trimmedName,
      email: trimmedEmail,
      programOfInterest,
      message: `${trimmedMessage} \n programOfInterest: ${programOfInterest}`,
      source: "697",
      contact_number: trimmedNumber,
      contact_number_dial_code: selectedDialCode,
      contact_number_country_id: "103",
      institute_id: 9482,
      add_db: 1,
    };

    // your name validation
    if (!trimmedName) {
      newErrorState.yourName = "Name field cant be empty";
      isValidForm = false;
    } else if (trimmedName.length < 3) {
      newErrorState.yourName = "Your name must be at least 3 characters.";
      isValidForm = false;
    }

    // email validation
    if (!trimmedEmail) {
      newErrorState.email = "Email field cant be empty";
      isValidForm = false;
    } else if (trimmedEmail.length < 3) {
      newErrorState.email = "Your email must be at least 3 characters.";
      isValidForm = false;
    } else if (!trimmedEmail.includes("@")) {
      newErrorState.email = "Invalid email address.";
      isValidForm = false;
    }

    // message validation
    if (!trimmedMessage) {
      newErrorState.message = "Message field cant be empty";
      isValidForm = false;
    } else if (trimmedMessage.length < 20) {
      newErrorState.message = "Message must be at least 20 characters.";
      isValidForm = false;
    }

    // program of interest
    if (!programOfInterest) {
      newErrorState.programOfInterest = "Program of interest is required.";
      isValidForm = false;
    }

    // contact number validation
    if (!trimmedNumber) {
      newErrorState.contactNumber = "Mobile number field cant be empty";
      isValidForm = false;
    } else if (!/^\d+$/.test(trimmedNumber)) {
      newErrorState.contactNumber = "Mobile number must contain only digits.";
      isValidForm = false;
    } else if (trimmedNumber.length < 7 || trimmedNumber.length > 15) {
      newErrorState.contactNumber =
        "Mobile number must be between 7 and 15 digits.";
      isValidForm = false;
    }

    setErrorContactUsState(newErrorState);

    if (!isValidForm) {
      return;
    }

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
      setSelectedDialCode("+91");
      setTimeout(() => {
        setResponseData({ message: "", code: null });
      }, 5000);
    }
    setIsLoading(false);
  };

  return (
    <form id="contact-form" className="w-full">
      <Card className="w-full gap-3">
        <CardContent>
          <FieldGroup>
            {/* top row: Name, Mobile, Email */}
            <Field
              orientation="horizontal"
              className="flex flex-col md:flex-row md:flex-wrap items-center justify-between gap-4"
            >
              {/* Your Name */}
              <form.Field name="yourName">
                {(field) => {
                  const isInvalid = !!errorContactUsState.yourName;
                  return (
                    <Field
                      data-invalid={isInvalid}
                      className="relative w-full md:min-w-[260px]"
                    >
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
                          if (errorContactUsState.yourName) {
                            setErrorContactUsState((prev) => ({
                              ...prev,
                              yourName: "",
                            }));
                          }
                        }}
                        aria-invalid={isInvalid}
                        placeholder="Enter your Name"
                        autoComplete="off"
                      />
                      {isInvalid && (
                        <FieldError
                          className="absolute bottom-[-25px] left-0 text-red-600"
                          errors={[{ message: errorContactUsState.yourName }]}
                        />
                      )}
                    </Field>
                  );
                }}
              </form.Field>

              {/* Mobile Number */}
              <form.Field name="contactNumber">
                {(field) => {
                  const isInvalid = !!errorContactUsState.contactNumber;

                  return (
                    <Field
                      data-invalid={isInvalid}
                      className="relative w-full md:min-w-[260px]"
                    >
                      <FieldLabel
                        htmlFor={field.name}
                        className="text-blue-900 font-semibold text-lg"
                      >
                        Mobile Number
                      </FieldLabel>

                      {/* Combined country code + number box */}
                      <div
                        className={`flex items-center w-full border rounded-md h-10 focus-within:ring-2 focus-within:ring-blue-500 ${
                          isInvalid ? "border-red-600" : ""
                        }`}
                      >
                        {/* Country code dropdown wrapper */}
                        <div
                          ref={dialWrapperRef}
                          className="relative h-full w-20 border-r bg-white flex items-center rounded-l-md"
                        >
                          <button
                            type="button"
                            className="h-full w-full flex items-center justify-between pl-2 pr-5 bg-transparent text-gray-700 text-sm focus:outline-none"
                            onClick={() =>
                              setIsDialDropdownOpen((open) => !open)
                            }
                          >
                            <span>{selectedDialCode}</span>
                            <span className="text-gray-500 text-xs ml-1">
                              ▼
                            </span>
                          </button>

                          {isDialDropdownOpen && (
                            <div className="absolute left-0 top-full mt-1 z-20 bg-white border rounded-md shadow-md max-h-60 overflow-y-auto w-full">
                              {COUNTRY_DIAL_CODES.map((c) => (
                                <div
                                  key={c.code}
                                  className="px-2 py-1 text-sm hover:bg-gray-100 cursor-pointer"
                                  onClick={() => {
                                    setSelectedDialCode(c.code);
                                    setIsDialDropdownOpen(false);
                                  }}
                                >
                                  {c.code}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Mobile number input */}
                        <input
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => {
                            field.handleChange(e.target.value);
                            if (errorContactUsState.contactNumber) {
                              setErrorContactUsState((prev) => ({
                                ...prev,
                                contactNumber: "",
                              }));
                            }
                          }}
                          placeholder="Enter your mobile number"
                          aria-invalid={isInvalid}
                          autoComplete="off"
                          className="flex-1 h-full px-3 bg-white text-gray-800 text-sm focus:outline-none rounded-r-md"
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

              {/* Your Email */}
              <form.Field name="email">
                {(field) => {
                  const isInvalid = !!errorContactUsState.email;
                  return (
                    <Field
                      data-invalid={isInvalid}
                      className="relative w-full md:min-w-[260px]"
                    >
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
                          if (errorContactUsState.email) {
                            setErrorContactUsState((prev) => ({
                              ...prev,
                              email: "",
                            }));
                          }
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
                  );
                }}
              </form.Field>
            </Field>

            {/* Program of interest */}
            <form.Field name="programOfInterest">
              {(field) => {
                const isInvalid = !!errorContactUsState.programOfInterest;
                return (
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
                        if (errorContactUsState.programOfInterest) {
                          setErrorContactUsState((prev) => ({
                            ...prev,
                            programOfInterest: "",
                          }));
                        }
                      }}
                    >
                      <SelectTrigger
                        className={`w-full ${
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
                );
              }}
            </form.Field>

            {/* Message */}
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
                          if (errorContactUsState.message) {
                            setErrorContactUsState((prev) => ({
                              ...prev,
                              message: "",
                            }));
                          }
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
                responseData.code === 200 ? "text-green-600" : "text-red-600"
              }`}
            >
              {responseData.message || null}
            </p>
          </div>
        </CardContent>

        <CardFooter>
          <div className="flex items-center justify-between w-full">
            <Button
              type="button"
              variant="outline"
              className="w-full max-w-[45%] cursor-pointer"
              onClick={() => {
                form.reset();
                setSelectedDialCode("+91");
                setErrorContactUsState({
                  yourName: "",
                  message: "",
                  programOfInterest: "",
                  email: "",
                  contactNumber: "",
                });
                setResponseData({ message: "", code: null });
              }}
            >
              Reset
            </Button>
            <Button
              onClick={handleSubmit}
              type="submit"
              id="contact-us-submit-btn"
              className={`${
                isLoading
                  ? "disabled cursor-no-drop pointer-events-none opacity-50"
                  : "cursor-pointer"
              } w-full max-w-[45%]`}
              form="bug-report-form"
            >
              {isLoading ? "Sending..." : "Contact Us"}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
}
