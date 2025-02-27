import under_contraction from "../../assets/images/under_contraction.png"
const ComingSoon = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 items-center gap-10 justify-center max-w-[1280px] mx-auto">
          <div className="text-center lg:text-left">
            <p className="text-2xl xs:text-3xl font-bold text-primary uppercase">
              Welcome to Mexxstate
            </p>
            <p className="xs:text-xl text-text1 font-bold mt-4 xs:mt-6 ">
              <span className=" uppercase">
                Currently Our Website is Under
                <br />
                <span className="italic"> Construction</span> and
                <span className="italic"> Enhancement </span>
              </span>
            </p>
            <button className="rounded-full xs:text-xl bg-primary text-white font-medium mt-4 xs:mt-6 uppercase bg-red-gradient px-4 py-2">
              Coming Soon
            </button>
          </div>
          <div className="hidden lg:block">
            <img src={under_contraction} className="max-w-[400px] mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
