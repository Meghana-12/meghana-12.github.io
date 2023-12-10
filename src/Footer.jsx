import React from "react";
import { CONTACT } from "./consts/profile";

export default function Footer() {
  return (
    <div class="self-end text-center text-zinc-600 bg-transparent font-semibold flex justify-between">
      <span>
        Created by&nbsp;
        <a href={CONTACT.LINKEDIN.LINK} target="_blank" rel="noreferrer">
          Meghana Varanasi
        </a>
      </span>
      <div className="text-xs">
        <a href="https://www.flaticon.com/free-icons/cat" title="cat icons">
          ( Cat icons created by Freepik - Flaticon)
        </a>
      </div>
    </div>
  );
}
