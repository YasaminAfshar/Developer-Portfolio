import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const WhatsAppIcon = ({ className, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 258"
      {...rest}
      className={`w-full h-auto ${className}`}
    >
      <defs>
        <linearGradient id="a" x1="50%" x2="50%" y1="100%" y2="0%">
          <stop offset="0%" stopColor="#1FAF38" />
          <stop offset="100%" stopColor="#60D669" />
        </linearGradient>
        <linearGradient id="b" x1="50%" x2="50%" y1="100%" y2="0%">
          <stop offset="0%" stopColor="#F9F9F9" />
          <stop offset="100%" stopColor="#FFF" />
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01.013-32.867-12.775-63.773-36.009-87.025-23.23-23.25-54.125-36.061-87.043-36.076-67.823 0-123.022 55.18-123.05 123.004"
      />
      <path
        fill="url(#b)"
        d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0 58.276 0 1.099 57.16 1.071 127.416Zm40.24 60.376-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06 20.003 20.018 31.01 46.628 31.003 74.93-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295-40.098 10.513 10.706-39.082Z"
      />
      <path
        fill="#FFF"
        d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503-1.858-.08-3.982-.074-6.104-.074-2.124 0-5.575.799-8.492 3.984-2.92 3.188-11.148 10.892-11.148 26.561 0 15.67 11.413 30.813 13.004 32.94 1.593 2.123 22.033 35.307 54.405 48.073 26.904 10.609 32.379 8.499 38.218 7.967 5.84-.53 18.844-7.702 21.497-15.139 2.655-7.436 2.655-13.81 1.859-15.142-.796-1.327-2.92-2.124-6.105-3.716-3.186-1.593-18.844-9.298-21.763-10.361-2.92-1.062-5.043-1.592-7.167 1.597-2.124 3.184-8.223 10.356-10.082 12.48-1.857 2.129-3.716 2.394-6.9.801-3.187-1.598-13.444-4.957-25.613-15.806-9.468-8.442-15.86-18.867-17.718-22.056-1.858-3.184-.199-4.91 1.398-6.497 1.431-1.427 3.186-3.719 4.78-5.578 1.588-1.86 2.118-3.187 3.18-5.311 1.063-2.126.531-3.986-.264-5.579-.798-1.593-6.987-17.343-9.819-23.64"
      />
    </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 496 496"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path d="M325.283 429.657c-2.174-3.521-3.42-7.198-5.881-9.974-2.024.424-2.94 1.518-3.695 3.217 4.594 3.72 4.59 8.34 1.766 13.504 4.73 2.62 8.614 5.69 9.976 11.21 1.945 7.886-.613 14.379-7.953 17.817-7.584 3.554-16.19 3.624-23.985 6.598-1.688.644-2.79-.498-3.313-2.166-.512-1.636.297-2.485 1.646-3.135 1.325-.639 2.614-1.352 3.73-1.935.31-1.512-.688-2.107-1.178-2.919-6.041-10.017-2.603-19.582 8.464-23.596 3.43-1.244 9.093-1.629 7.318-6.719-1.711-4.91-6.529-1.493-10-.871-2.61.468-5.145 1.364-7.753 1.856-6.143 1.16-10.844-.65-13.509-5.037-3.143-5.178-3.18-11.342.937-15.842 7.554-8.26 17.42-11.636 28.386-10.604 6.904.649 9.42 4.64 10.495 14.015 4.916-1.98 6.384 1.528 8.17 4.994 3.355 6.515 6.922 12.922 10.48 19.33 3.247 5.849 7.062 7.534 12.205 5.553 6.593-2.54 9.71-7.38 8.255-13.469-2.164-9.054-7.98-16.415-11.845-24.688-1.002-2.146-2.449-4.084.758-5.805 2.797-1.501 4.398-1.103 5.934 1.817 5.66 10.762 11.586 21.385 17.29 32.125.963 1.814 3.187 3.745.13 6-2.922 2.157-4.526.254-6.865-2.287-2.108 6.676-6.3 10.833-12.267 13.254-7.454 3.025-13.483 1.7-17.942-4.974-3.594-5.38-6.41-11.28-9.754-17.27m-24.691-21.506c-4.746 1.192-9.29 2.807-12.486 6.79-1.805 2.248-2.254 4.723-.796 7.439 1.056 1.968 2.677 3.332 4.765 2.974 5.893-1.01 11.818-2.135 17.149-5.043 3.196-1.743 4.164-4.73 3.35-8.132-.822-3.44-3.546-4.66-6.78-4.773-1.469-.052-2.953.338-5.202.745m1.45 47.206c2.677 5.632 5.231 7.282 10.333 6.187 3.976-.853 7.146-2.87 7.45-7.453.264-3.966-.311-7.832-4.14-9.964-3.447-1.92-7.11-1.361-10.42.606-3.833 2.278-4.624 5.798-3.223 10.624zM378.844 65.112c3.93 2.839 7.622 5.396 11.24 8.056 1.505 1.105 3.844 1.937 2.194 4.63-1.527 2.491-3.363 1.348-5.196.52-.896-.406-1.798-.8-2.641-1.173-.383.281-.812.426-.87.662-3.297 13.47-13.69 17.708-25.327 10.3-.984-.625-1.904-1.353-2.902-1.951-2.334-1.398-4.252-.318-5.74 1.373-1.69 1.92-.229 3.498 1.22 4.634 2.484 1.946 5.117 3.707 7.742 5.465 6.459 4.323 8.397 7.387 9.052 14.586 1.794-.013 2.41-1.592 3.331-2.621 7.661-8.57 15.287-17.17 22.865-25.813 1.928-2.198 3.536-3.835 6.498-1.13 2.71 2.474 1.59 4.146-.28 6.235-7.556 8.436-15.134 16.856-22.506 25.452-3.137 3.658-5.904 6.938-10.364.358-4.223 7.019-9.88 10.225-17.447 8.583-8.603-1.867-15.727-6.339-21.172-13.222-2.953-3.733-4.069-8.088-1.742-12.624 2.322-4.527 6.01-7.009 11.282-6.752.807.04 1.624-.104 2.708-.182.254-4.828 2.09-8.43 7.078-9.628 1.623-.39 1.966-1.672 1.692-3.13-1.49-7.928 1.76-13.881 8.46-17.513 6.887-3.733 13.22-.875 19.005 3.387.535.395 1.036.838 1.82 1.498m-43.001 33.19c-1.967 2.22-3.247 4.52-1.752 7.621 2.473 5.133 12.917 11.217 18.594 10.741 3.18-.266 5.116-2.05 6.308-4.85 1.275-2.994-.695-4.806-2.66-6.258-3.72-2.747-7.594-5.302-11.53-7.733-2.698-1.668-5.603-1.952-8.96.48m23.5-17.27c.76.633 1.467 1.35 2.291 1.885 4.812 3.125 9.253 2.243 12.424-2.42 3.42-5.03 2.649-9.545-2.214-12.841-3.603-2.442-7.142-3.263-10.801.049-4.195 3.797-4.936 7.657-1.7 13.327zM454.287 190.063a2957.907 2957.907 0 0 1 24.619-3.498c1.971-.27 4.82-1.822 5.178 1.594.357 3.422 3.55 7.52-1.38 10.294-7.69 4.326-15.402 8.615-23.09 12.946-6.178 3.48-12.334 7-19.154 10.873 5.589 2.692 10.9 3.143 15.973 4.355 10.182 2.433 20.372 4.876 30.645 6.878 5.534 1.078 4.753 5.274 5.11 8.818.4 3.96-2.904 3.658-5.502 4.047-16.429 2.46-32.858 4.92-49.274 7.466-2.633.408-4.956 1.013-5.682-2.686-.751-3.828 1.142-4.95 4.476-5.413 14.546-2.02 29.074-4.167 44.832-6.444l-44.37-9.988c-1.46-.328-2.91-.699-4.378-.982-2.257-.434-4.115-1.196-4.536-3.867-.437-2.771.867-4.254 3.169-5.52 11.669-6.421 23.282-12.943 34.9-19.455 1.871-1.049 3.669-2.228 5.332-4.2-7.88 1.162-15.758 2.333-23.64 3.481-6.41.934-12.852 1.693-19.228 2.826-2.842.505-4.01-.428-4.467-3.073-.486-2.811.931-4.025 3.418-4.39 8.219-1.205 16.444-2.367 24.665-3.556.657-.095 1.303-.269 2.384-.506zM176.82 429.84c2.903-3.244 5.598-6.199 8.216-9.221 1.544-1.785 3.235-2.178 5.295-.983 1.672.97 3.977 1.428 3.47 4.165-3.628 19.58-7.272 39.155-10.897 58.658-6.33-.301-7.944-1.807-7.024-6.53 2.794-14.33 5.7-28.64 8.71-43.707-9.9 11.206-19.352 21.953-28.879 32.633-1.561 1.75-2.764 4.53-6.002 3.303-3.124-1.184-5.216-2.41-4.416-6.855 2.615-14.526 4.574-29.17 6.86-44.267-9.277 11.167-18.265 22.041-27.321 32.859-4.246 5.071-4.519 5.043-10.049.983-.48-1.743.813-2.745 1.751-3.848 11.552-13.58 23.14-27.13 34.673-40.725 1.833-2.162 3.367-3.794 6.671-2.121 3.258 1.65 3.453 3.676 2.902 6.887-2.53 14.717-4.787 29.481-7.333 45.424 8.176-9.33 15.654-17.861 23.372-26.654zM391.269 130.566c1.208 1.08 2.207 1.9 3.382 2.863 5.624-5.952 11.736-9.266 19.612-4.792 6.454 3.666 9.738 10.326 14.305 15.61 8.13-3.777 9.341-8.854 4.037-15.476-1.696-2.117-3.866-3.654-6.032-5.204-1.74-1.244-2.431-2.545-1.002-4.578 1.482-2.106 3.01-2.282 5.02-.834 5.536 3.99 10.005 8.85 12.14 15.45 1.494 4.622.868 9.092-2.878 12.407-8.647 7.652-18.902 13.01-28.41 19.44-1.165.787-2.21.592-3.008-.576-.834-1.223-1.966-2.433-.85-4.04.65-.934 1.424-1.78 2.456-3.055-9.39-2.355-14.868-8.124-16.44-17.417-.233-1.38-1.49-1.037-2.319-1.443-10.745-5.266-12.539-15.678-4.016-23.913 5.27-5.092 10.71-10.011 16.13-14.946 1.84-1.677 2.81-3.25.713-5.427-.946-.982-1.642-2.176-.39-3.508 1.104-1.175 2.462-1.182 3.642-.423 3.3 2.122 6.224 1.247 9.291-.595 1.925-1.156 4.261-2.759 6.139.05 1.867 2.792-1.202 3.637-2.396 5.165-.904 1.158-2.365 1.871-2.82 3.63 1.035 2.794 3.635 4.521 5.51 6.797 1.51 1.833 1.94 3.308-.076 5.088-1.946 1.72-3.227.78-4.643-.666-2.078-2.123-3.754-4.674-6.86-6.499-6.75 6.226-14.004 12.021-20.216 18.937-2.07 2.305-2.485 5.06-.021 7.955m19.948 21.842c4.866.846 8.612-1.145 12.095-4.61-3.002-4.61-5.733-9.15-10.356-12.074-3.588-2.27-7.005-1.773-9.93 1.196-2.864 2.907-2.045 6.084-.1 9.07 1.845 2.831 4.257 5.078 8.29 6.418zM303.472 16.444c4.051 1.2 7.78 2.101 11.37 3.394 14.684 5.288 20.983 16.085 18.544 31.526-2.597 16.443-11.513 26.123-26.307 27.467-9.636.876-18.56-3.166-27.65-5.706-1.822-.51-1.944-2.24-1.503-3.737 5.343-18.147 9.675-36.585 15.658-54.547.045-.137.233-.228.501-.477 3.09-.197 5.991 1.152 9.387 2.08m16.82 46.296c2.998-4.365 4.424-9.357 5.15-14.467 1.015-7.159-.53-13.609-6.664-18.268-5.61-4.26-12.265-5.545-19.424-7.2-4.048 14.434-8.002 28.486-11.907 42.552-.326 1.174.043 2.216 1.172 3.023 8.757 6.263 24.234 3.786 31.674-5.64zM83.191 313.033c4.3 13.362 4.3 13.362-8.882 17.537-13.299 4.213-26.635 8.314-39.874 12.706-4.05 1.343-5.973.676-7.085-3.718-2.11-8.336-5.951-16.246-5.705-25.134.189-6.823 2.471-12.846 7.572-17.308 9.269-8.108 20.224-11.352 32.38-9.095 7.04 1.308 12.225 5.756 15.952 11.855 2.445 4 4.037 8.368 5.642 13.157M62.51 325.855c4.118-1.297 8.235-2.596 12.355-3.889 1.503-.471 2.687-1.073 2.708-3.018.116-10.427-10.004-22.368-20.327-23.391-5.727-.568-11.181 1.198-16.352 3.623-8.784 4.12-12.032 9.646-11.728 19.386.138 4.407 1.816 8.401 2.877 12.57.839 3.293 2.51 3.679 5.498 2.675 8.026-2.698 16.137-5.143 24.97-7.956zM97.785 85.982c8.999-10.468 19.82-11.136 29.734-2.088 4.577 4.177 8.675 8.663 10.582 14.817 3.22 10.392-2.533 20.913-13.092 23.622-1.566.402-3.132.8-5.213 1.333 4.546 5.015 8.7 9.705 12.984 14.275 1.915 2.042 3.067 3.581.355 6.127-2.915 2.737-4.402 1.28-6.412-.94-12.275-13.558-24.673-27.004-36.92-40.585-1.479-1.64-4.593-2.952-2.733-6.104 1.957-3.316 4.627-2.128 7.237-.421.894-3.613 1.156-6.998 3.478-10.036m27.603 7.15c-2.238-2.488-4.714-4.685-7.723-6.208-5.358-2.712-9.957-1.934-14 2.346-3.85 4.074-4.51 8.716-1.662 13.686 2.848 4.969 6.682 9.122 11.535 12.192 4.618 2.921 9.535 2.409 13.748-1.317 3.86-3.414 5.257-7.53 3.155-12.503-1.172-2.771-2.571-5.396-5.053-8.196zM63.03 406.285c-.924-2.753 1.126-3.464 2.518-4.502 4.757-3.547 9.558-7.033 14.858-10.922-5.214-1.824-9.417-3.935-12.278-8.133-4.78-7.014-5.045-15.05-.005-21.856 4.682-6.322 10.966-10.77 18.503-13.003 12.025-3.563 23.372 5.053 23.696 17.694.025.98.088 1.96.124 2.74 1.01.79 1.84.497 2.59.224 2.311-.838 3.438.603 4.369 2.263 1.214 2.165-.662 2.928-1.948 3.88-13.514 10.005-27.016 20.027-40.578 29.967-2.654 1.945-4.989 4.422-8.158 5.476-1.858-.62-2.586-2.182-3.691-3.828m16.564-21.995c9.457 2.131 15.388-3.875 21.191-9.574 4.825-4.738 4.993-9.096 1.554-14.393-3.419-5.267-8.073-6.755-14.293-4.542-3.669 1.306-6.807 3.516-9.745 5.991-8.954 7.547-8.728 14.83 1.293 22.518zM451.425 333.488c6.89 3.434 13.437 6.717 20.003 9.965 2.415 1.195 4.996 1.912 3.136 5.772-1.944 4.035-4.234 2.528-6.847 1.217-9.955-4.991-19.927-9.946-30.787-15.36 2.99 8.028 5.49 15.314 8.429 22.42 1.794 4.337.649 7.6-2.66 11.307-3.252-6.091-5.263-12.174-7.114-18.254-1.394-4.58-3.557-5.917-8.374-4.761-8.017 1.924-16.219 3.076-24.963 4.667.797-5.064 2.163-8.062 7.334-9.03 6.924-1.298 14.082-1.815 20.962-4.298-.833-9.879-10.992-8.37-15.255-13.598 1.633-6.654 2.218-6.936 8.081-4.01 9.235 4.61 18.48 9.2 28.055 13.963z" />
    <path d="M406.943 375.973c2.921-3.836 5.617-7.396 8.272-10.903-8.655-9.205-15.85-5.42-26.915 13.872-4.228-1.048-5.699-3.38-3.841-7.596 3.9-8.858 9.076-16.297 19.486-18.174 8.781-1.584 21.398 5.72 26.519 15.398 4.242 8.018 2.924 16.653-3.562 23.334-7.483 7.71-21.402 6.984-28.128-1.36-1.434-1.778-.7-3.04.344-4.413 2.517-3.308 5.065-6.59 7.825-10.158m7.783 13.726c5.722-.308 9.584-3.283 10.822-8.337 1.166-4.758-.718-9.213-5.284-11.825-3.096 3.96-6.273 7.949-9.367 12-4.3 5.634-4.09 6.143 3.829 8.162zM121.766 423.128c-12.035 3.82-22.907-1.527-26.209-12.576-1.945-6.51 1.553-16.616 6.945-20.672 2.335-1.756 3.693-.193 5.161 1.074 5.29 4.562 10.521 9.192 15.792 13.776 1.11.965 2.295 1.846 3.383 2.716 9.911-7.012 5.835-16.074-12.189-27.413 1.41-3.962 3.591-5.378 7.866-3.429 11.57 5.278 18.179 14.303 16.663 25.065-1.429 10.14-8.2 16.737-17.412 21.459m-9.25-19.138c-.747-.661-1.485-1.335-2.245-1.983-4.226-3.603-6.286-2.91-7.702 2.585-1.18 4.58.93 9.031 5.554 11.711 4.501 2.609 9.097 1.695 14.076-2.932-2.321-3.696-6.114-5.93-9.683-9.38zM164.808 63.23c2.58 3.316 2.155 5.378-1.414 7.324-7.403 4.037-14.597 8.456-21.797 12.672 5.121 11.998 13.906 11.106 30.07-2.591 2.168 1.853 4.325 3.503 2.11 6.879-5.981 9.112-20.25 13.967-29.444 9.924-10.326-4.54-17.97-20.021-15.05-30.412 2.271-8.084 7.922-12.718 15.81-14.128 8.736-1.562 15.004 2.8 19.715 10.332m-8.53 3.09c-1.278-4.39-4.606-6.611-8.773-6.817-4.413-.218-8.152 1.994-10.086 6.09-1.812 3.837-2.076 7.853.901 11.994 6.056-3.666 11.86-7.18 17.959-11.268zM77.713 181.954c.106-1.893.206-3.359.322-5.052 4.317-.616 6.372.618 6.386 5.162.016 4.947-.92 9.612-2.941 14.037-3.661 8.01-9.79 12.314-18.825 12.281-6.934-.025-13.109-2.224-18.616-6.224-8.764-6.366-10.878-17.401-5.306-26.621 4.915-8.133 15.777-10.846 25.21-6.472 2.48 1.15 2.448 2.669 1.73 4.827-2.26 6.788-4.436 13.603-6.61 20.418-.494 1.546-.848 3.135-1.246 4.626 7.146 3.213 14.018.968 17.165-5.5 1.681-3.457 2.722-7.148 2.731-11.482m-24.89 10.33c1.401-4.258 2.694-8.555 4.237-12.76 1.178-3.21-.109-4.166-3.123-4.372-5.976-.409-9.9 2.345-11.297 8.175-1.377 5.743 1.587 10.554 7.993 12.922 1.358-.64 1.45-2.092 2.19-3.966zM66.67 261.877c.33-5.651-2.31-10.31-3.347-15.316 4.274-1.72 6.698-.718 8.05 3.359 2.087 6.299 2.972 12.713 1.228 19.116-3.21 11.78-15.615 17.462-30.533 14.325-11.89-2.5-18.463-13.04-15.409-24.707 2.157-8.24 12.212-14.778 20.918-13.754 2.582.304 2.653 1.984 2.804 3.882.605 7.614 1.443 15.214 1.808 22.839.19 3.968 1.72 4.402 5.046 3.275 5.933-2.01 8.875-5.762 9.436-13.019m-25.395-7.864c-5.895 2.088-8.831 5.417-8.844 10.03-.015 5.137 3.421 9.658 8.352 11.178 3.312 1.021 5.188.374 4.886-3.554-.393-5.121-.69-10.25-1.02-15.375-.108-1.696-.546-3.004-3.374-2.279zM428.57 265.942c2.432-8.695 6.549-11.837 14.274-11.248 7.143.544 11.455 5.187 12.55 13.13.527 3.826.397 7.57.104 11.399-.175 2.275-1.732 5.777 2.392 6.486 3.8.654 7.369.143 9.318-3.913 2.086-4.341 1.277-8.742.316-13.16-.3-1.377-1.331-2.97.517-4.002 2.301-1.285 4.517-1.632 5.547 1.571 2.509 7.806 2.155 15.428-2.057 22.576-2.483 4.216-6.939 5.435-11.268 5.07-10.242-.86-20.428-2.377-30.641-3.583-2.018-.238-2.871-1.203-2.884-3.254-.021-3.514 2.875-3.017 5.432-3.864-2.757-5.314-5.85-10.568-3.6-17.208m19.723.53c-4.163-4.506-9.305-5.265-11.858-1.474-2.83 4.203-2.712 8.82-.522 13.297 2.149 4.39 6.3 5.658 10.706 6.255 1.766.24 2.955-.771 2.94-2.583-.041-4.945 1.092-9.972-1.266-15.495zM72.684 115.404c12.599-8.519 35.154 4.666 36.484 20.138.969 11.275-10.497 27.913-28.61 21.21-4.756-1.76-8.909-4.534-12.373-8.199-9.949-10.524-8.216-23.878 4.5-33.149m12.754 5.557c-7.163-1.468-11.576.366-14.716 6.114-2.895 5.3-1.979 10.448 2.797 15.426 3.537 3.686 7.892 6.143 12.663 7.736 4.84 1.616 9.597-.133 12.854-4.287 3.369-4.298 3.858-9.557 1.105-13.946-3.315-5.286-8.257-8.554-14.703-11.043zM38.442 241.6c-3.79.91-7.178 1.722-10.583 2.459-.419.09-.924-.217-1.35-.33-1.201-5.662-.485-6.993 4.692-8.211 10.66-2.509 21.338-4.94 32.403-7.494-.972-1.592-2.69-2.095-4.169-2.858-8.13-4.19-16.164-8.59-24.45-12.45-4.771-2.224-6.285-4.975-3.65-9.652 1.478-.715 2.582.247 3.711.841 11.92 6.275 23.813 12.601 35.744 18.855 2.243 1.176 3.866 2.477 3.283 5.384-.572 2.85-1.14 5.284-4.703 6.07-10.214 2.256-20.36 4.82-30.928 7.385zM364.02 393.038c-.64-5.584 3.696-7.759 7.28-10.255 3.974-2.766 8.135-2.306 12.17.193 3.173 1.966 5.39 4.92 7.903 7.559 4.57 4.798 9.041 9.692 13.29 14.263 1.882.281 2.506-.9 3.419-1.546.969-.687 1.916-1.413 3.135-.49 1.275.966 1.558 2.415.785 3.552-2.543 3.737-.901 6.895.949 10.165.986 1.744 2.036 3.703-.19 5.314-2.498 1.806-3.469-.726-4.85-1.92-1.238-1.07-2.383-2.245-3.94-3.726-2.51 2.212-4.872 4.228-7.158 6.327-1.632 1.5-3.053 1.695-4.65-.1-1.546-1.738-1.265-3.01.257-4.685 6.673-7.34 6.61-7.373-.216-14.619-3.306-3.509-6.466-7.159-9.847-10.592-4.527-4.598-7.811-4.587-12.2.125-1.833 1.967-3.365 3.267-5.883.57-.275-.165-.254-.135-.254-.135zM75.068 159.854c4.806 2.397 9.227 4.74 13.77 6.814 2.829 1.291 3.105 2.919 1.798 5.538-1.257 2.52-2.742 2.892-5.184 1.681a9753.252 9753.252 0 0 0-51.113-25.157c-2.469-1.206-3.661-2.433-2.24-5.368 1.446-2.99 3.135-3.296 5.93-1.89 12.202 6.139 24.466 12.154 37.04 18.382zM459.284 148.213c2.423-1.19 4.54-2.157 6.603-3.23 2.435-1.265 4.24-1.287 5.546 1.68 1.207 2.74.574 4.312-2.062 5.545-17.302 8.093-34.593 16.21-51.844 24.41-2.665 1.266-3.85.322-4.992-2.042-1.373-2.84-.352-4.155 2.244-5.364 14.756-6.874 29.455-13.87 44.505-20.999zM167.756 55.128c-.883-2.57-1.713-4.747-2.42-6.964-.606-1.903-2.369-3.921.76-5.47 2.77-1.37 4.35-.363 5.56 2.094.208.423.653.729 1.382 1.51 2.382-5.004 5.268-9.4 10.833-10.916 2.148-.585 4.398-2.074 5.575 1.575 1.012 3.138.03 4.38-2.978 5.403-7.702 2.615-10.963 9.119-8.494 17.03 2.027 6.5 4.514 12.857 6.863 19.253 1.059 2.884 2.536 5.614-1.969 7.098-4.525 1.491-4.524-2.162-5.435-4.53-3.283-8.533-6.394-17.133-9.677-26.083zM461.645 330.755c-6.05-.343-6.581-1.04-5.007-5.907 2.382-7.36-.824-13.708-9.022-16.755-6.68-2.482-13.535-4.53-20.396-6.471-2.928-.828-4.37-1.847-3.386-5.153 1.025-3.439 3.135-3.17 5.791-2.347 11.1 3.439 22.253 6.712 33.309 10.284 2.241.725 6.348-.007 5.361 4.726-.91 4.361-4.074 2.739-7.356 2.264 3.242 6.562 5.162 12.782.706 19.359zM344.17 66.081c-3.508 7.374-6.92 14.38-10.222 21.44-1.219 2.606-2.467 4.016-5.665 2.409-3.188-1.603-2.776-3.447-1.513-6.023a2757.6 2757.6 0 0 0 16.219-33.604c1.236-2.61 2.652-3.443 5.42-2.148s3.158 2.868 1.761 5.497c-2.098 3.95-3.92 8.048-6 12.43z" />
    <path d="M363.985 392.996c6.753 10.9 15.317 20.492 22.675 30.968 1.05 1.494 3.064 2.832 1.233 5.19-2.414 3.11-4.673 3.271-7.06.127a5719.138 5719.138 0 0 1-22.542-29.916c-.942-1.257-2.755-2.686-1.167-4.307 1.597-1.63 3.202-4.24 6.583-2.185.313.165.292.135.278.123zM242.09 71.782c-2.744 2.336-5.384 2.945-7.761.373-2.13-2.304-2.373-5.17-.673-7.802 1.462-2.263 4.027-2.555 6.245-1.592 4.13 1.793 4.104 5.104 2.19 9.021zM237.478 438.899c-1.786-1.205-2.645-2.516-2.766-4.307-.233-3.435 1.033-6.021 4.582-6.487 3.187-.418 5.522 1.253 5.875 4.594.37 3.489-.72 6.272-4.85 6.585-.808.06-1.635-.133-2.841-.385zM411.253 77.108c-3.107 2.1-5.774 2.045-7.32-1.225-1.236-2.618-.055-4.897 2.388-6.336 2.576-1.517 4.458-.215 5.935 1.844 1.424 1.985.546 3.776-1.003 5.717zM396.012 435.955c2.116 2.05 2.981 4.126 1.652 6.534-.867 1.572-2.42 2.345-4.193 2.21-2.282-.175-3.424-1.85-4.251-3.762-.76-1.754-.26-3.289 1.033-4.55 1.61-1.569 3.44-1.94 5.759-.432zM356.166 41.376c-2.473 1.287-4.477 1.248-6.14-.67-1.181-1.363-1.48-2.902-.715-4.597 1.27-2.813 3.376-4.394 6.29-2.821 3.682 1.988 3.266 4.909.565 8.088z" />
  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

export const Excel = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={46}
    height={46}
    viewBox="0 0 512 512"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path
      fill="currentColor"
      d="M453.547 273.449H372.12v-40.714h81.427zm0 23.264H372.12v40.714h81.427zm0-191.934H372.12v40.713h81.427zm0 63.978H372.12v40.713h81.427zm0 191.934H372.12v40.714h81.427zm56.242 80.264c-2.326 12.098-16.867 12.388-26.58 12.796H302.326v52.345h-36.119L0 459.566V52.492L267.778 5.904h34.548v46.355h174.66c9.83.407 20.648-.291 29.197 5.583 5.991 8.608 5.41 19.543 5.817 29.43l-.233 302.791c-.29 16.925 1.57 34.2-1.978 50.892m-296.51-91.256c-16.052-32.57-32.395-64.909-48.39-97.48 15.82-31.698 31.408-63.512 46.937-95.327-13.203.64-26.406 1.454-39.55 2.385-9.83 23.904-21.288 47.169-28.965 71.888-7.154-23.323-16.634-45.774-25.3-68.515-12.796.698-25.592 1.454-38.387 2.21 13.493 29.78 27.86 59.15 40.946 89.104-15.413 29.081-29.837 58.57-44.785 87.825 12.737.523 25.475 1.047 38.212 1.221 9.074-23.148 20.357-45.424 28.267-69.038 7.096 25.359 19.135 48.798 29.023 73.051 14.017.99 27.976 1.862 41.993 2.676M484.26 79.882H302.326v24.897h46.53v40.713h-46.53v23.265h46.53v40.713h-46.53v23.265h46.53v40.714h-46.53v23.264h46.53v40.714h-46.53v23.264h46.53v40.714h-46.53v26.897H484.26z"
    />
  </svg>
);