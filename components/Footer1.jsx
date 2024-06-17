import ContentFooter from "./ContentFooter";

const Footer1 = () => {
  return (
    <div
      className="relative h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="fixed h-[800px] w-full bottom-0">
        <ContentFooter />
      </div>
    </div>
  );
};

export default Footer1;

// style={{ backgroundImage: "url('/images/kasa1.png')", backgroundSize: "cover" }}
