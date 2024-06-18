import Image from "next/image";
import Link from "next/link";
import { FaRegEye, FaAward } from "react-icons/fa";

const Biographie = () => {
  return (
    <div className="flex flex-col gap-20 justify-center items-center">
      <p className="paragraph">
        Je suis un développeur web full stack passionné par la création de sites
        web et d{"'"}applications web. J{"'"}ai une expérience de plus de 5 ans
        dans le développement web. J{"'"}ai travaillé sur des projets allant de
        simples sites web à des applications web complexes. J{"'"}ai une solide
        expérience dans le développement de sites web responsives, de sites web
        e-commerce et d{"'"}applications web personnalisées.
      </p>

      <div className="w-full h-full bg-slate-900 rounded-lg flex  justify-between items-center shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col gap-4 p-4">
          <div className="grid grid-cols-2 items-baseline gap-4 md:gap-10">
            <p className="paragraph font-medium text-white">
              <span className="mr-2 text-indigo-500">&#10003;</span>Prénom:{" "}
            </p>
            <p className="paragraph text-slate-400">Franck Chapelon</p>
          </div>
          <div className="grid grid-cols-2 items-baseline gap-4 md:gap-10">
            <p className="paragraph font-medium text-white">
              <span className="mr-2 text-indigo-500">&#10003;</span>Age:{" "}
            </p>
            <p className="paragraph text-slate-400">48 ans</p>
          </div>
          <div className="grid grid-cols-2 items-baseline gap-4 md:gap-10">
            <p className="paragraph font-medium text-white">
              <span className="mr-2 text-indigo-500">&#10003;</span>
              Nationnalité:{" "}
            </p>
            <p className="paragraph text-slate-400">Français</p>
          </div>
          <div className="grid grid-cols-2 items-baseline gap-4 md:gap-10">
            <p className="paragraph font-medium text-white">
              <span className="mr-2 text-indigo-500">&#10003;</span>
              Emplacement:{" "}
            </p>
            <p className="paragraph text-slate-400">Dordogne, France</p>
          </div>
          <div className="grid grid-cols-2 items-baseline gap-4 md:gap-10 relative group">
            <p className="paragraph font-medium text-white">
              <span className="mr-2 text-indigo-500">&#10003;</span>Freelance:{" "}
            </p>
            <p class="text-lg group relative w-max">
              <span class="px-1 relative z-10 group-hover:text-white text-slate-400 paragraph">
                Disponible
              </span>
              <span class="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-emerald-500 z-0 group-hover:h-full rounded"></span>
            </p>
          </div>
        </div>
      </div>
      <q className="h5 italic font-semibold">
        Programmeur : Une machine qui transforme le café en code.
      </q>
      <div className="w-full flex items-center justify-between gap-4 flex-wrap">
        <div className="flex flex-col items-start justify-start flex-1 gap-3">

      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Border Magic
        </span>
      </button>

          <Link
            target="_blank"
            href="/cv.pdf"
            className="p-[2px] relative w-full max-w-[10rem] hover:-translate-y-[2px] transition-all duration-300 ease-in"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full animate-pulse" />
            <div className="px-6 py-2 bg-white rounded-full relative group transition duration-200 text-slate-900 f hover:bg-transparent hover:text-white pText flex items-center justify-center gap-4 hover:shadow-lg shadow-md">
              Mon CV
              <div className="text-2xl">
                <FaRegEye className="" />
              </div>
            </div>
          </Link>

          <Link
            target="_blank"
            href="/titre-a-finalite-professionnelle_OpenClassrooms_Franck_Chapelon_20240429.pdf"
            className="p-[2px] relative w-full max-w-[10rem] hover:-translate-y-[2px] transition-all duration-300 ease-in "
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-500 rounded-full animate-pulse" />
            <div className="px-6 py-2 bg-white rounded-full relative group transition duration-200 text-slate-900 hover:bg-transparent hover:text-white pText flex items-center justify-center gap-4 hover:shadow-lg shadow-md">
              Diplôme
              <div className="text-2xl">
                <FaAward className="" />
              </div>
            </div>
          </Link>
        </div>

        <div className="w-full h-max flex items-center justify-end pr-12 pb-8 flex-1">
          {/* <Image
            src=""
            layout="responsive"
            alt="about"
            className="max-w-[10rem]"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Biographie;