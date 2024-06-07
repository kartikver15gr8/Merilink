export default function FeaturedIn() {
  return (
    <div className="flex flex-col p-5">
      <div className="flex justify-center">
        <p className="text-5xl font-extrabold">Featured in…</p>
      </div>
      <div className="flex flex-wrap mt-5 justify-center">
        <div className="w-44 h-16 bg-slate-300 rounded-xl mx-2 my-1 flex justify-center items-center hover:scale-110 transition-all duration-300">
          <svg
            className="w-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
              <path d="m8 7l4 6l4-6m-4 10v-4" />
            </g>
          </svg>
        </div>
        <div className="w-44 h-16 bg-slate-300 rounded-xl mx-2 my-1 flex justify-center items-center hover:scale-110 transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 "
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              color="black"
            >
              <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12.001 2.5c4.478 0 6.717 0 8.108 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.717 0-8.109-1.391c-1.39-1.392-1.39-3.63-1.39-8.109" />
              <path d="m7 17l4.194-4.193M17 7l-4.193 4.194m0 0L9.777 7H7l4.194 5.807m1.613-1.614L17 17h-2.778l-3.028-4.193" />
            </g>
          </svg>
        </div>
        <div className="w-44 h-16 bg-slate-300 rounded-xl mx-2 my-1 flex justify-center items-center hover:scale-110 transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10"
            viewBox="0 0 512 512"
          >
            <path
              fill="black"
              d="M32 32v448h448V32Zm249.67 250.83v84H235v-84l-77-140h55l46.32 97.54l44.33-97.54h52.73Z"
            />
          </svg>
        </div>
        <div className="w-44 h-16 bg-slate-300 rounded-xl mx-2 my-1 flex justify-center items-center hover:scale-110 transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M10 16V8h2.5a2.5 2.5 0 1 1 0 5H10" />
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
