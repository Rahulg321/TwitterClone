"use client";

import React from "react";
import NewTweetForm from "../NewTweetForm";
import { useRef, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";

const NewTweetModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const onClick = () => {
    modalRef.current?.showModal();
  };

  const onClose = () => {
    modalRef.current?.close();
  };

  return (
    <>
      <button
        className="bg-primary mt-4 w-full rounded-xl px-8 py-4 transition hover:scale-110"
        onClick={onClick}
      >
        Post
      </button>
      <div className="">
        <dialog
          ref={modalRef}
          className="modal absolute top-0 mt-5 rounded-2xl bg-gray-950 px-2 py-4 text-gray-100"
        >
          <div
            onClick={onClose}
            className="absolute cursor-pointer rounded-xl px-2 py-1 text-2xl transition hover:bg-slate-400"
          >
            <RxCross1 />
          </div>
          <div className="mt-12 ">
            <NewTweetForm />
          </div>
        </dialog>
      </div>
    </>
  );
};

export default NewTweetModal;
