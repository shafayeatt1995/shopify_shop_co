import React from "react";

export default function Rating({ rating }) {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <React.Fragment key={i}>
          {i < Math.floor(+rating) ? (
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.8487 0.255005L11.4679 5.89491L17.6412 6.6431L13.0867 10.8769L14.2827 16.9793L8.8487 13.956L3.41466 16.9793L4.61073 10.8769L0.0562391 6.6431L6.22949 5.89491L8.8487 0.255005Z"
                fill="#FFC633"
              />
            </svg>
          ) : i === Math.floor(+rating) && +rating % 1 !== 0 ? (
            <svg
              width="10"
              height="17"
              viewBox="0 0 10 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.76406 16.9793L9.1981 13.956V0.255005L6.57889 5.89491L0.40564 6.6431L4.96013 10.8769L3.76406 16.9793Z"
                fill="#FFC633"
              />
            </svg>
          ) : null}
        </React.Fragment>
      ))}
    </>
  );
}
