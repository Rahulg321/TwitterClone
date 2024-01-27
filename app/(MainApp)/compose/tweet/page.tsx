"use client";

import NewTweetForm from "@/components/NewTweetForm";
import { useRef } from "react";

import React from "react";
import { RxCross1 } from "react-icons/rx";

const ComposeTweet = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const onClose = () => {
    modalRef.current?.close();
  };

  return (
    <dialog
      ref={modalRef}
      className="modal absolute top-0 mt-5 rounded-2xl border bg-gray-950 px-2 py-4 text-gray-100"
      open
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
  );
};

export default ComposeTweet;
