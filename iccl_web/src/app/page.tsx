import VideoPlayer from "./components/videoPlayer";

export default function Home() {
  return (
    <div>
      <div className="">
        {/* <img alt="bg" className="linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('photographer.jpg')] h-3/6 bg-center bg-no-repeat bg-cover relative " /> */}
        <div className=" ">
          <div className=" relative w-full">
            <img
              src="homeBackGround.png"
              className=" object-cover w-full h-[420px]"
            />
          </div>
          <div className=" absolute top-16 bg-gray-500 bg-opacity-40 to-transparent w-full h-[420px]">
            <div className=" mx-[30px]">
              <h1 className="  mt-10 text-[#252B42] text-4xl font-extrabold">
                International <br /> Classic <br /> Composite Ltd.
              </h1>
              <h3 className="  mt-10 text-[#B22222] text-2xl font-semibold">
                Delivering Excellence since 1984
              </h3>
              <div className=" mt-16 mx-10 flex justify-between">
                <button className=" py-3 px-8 bg-[#B22222] border-2 border-[#B22222] text-white rounded-xl mr-6 text-sm hover:bg-transparent font-semibold">
                  Get Quote Now
                </button>
                <button className=" py-3 px-8 border-2 border-[#00A0C1]  text-white rounded-xl mr-6 text-sm hover:bg-[#00A0C1] hover:text-white font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" md:absolute z-10 flex flex-col justify-center items-center">
        <div className=" p-5 mt-14 w-80 min-h-36 shadow-[0_40px_40px_-15px_rgba(0,0,0,0.3)]">
          <img src="DMVector.png" className=" w-12 h-12" />
          <h3 className=" mb-2 text-xl font-bold tracking-tight text-gray-900">
            Digital Marketing
          </h3>
          <p className=" text-sm font-normal text-gray-700 lg:text-base">
            We focus on ergonomics and meeting you where you work.
          </p>
        </div>
        <div className=" p-5 mt-14 w-80 min-h-36 shadow-[0_40px_40px_-15px_rgba(0,0,0,0.3)]">
          <img src="nt50Vector.png" className=" w-12 h-10" />
          <h3 className=" mb-2 text-xl font-bold tracking-tight text-gray-900">
            National top 50 firms
          </h3>
          <p className=" text-sm font-normal text-gray-700 ">
            Just type what's on your mind and we'll get you there.
          </p>
        </div>
        <div className=" p-5 mt-14 w-80 min-h-36 shadow-[0_40px_40px_-15px_rgba(0,0,0,0.3)] bg-[#BB2222]">
          <img src="DMvextor2.png" className=" w-12 h-10" />
          <h3 className=" mb-2 text-xl font-bold tracking-tight text-[#fff]">
            Digital Marketing
          </h3>
          <p className=" text-sm font-normal text-[#fff]">
            the quick fox jumps over the lazy dog
          </p>
        </div>
      </div>

      <div className=" mt-24">
        <h2 className=" text-center text-xl font-bold ">WHY CHOOSE US</h2>
        <p className=" text-sm text-[#737373] text-center max-w-[600px] m-auto mx-16">
          Problems trying to resolve the conflict between the two major realms
          of classNameical physics: Newtonian mechanics{" "}
        </p>
        <div className=" grid grid-cols-2 gap-2 text-center">
          <div className=" max-w-[400px] py-6 px-20 bg-[#fff] flex flex-col items-center ">
            <img src="casesDone.png" className=" w-12" />
            <h3 className=" font-bold text-[30px] text-[#252B42]">3K</h3>
            <p className=" text-[#737373] font-bold text-xs">CASES DONE</p>
          </div>
          <div className=" max-w-[400px] py-6 px-20 bg-[#fff] flex flex-col items-center ">
            <img src="hpCustomers.png" className=" w-12" />
            <h3 className=" font-bold text-[30px] text-[#252B42]">3K</h3>
            <p className=" text-[#737373] font-bold text-xs">HAPPY CUSTOMERS</p>
          </div>
          <div className=" max-w-[400px] py-6 px-20 bg-[#fff] flex flex-col items-center ">
            <img src="awordIcn.png" className=" w-12" />
            <h3 className=" font-bold text-[30px] text-[#252B42]">3K</h3>
            <p className=" text-[#737373] font-bold text-xs">AWARD WINNING</p>
          </div>
          <div className=" max-w-[400px] py-6 px-20 bg-[#fff] flex flex-col items-center ">
            <img src="DMVector.png" className=" w-12" />
            <h3 className=" font-bold text-[30px] text-[#252B42]">3K</h3>
            <p className=" text-[#737373] font-bold text-xs">CASES DONE</p>
          </div>
        </div>
      </div>

      <div className=" mt-24">
        <h2 className=" text-xl font-bold md:text-3xl text-center">
          Making Difference
        </h2>
        <p className=" text-sm text-[#737373] max-w-[600px] m-auto md:text-base mx-16">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>

        <div className=" mt-8 mx-12 grid grid-cols-2 gap-4">
          <div className=" max-w-[240px] p-0 bg-[#e1e1e1] flex flex-col items-center min-h-[250px] justify-between">
            <div className=" p-6">
              <h4 className=" font-bold text-lg text-[#252B42]">
                A single source of truth
              </h4>
              <p className=" mt-6 font-medium text-sm text-[#737373]">
                Newton thought that light was made up of particles, but then it
                was discovered{" "}
              </p>
            </div>
            <img src="singleSrc.png" className=" " />
          </div>
          <div className=" max-w-[240px] p-0 bg-[#e1e1e1] flex flex-col items-center min-h-[250px] justify-between">
            <div className=" p-6">
              <h4 className=" font-bold text-lg text-[#252B42]">
                Fastest way to organize
              </h4>
              <p className=" mt-6 font-medium text-sm text-[#737373]">
                “Quantum mechanics” is the description of the behaviour of
                matter{" "}
              </p>
            </div>
            <img src="organize.png" className=" " />
          </div>
          <div className=" max-w-[240px] p-0 bg-[#e1e1e1] flex flex-col items-center min-h-[250px] justify-between">
            <div className=" p-6">
              <h4 className=" font-bold text-lg text-[#252B42]">
                Fastest way to take action
              </h4>
              <p className=" mt-6 font-medium text-sm text-[#737373]">
                They describe a universe consisting of bodies moving{" "}
              </p>
            </div>
            <img src="takeAction.png" className=" " />
          </div>
          <div className=" max-w-[240px] p-0 bg-[#e1e1e1] flex flex-col items-center min-h-[250px] justify-between">
            <div className=" p-6">
              <h4 className=" font-bold text-lg text-[#252B42]">
                Work better together
              </h4>
              <p className=" mt-6 font-medium text-sm text-[#737373]">
                They finally obtained a consistent description of the behaviour{" "}
              </p>
            </div>
            <img src="wrkTogenther.png" className=" " />
          </div>
        </div>
      </div>

      <div className=" mt-24">
        <h2 className=" text-xl font-bold text-center">
          We are providing best business service.
        </h2>
        <p className=" text-sm text-[#737373] max-w-[600px] m-auto mx-16 text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <div className=" mt-5 flex justify-center">
          <VideoPlayer />
        </div>
        <div className=" text-center">
          <h2 className=" text-xl font-bold mt-5">Most trusted in our field</h2>
          <p className=" text-sm text-[#737373] mx-16">
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>
          <div className=" mt-10 flex flex-row gap-10 mx-16 text-left">
            <img src="ppl.png" className=" w-10 h-10 mb-5 mt-0" />
            <div>
              <h4 className=" font-bold text-lg text-[#252B42] mt-0 ">
                the quick fox jumps over the lazy dog
              </h4>
              <p className=" font-semibold text-base text-[#737373] mt-0">
                Things on a very small scale ...
              </p>
            </div>
          </div>
          <div className=" mt-10 flex flex-row gap-10 mx-16 text-left">
            <img src="watch.png" className=" w-10 h-10 mb-5 mt-0" />
            <div>
              <h4 className=" font-bold text-lg text-[#252B42] mt-0 ">
                the quick fox jumps over the lazy dog
              </h4>
              <p className=" font-semibold text-base text-[#737373] mt-0">
                Things on a very small scale ...
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 mx-16 grid grid-cols-3 gap-5 place-items-center">
          <img src="hooli.png" className="w-20 h-20" />
          <img src="lyft.png" className="w-20 h-20" />
          <img src="piperHat.png" className="w-20 h-20" />
          <img src="stripe.png" className="w-20 h-20" />
          <img src="aws.png" className="w-20 h-20" />
          <img src="reddit.png" className="w-20 h-20" />
        </div>
        <div className=" mt-10 mx-14 bg-[#00A0C1] py-3 px-8">
          <h1 className=" text-center font-bold text-2xl">
            Subscribe For Latest Newsletter
          </h1>
          <form className=" grid grid-cols-4 mt-2 gap-2">
            <input
              type="text"
              placeholder="Your Email"
              className=" col-span-3 block text-gray-700 text-sm font-semiBold py-2 px-4 mb-2 rounded h-full"
            />
            <input
              type="button"
              value="Subcribe"
              className=" bg-[#bb2222] hover:bg-white hover:text-[#BB2222] text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outlines"
            />
          </form>
        </div>
      </div>

      <div className="  mt-24 text-center">
        <h2 className=" text-xl font-bold text-center">Get In Touch</h2>
        <p className=" text-sm text-[#737373] max-w-[600px] mx-16 text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>

        <div className=" flex flex-col gap-2 w-full items-center mt-7">
          <div className="  bg-gray-400 w-72 text-center">
            <div className=" py-6 bg-gray-100 flex flex-col items-center gap-8">
              <img src="call.png" className=" h-[80px] w-[56px]" />
              <div>
                <p className=" font-semibold text-md">
                  georgia.young@example.com
                </p>
                <p className=" font-semibold text-md">georgia.young@ple.com</p>
              </div>
              <h4 className=" font-bold text-lg">Get Support</h4>
              <button className=" p-2 border-2 border-[#B22222] text-[#B22222] rounded-xl text-lg hover:bg-[#B22222] hover:text-white">
                Submit Request
              </button>
            </div>
          </div>
          <div className=" bg-gray-900 w-80">
            <div className=" py-6 bg-[#252B42] flex flex-col items-center gap-8 text-white justify-center">
              <img src="location.png" className=" h-[72px] w-[72px]" />
              <div>
                <p className=" font-semibold text-md">
                  georgia.young@example.com
                </p>
                <p className=" font-semibold text-md">georgia.young@ple.com</p>
              </div>
              <h4 className=" font-bold text-lg">Get Support</h4>
              <button className=" p-2 border-2 border-[#fff] text-[#fff] rounded-xl text-lg hover:bg-[#fff] hover:text-black">
                Submit Request
              </button>
            </div>
          </div>
          <div className=" bg-gray-400 w-72">
            <div className=" py-6 bg-gray-100 flex flex-col items-center gap-8">
              <img src="msg.png" className=" h-[80px] w-[80px]" />
              <div>
                <p className=" font-semibold text-md">
                  georgia.young@example.com
                </p>
                <p className=" font-semibold text-md">georgia.young@ple.com</p>
              </div>
              <h4 className=" font-bold text-lg">Get Support</h4>
              <button className=" p-2 border-2 border-[#B22222] text-[#B22222] rounded-xl text-lg hover:bg-[#B22222] hover:text-white">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
