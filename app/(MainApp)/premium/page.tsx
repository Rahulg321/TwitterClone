"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";

const page = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const modalRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  const onClose = () => {
    // change the route everytime the modal is closed
    router.push("/home");
    modalRef.current?.close();
  };

  useEffect(() => {
    // want to load the modal when the component is mounted on the screen
    modalRef.current?.showModal();
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape" && modalRef.current?.open) {
        // Handle modal closing here'
        console.log("escaped key pressed, modal is being closed");
        router.push("/home");
        modalRef.current?.close();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown); // Cleanup
  }, []);

  return (
    <dialog
      className="modal min-w-s absolute top-0 m-0 mx-auto  rounded-2xl border bg-gray-950 px-2 py-4 text-gray-100 md:mt-5 "
      ref={modalRef}
    >
      <div
        onClick={onClose}
        className="absolute cursor-pointer rounded-xl px-2 py-1 text-2xl transition hover:bg-slate-400"
      >
        <RxCross1 />
      </div>
      <div className="mb-8 mt-16">
        <h2 className="text-center text-3xl font-bold">Who are you?</h2>
        <div className="my-6 text-center">
          <span className=" text-sm">
            Choose the right subscription for you
          </span>
        </div>
        <div className="px-6">
          <div className="flex items-center justify-center gap-4">
            <div className="rounded-2xl border p-4">
              <span className="block text-xs text-slate-400">Premium</span>
              <span className="my-3 text-sm font-bold">I am an individual</span>
              <span className="block text-xs text-slate-400">
                For individuals and creators
              </span>
            </div>
            <div className="rounded-2xl border p-4">
              <span className="block text-xs text-slate-400">
                Verified Organizations
              </span>
              <span className="my-3 text-sm font-bold">
                I am an organization
              </span>
              <span className="block text-xs text-slate-400">
                For businesses, government agencies and non-profits
              </span>
            </div>
          </div>
          <button className="bg-primary mt-4 w-full rounded-2xl px-4 py-2">
            Subscribe
          </button>
        </div>
        <p className="text-primary mt-4 text-center text-sm italic">
          Learn more about premium and verified organizations
        </p>
      </div>
    </dialog>
  );
};

export default page;
