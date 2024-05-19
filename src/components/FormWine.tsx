import type React from "preact/compat";
import { useState } from "preact/hooks";
import { STATES } from "src/const/states";
import { validateEmail } from "src/utils/formats";
import { navigate } from "astro:transitions/client";

function Form() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [state, setState] = useState("");
  const [message, setMessage] = useState("");
  const [terms, setTerms] = useState("");
  const [validForm, setValidForm] = useState(false);

  const handleOnClick = (e: any) => {
    e.preventDefault();
    setValidForm(true);
    if (handleValidForm()) {
      navigate(`${import.meta.env.BASE_URL}/congrats`);
    }
  };

  const handleValidForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      name === "" ||
      lastName === "" ||
      email === "" ||
      validateEmail(email) === false ||
      instagram === "" ||
      state === "" ||
      message === "" ||
      terms === ""
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div class="bg-[url(assets/bg-border.jpeg)] rounded-2xl w-full max-w-[630px] p-2 mt-4">
      <form class="flex flex-col justify-center items-center w-full bg-black px-3 py-4 rounded-2xl">
        <input
          class={`w-full rounded-lg mb-2 p-[13px] text-[13px] placeholder-[#C3C3C3] h-[24px] font-normal placeholder:font-normal border-[2px] border-white ${validForm === true && name === "" ? "!border-red-500" : "border-white"}`}
          type="text"
          placeholder="Name*"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName((e.target as HTMLInputElement)?.value)
          }
        />
        <input
          class={`w-full rounded-lg mb-2 p-[13px] text-[13px] placeholder-[#C3C3C3] h-[24px] font-normal placeholder:font-normal border-[2px] border-white ${validForm === true && lastName === "" ? "!border-red-500" : "border-white"}`}
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLastName((e.target as HTMLInputElement)?.value)
          }
        />
        <input
          class={`w-full rounded-lg mb-2 p-[13px] text-[13px] placeholder-[#C3C3C3] h-[24px] font-normal placeholder:font-normal border-[2px] border-white ${validForm === true && validateEmail(email) === false ? "!border-red-500" : "border-white"}`}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail((e.target as HTMLInputElement)?.value)
          }
        />
        <input
          class={`w-full rounded-lg mb-2 p-[13px] text-[13px] placeholder-[#C3C3C3] h-[24px] font-normal placeholder:font-normal border-[2px] border-white ${validForm === true && instagram === "" ? "!border-red-500" : "border-white"}`}
          type="text"
          placeholder="Instagram username (Public account)"
          value={instagram}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInstagram((e.target as HTMLInputElement)?.value)
          }
        />
        <select
          class={`w-full rounded-lg mb-2 text-[13px] px-[13px] text-[#C3C3C3] appearance-none form-select h-[28px] border-[2px] border-white ${validForm === true && state === "" ? "!border-red-500" : "border-white"} ${state !== "" && "!text-[#000000]"}`}
          value={state}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setState((e.target as HTMLSelectElement)?.value);
          }}
        >
          {STATES.map((state, index) => (
            <option
              key={index}
              value={state.value}
              selected={index === 0 && true}
            >
              {state.label}
            </option>
          ))}
        </select>
        <textarea
          class={`w-full rounded-lg mb-2 p-[13px] text-[13px] placeholder-[#C3C3C3] h-[150px] font-normal placeholder:font-normal border-[2px] border-white ${validForm === true && message === "" ? "!border-red-500" : "border-white"}`}
          placeholder="Tell us an amazing story to inspire Ami James"
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setMessage((e.target as HTMLTextAreaElement)?.value)
          }
        />
        <div class="flex items-center bg-white p-[13px] rounded-lg w-full justify-between">
          <p class="text-[13px] text-[#C3C3C3] max-w-sm">
            You agree that the tatto will be done in the State of Florida during
            the month of xxxx, and the entire process will be recorded and
            dhared from Ö61 Wines* digital platforms
          </p>
          <select
            class={`mb-2 text-[13px] w-[100px] px-2 text-[#C3C3C3] border-[#4d4d4d] border form-select-terms appearance-none ${validForm === true && terms === "" ? "!border-red-500" : "border-[#4d4d4d]"} ${terms !== "" && "!text-[#000000]"}`}
            value={terms}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setTerms((e.target as HTMLSelectElement)?.value)
            }
          >
            <option value="0"></option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div class="flex justify-center items-center">
          <button
            class="g-recaptcha"
            data-sitekey="6LclYdgpAAAAAHhWyCuOnBTOGRb8PDGYauExrQKr"
            data-callback="onSubmit"
            data-action="submit"
          >
            Submit
          </button>
        </div>
        <div class="flex justify-between w-full">
          <button class="w-[260px] h-[73px] bg-white">Captcha</button>
          <div class="border border-white p-[4px] rounded-2xl">
            <button
              onClick={(e) => handleOnClick(e)}
              class="text-white bg-[url(assets/bg-border.jpeg)] font-cheddar text-[43px] rounded-xl px-10 duration-300 transition-colors hover:text-black"
            >
              Enviar
            </button>
          </div>
        </div>

        <script async src="https://www.google.com/recaptcha/api.js"></script>
      </form>
    </div>
  );
}

export default Form;
