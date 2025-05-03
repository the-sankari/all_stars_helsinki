import player1 from "../assets/img/players/player_1.png";
import player2 from "../assets/img/players/player_2.png";
import player3 from "../assets/img/players/player_3.png";

const players = [
  {
    name: "Rahim Ahmed",
    position: "Forward",
    number: 9,
    image: player1,
  },
  {
    name: "Sami Järvinen",
    position: "Midfielder",
    number: 7,
    image: player2,
  },
  {
    name: "Leo Koskinen",
    position: "Goalkeeper",
    number: 1,
    image: player3,
  },
  {
    name: "Leo Koskinen",
    position: "Goalkeeper",
    number: 1,
    image: player2,
  },
  {
    name: "Leo Koskinen",
    position: "Goalkeeper",
    number: 1,
    image: player1,
  },
  {
    name: "Leo Koskinen",
    position: "Goalkeeper",
    number: 1,
    image: player3,
  },
  {
    name: "Leo Koskinen",
    position: "Goalkeeper",
    number: 1,
    image: player3,
  },
  {
    name: "Leo Koskinen",
    position: "Goalkeeper",
    number: 1,
    image: player1,
  },
  {
    name: "Leo Koskinen",
    position: "Goalkeeper",
    number: 1,
    image: player3,
  },
  {
    name: "Leo Koskinen",
    position: "Goalkeeper",
    number: 1,
    image: player2,
  },
  {
    name: "Leo Koskinen",
    position: "Goalkeeper",
    number: 1,
    image: player3,
  },

];

export default function Players() {
  return (
    <section className="bg-light text-dark font-body py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-10 text-center">
          Meet Our Players
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {players.map((player, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 text-center"
            >
              <img
                src={player.image}
                alt={player.name}
                className="w-full h-auto rounded-md mb-4"
              />
              <h2 className="text-xl font-heading font-semibold text-primary">
                {player.name}
              </h2>
              <p className="text-sm text-gray-700 mb-1">{player.position}</p>
              <p className="text-sm font-semibold text-secondary">
                #{player.number}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
