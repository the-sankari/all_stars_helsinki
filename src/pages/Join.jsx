import img3 from "../assets/img/join/img3.png";
import img2 from "../assets/img/join/imgkajol.png";
import nissan from "../assets/img/join/nissan8.png";
import team from "../assets/img/join/team.png";

export default function Join() {
  const player1 = nissan;
  const player4 = img2;
  const player3 = img3;
  const player2 = team;

  return (
    <section className="bg-[#0A2342] text-white font-body py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-400 mb-4">
            Join Us
          </h1>
          <p className="italic text-xl md:text-2xl">
            “Play with passion and leave everything on the pitch.”
          </p>
        </div>

        {/* 2-column grid layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left column: Player 1 and Player 3 stacked */}
          <div className="flex flex-col gap-6">
            <img
              src={player1}
              alt="Player 1"
              className="w-full  object-cover rounded-xl"
            />
            <img
              src={player3}
              alt="Player 3"
              className="w-full  object-cover rounded-xl"
            />
          </div>

          {/* Right column: Player 2, Form, Player 4 */}
          <div className="flex flex-col gap-6">
            {/* Player 2 */}
            <img
              src={player2}
              alt="Player 2"
              className="w-full  object-cover rounded-xl"
            />

            {/* Form */}
            <form className="bg-white text-dark rounded-xl shadow-lg p-6 space-y-4">
              <h2 className="text-2xl font-heading font-bold text-primary mb-2">
                Become a member
              </h2>
              <input
                type="text"
                placeholder="Name"
                className="w-full border rounded p-3"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded p-3"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded p-3"
              />
              <select className="w-full border rounded p-3">
                <option>Position You’d Love to Play</option>
                <option>Forward</option>
                <option>Midfielder</option>
                <option>Defender</option>
                <option>Goalkeeper</option>
              </select>
              <input
                type="text"
                placeholder="Playing Experience"
                className="w-full border rounded p-3"
              />
              <button
                type="submit"
                className="w-full bg-yellow-400 text-[#0A2342] font-bold py-3 rounded-lg text-lg hover:bg-yellow-300 transition"
              >
                SIGN UP
              </button>
            </form>

            {/* Player 4 (quote image) */}
            <img
              src={player4}
              alt="Player 4"
              className="w-full  object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
