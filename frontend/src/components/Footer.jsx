import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bottom-0 w-full md:px-8 md:py-0 bg-black text-white border-t border-gray-800 text-center flex justify-center">
      <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-lg leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="https://github.com/Seechange"
            target="_blank"
            className="font-medium underline underline-offset-4"
          >
            DanhDev
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/Seechange/MERN---MovieAPP"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
