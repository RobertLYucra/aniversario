import { useState } from "react";

const Header = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <>
      <button
        title="Side navigation"
        type="button"
        className={`visible fixed left-6 top-6 z-40 order-10 block h-10 w-10 self-center rounded bg-white opacity-100 lg:hidden ${
          isSideNavOpen
            ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
            : ""
        }`}
        aria-haspopup="menu"
        aria-label="Side navigation"
        aria-expanded={isSideNavOpen ? " true" : "false"}
        aria-controls="nav-menu-2"
        onClick={() => setIsSideNavOpen(!isSideNavOpen)}
      >
        <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
          ></span>
        </div>
      </button>

      {/*  <!-- Side Navigation --> */}
      <aside
        id="nav-menu-2"
        aria-label="Side navigation"
        className={`fixed top-0 bottom-0 left-0 z-40 flex w-72 flex-col border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0 ${
          isSideNavOpen ? "translate-x-0" : " -translate-x-full"
        }`}
      >
        <a
          aria-label="WindUI logo"
          className="flex items-center gap-2 whitespace-nowrap p-6 text-xl font-medium focus:outline-none"
          href="javascript:void(0)"
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M7 7C7 3.68629 8.93658 2 11.8718 2C13.7242 2 15.1788 2.6716 16 4"
                stroke="#ff0000"
                stroke-width="1.5"
                stroke-linecap="round"
              />{" "}
              <path
                d="M12 12V14.5"
                stroke="#ff0000"
                stroke-width="1.5"
                stroke-linecap="round"
              />{" "}
              <path
                d="M9.26556 20.6154L9.72058 20.0192L9.26556 20.6154ZM12 8.93062L11.4681 9.4594C11.6089 9.601 11.8003 9.68062 12 9.68062C12.1997 9.68062 12.3911 9.601 12.5319 9.4594L12 8.93062ZM14.7344 20.6154L15.1895 21.2116L14.7344 20.6154ZM7.53898 18.3638C7.21503 18.1057 6.74316 18.159 6.48504 18.483C6.22692 18.8069 6.28028 19.2788 6.60423 19.5369L7.53898 18.3638ZM3.247 15.8789C3.45073 16.2395 3.90825 16.3667 4.2689 16.163C4.62954 15.9593 4.75674 15.5017 4.553 15.1411L3.247 15.8789ZM3.75 12.0992C3.75 10.2748 4.81485 8.7347 6.28482 8.08418C7.71357 7.4519 9.63741 7.61795 11.4681 9.4594L12.5319 8.40184C10.3127 6.16968 7.73658 5.8014 5.67779 6.7125C3.66023 7.60535 2.25 9.68634 2.25 12.0992H3.75ZM8.81054 21.2116C9.27099 21.563 9.76987 21.9413 10.2764 22.2279C10.7832 22.5146 11.3656 22.75 12 22.75V21.25C11.7344 21.25 11.4168 21.1496 11.015 20.9223C10.6129 20.6949 10.1946 20.3809 9.72058 20.0192L8.81054 21.2116ZM15.1895 21.2116C16.4684 20.2354 18.1188 19.1062 19.4129 17.6953C20.7329 16.2564 21.75 14.46 21.75 12.0992H20.25C20.25 13.9756 19.4584 15.4268 18.3076 16.6814C17.1309 17.964 15.6485 18.9742 14.2794 20.0192L15.1895 21.2116ZM21.75 12.0992C21.75 9.68634 20.3398 7.60535 18.3222 6.7125C16.2634 5.8014 13.6873 6.16968 11.4681 8.40184L12.5319 9.4594C14.3626 7.61795 16.2864 7.4519 17.7152 8.08418C19.1852 8.7347 20.25 10.2748 20.25 12.0992H21.75ZM14.2794 20.0192C13.8054 20.3809 13.3871 20.6949 12.985 20.9223C12.5832 21.1496 12.2656 21.25 12 21.25V22.75C12.6344 22.75 13.2168 22.5146 13.7236 22.2279C14.2301 21.9413 14.729 21.563 15.1895 21.2116L14.2794 20.0192ZM9.72058 20.0192C9.0015 19.4703 8.27708 18.9519 7.53898 18.3638L6.60423 19.5369C7.35199 20.1327 8.14487 20.7035 8.81054 21.2116L9.72058 20.0192ZM4.553 15.1411C4.05588 14.2611 3.75 13.2673 3.75 12.0992H2.25C2.25 13.5483 2.6342 14.7941 3.247 15.8789L4.553 15.1411Z"
                fill="#ff0000"
              />{" "}
            </g>
          </svg>
          Nuestro Aniversario
        </a>
        <nav
          aria-label="side navigation"
          className="flex-1 divide-y divide-slate-100 overflow-auto"
        >
          <div>
            <ul className="flex flex-1 flex-col gap-1 py-3">
              <li className="px-3">
                <a
                  href="/"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-red-50 hover:text-red-500 focus:bg-red-50 aria-[current=page]:bg-red-50 aria-[current=page]:text-red-500 "
                  aria-current="page"
                >
                  <div className="flex items-center self-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                      aria-label="Dashboard icon"
                      role="graphics-symbol"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Inicio
                  </div>
                </a>
              </li>
              <li className="px-3">
                <a
                  href="/recuerdos"
                  className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-red-50 hover:text-red-500 focus:bg-red-50 aria-[current=page]:bg-red-50 aria-[current=page]:text-red-500 "
                >
                  <div className="flex items-center self-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                      aria-label="Dashboard icon"
                      role="graphics-symbol"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19,15a3.947,3.947,0,0,0-2.019.567l-1.548-1.548a3.916,3.916,0,0,0-.484-4.7l.933-2.332c.04,0,.078.012.118.012a3.03,3.03,0,1,0-1.974-.757l-.789,1.973a3.791,3.791,0,0,0-3.256.351L6.707,5.293,6.7,5.287A2.957,2.957,0,0,0,7,4,3,3,0,1,0,4,7a2.96,2.96,0,0,0,1.287-.3l.006.009L8.567,9.981A3.908,3.908,0,0,0,9.01,14.63L6.17,18.1A2.474,2.474,0,0,0,5.5,18a2.53,2.53,0,1,0,2.218,1.369l2.955-3.613a3.82,3.82,0,0,0,3.346-.323l1.548,1.548A3.947,3.947,0,0,0,15,19a4,4,0,1,0,4-4ZM4,5A1,1,0,1,1,5,4,1,1,0,0,1,4,5Zm6,7a2,2,0,1,1,2,2A2,2,0,0,1,10,12Zm9,9a2,2,0,1,1,2-2A2,2,0,0,1,19,21Zm1-11a2,2,0,1,1-2,2A2,2,0,0,1,20,10ZM4,13a2,2,0,1,1,2-2A2,2,0,0,1,4,13ZM23,7a1,1,0,1,1-1-1A1,1,0,0,1,23,7ZM2,15a1,1,0,1,1-1,1A1,1,0,0,1,2,15Z"
                      />
                    </svg>
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Recuerdos
                  </div>
                </a>
              </li>
              <li className="px-3">
                <a
                  href="/fechas"
                  className="  flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-red-50 hover:text-red-500 focus:bg-red-50 aria-[current=page]:bg-red-50 aria-[current=page]:text-red-500 "
                >
                  <div className="flex items-center self-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                      aria-label="Dashboard icon"
                      role="graphics-symbol"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
                      />
                    </svg>
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                    Fechas
                  </div>
                  <span className="inline-flex items-center justify-center rounded-full bg-red-100 px-2 text-xs text-red-500 ">
                    {13}
                    <span className="sr-only"> new notifications</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <footer className="border-t border-slate-200 p-3">
          <p className="flex items-center gap-3 rounded p-3 text-slate-900 transition-colors text-red-500 ">
            <div className="flex items-center self-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
                aria-label="Dashboard icon"
                role="graphics-symbol"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 10V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V10M20 10V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V10M20 10H4M8 3V7M16 3V7"
                />
              </svg>
            </div>
            <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm font-medium">
              18 de Febrero
            </div>
          </p>
        </footer>
      </aside>

      {/*  <!-- Backdrop --> */}
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
          isSideNavOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSideNavOpen(false)}
      ></div>
      {/*  <!-- End Side navigation menu with content separator --> */}
    </>
  );
};

export default Header;
