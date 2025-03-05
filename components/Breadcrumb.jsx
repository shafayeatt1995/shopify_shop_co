import { ChevronRightIcon } from "lucide-react";
import React from "react";

export default function Breadcrumb({ links }) {
  return (
    <div className="flex items-center gap-1">
      {links.map((link, index) => (
        <a
          href="#"
          key={index}
          className="text-black/60 hover:text-black cursor-pointer flex items-center"
        >
          {link}
          {index !== links.length - 1 && <ChevronRightIcon size={18} />}
        </a>
      ))}
    </div>
  );
}
