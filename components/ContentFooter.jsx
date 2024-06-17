import Link from "next/link";

const ContentFooter = () => {
  return (
    <footer className="bg-slate-900 p-6 md:py-12 w-full h-full dark:bg-slate-50 flex items-center">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div className="grid">
          <div className="flex items-baseline gap-4 mb-8 text-white dark:text-black">
            <MountainIcon className="h-7 w-7" />
            <h3 className="h3 font-semibold ">Franck Chapelon</h3>
          </div>
          <h4 className="h5 mb-2 text-indigo-500 dark:text-indigo-900">DEVELOPPEUR WEB FRONT-END FREELANCE</h4>
          <p className="text-slate-300 dark:text-slate-900">
            1505 Route de la forêt,
            <br />
            24300 Savignac de Nontron
            <br />
            France
          </p>
        </div>
        <div className="grid">
            <h3 className="h3 font-semibold mb-8 text-indigo-500/70 dark:text-indigo-900">Société</h3>
            <div className="flex flex-col text-slate-300 dark:text-slate-900">
          <Link href="#" prefetch={false}>
            Tarifs
          </Link>
          <Link href="/contact" prefetch={false}>
            Contact
          </Link>
            </div>
          


        </div>
        <div className="grid">
          <h3 className="h3 font-semibold mb-8 text-indigo-500/70 dark:text-indigo-900">Ressources</h3>
          <div className="flex flex-col text-slate-300 dark:text-slate-900">
          <Link href="#" prefetch={false}>
            Blog
          </Link>
          <Link href="#" prefetch={false}>
            FAQ
          </Link>
          <Link href="#" prefetch={false}>
            Documentation
          </Link>
          <Link href="#" prefetch={false}>
            Support
          </Link>
        </div></div>
        <div className="grid">
          <h3 className="h3 font-semibold mb-8 text-indigo-500/70 dark:text-indigo-900">À propos</h3>
          <div className="flex flex-col text-slate-300 dark:text-slate-900">
          <Link href="#" prefetch={false}>
            Qui sommes-nous ?
          </Link>
          <Link href="#" prefetch={false}>
            Carrières
          </Link>
          <Link href="#" prefetch={false}>
            Presse
          </Link>
          <Link href="#" prefetch={false}>
            Partenaires
          </Link>
        </div></div>
      </div>
    </footer>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

export default ContentFooter;

{
  /* <div className="text-white text-lg">© 2021 Franck Chapelon. All rights reserved.</div> */
}
