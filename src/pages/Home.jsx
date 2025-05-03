export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative bg-primary text-light font-heading min-h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 pt-24 pb-12">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex flex-col items-center">
              <svg
                width="260"
                height="260"
                viewBox="0 0 260 260"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#shadow)">
                  <path
                    d="M130 20L230 60V120C230 180 130 230 130 230C130 230 30 180 30 120V60L130 20Z"
                    fill="#0A2342"
                    stroke="#FFD700"
                    strokeWidth="8"
                  />
                </g>
                <polygon
                  points="130,60 145,105 195,105 155,130 170,175 130,150 90,175 105,130 65,105 115,105"
                  fill="#FFD700"
                />
                <text
                  x="50%"
                  y="58%"
                  textAnchor="middle"
                  fill="white"
                  fontSize="38"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                  letterSpacing="2"
                  dy=".3em"
                >
                  ALL STARS
                </text>
                <text
                  x="50%"
                  y="70%"
                  textAnchor="middle"
                  fill="white"
                  fontSize="20"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                  letterSpacing="6"
                >
                  HELSINKI
                </text>
                <defs>
                  <filter
                    id="shadow"
                    x="0"
                    y="0"
                    width="260"
                    height="260"
                    filterUnits="userSpaceOnUse"
                  >
                    <feDropShadow
                      dx="0"
                      dy="8"
                      stdDeviation="8"
                      floodColor="#000"
                      floodOpacity="0.3"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          {/* Next Match Card */}
          <div className="absolute right-4 left-auto -bottom-16 md:right-24 md:-bottom-12 bg-[#16335B] text-light rounded-xl shadow-lg px-8 py-6 w-[320px] max-w-full text-left border-4 border-[#16335B]">
            <div className="font-bold text-md mb-2 tracking-wide uppercase">
              Next Match
            </div>
            <div className="text-2xl font-bold mb-1 leading-tight">
              Finn-Bangla
              <br />
              Tournament
            </div>
            <div className="text-base mt-2">May 15, 2024 &bull; 4:00 PM</div>
          </div>
        </div>
      </section>

      {/* WELCOME SECTION */}
      <section className="bg-light py-20 font-body">
        <div className="max-w-2xl mx-auto px-4 text-left">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4 uppercase leading-tight">
            Welcome to
            <br />
            All Stars Helsinki
          </h2>
          <p className="text-lg text-dark mb-8">
            All Stars Helsinki is an amateur football team driven by passion,
            teamwork, and the love of the game.
          </p>
          <a
            href="/join"
            className="inline-block border-2 border-yellow-400 text-primary font-bold py-3 px-10 rounded-full hover:bg-yellow-400 hover:text-dark transition text-lg shadow-sm tracking-wide"
          >
            JOIN US
          </a>
        </div>
      </section>
    </>
  );
}
