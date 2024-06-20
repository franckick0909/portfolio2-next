import ContentFooter from "./ContentFooter";

const Footer2 = () => {
  return (
    <div
      className="relative h-screen bg-slate-950 dark:bg-white"
      style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+800px] -top-[100vh]">
        <div className="sticky top-[calc(100vh-800px)] h-[800px]">
          <ContentFooter />
          <div className="flex items-center justify-center h-screen bg-center bg-cover">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 p-8 text-center text-black">
              <h2 className="text-4xl font-semibold">
                Abonnez-vous à notre newsletter
              </h2>
              <p className="mt-2">
                Recevez les dernières nouvelles et mises à jour de notre équipe
              </p>
              <form className="mt-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Entrez votre adresse email"
                    className="w-full p-2 rounded-md text-black border-2 focus:outline-none focus:bg-white focus:border-indigo-500/30"
                  />
                  <button className="p-2 bg-indigo-500 hover:bg-indigo-600 rounded-md text-white">
                  S{"'"}abonner
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;

// style={{ backgroundImage: "url('/images/divers/img4.jpg')", backgroundSize: "cover" }}
