import InfoCardComp from "./components/InfoCardComp";
import VideoPlayer from "./components/videoPlayer";

export default function Home() {
  return (
    <div>
      <div className="">
        <div className=" ">
          <div className=" relative w-full">
            <img
              src="homeBackGround.png"
              className=" object-cover w-full h-[420px] md:h-[520px]"
            />
          </div>
          <div className=" absolute top-16 md:top-20 bg-gray-500 bg-opacity-40 to-transparent w-full h-[420px] md:h-[520px]">
            <div className=" mx-10">
              <h1 className="  mt-10 text-[#252B42] text-4xl font-extrabold md:text-5xl">
                International <br /> Classic <br /> Composite Ltd.
              </h1>
              <h3 className="  mt-10 text-[#B22222] text-2xl font-semibold">
                Delivering Excellence since 1984
              </h3>
              <div className=" mt-16 mx-10 flex justify-between md:justify-start md:mx-0 md:mt-10">
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

      <div className=" md:absolute z-10 flex flex-col justify-center items-center md:flex-row md:justify-center md:w-full md:gap-10 md:-mt-36">
        <div className=" p-5 mt-10 w-80 min-h-36 shadow-[0_40px_40px_-15px_rgba(0,0,0,0.3)] bg-gray-100 md:h-44">
          <img src="DMVector.png" className=" w-12 h-12" />
          <h3 className=" mb-2 text-xl font-bold tracking-tight text-gray-900">
            Digital Marketing
          </h3>
          <p className=" text-sm font-normal text-gray-700 lg:text-base">
            We focus on ergonomics and meeting you where you work.
          </p>
        </div>
        <div className=" p-5 mt-10 w-80 min-h-36 shadow-[0_40px_40px_-15px_rgba(0,0,0,0.3)] bg-gray-100 md:h-44">
          <img src="nt50Vector.png" className=" w-12 h-10" />
          <h3 className=" mb-2 text-xl font-bold tracking-tight text-gray-900">
            National top 50 firms
          </h3>
          <p className=" text-sm font-normal text-gray-700 ">
            Just type what&apos;s on your mind and we'll get you there.
          </p>
        </div>
        <div className=" p-5 mt-10 w-80 min-h-36 shadow-[0_40px_40px_-15px_rgba(0,0,0,0.3)] bg-[#BB2222] md:h-44">
          <img src="DMvextor2.png" className=" w-12 h-10" />
          <h3 className=" mb-2 text-xl font-bold tracking-tight text-[#fff]">
            Digital Marketing
          </h3>
          <p className=" text-sm font-normal text-[#fff]">
            the quick fox jumps over the lazy dog
          </p>
        </div>
      </div>

      <div className=" mt-24 md:mt-44">
        <h2 className=" text-center text-xl font-bold md:text-4xl md:font-extrabold">
          WHY CHOOSE US
        </h2>
        <p className=" text-center text-sm text-[#737373] max-w-[600px] m-auto md:text-base">
          Problems trying to resolve the conflict between the two major realms
          of classNameical physics: Newtonian mechanics{" "}
        </p>
        <div className=" grid grid-cols-2 gap-2 text-center md:grid-cols-4 md:mx-24">
          <div className=" max-w-[400px] py-6 px-20 bg-[#fff] flex flex-col items-center ">
            <img src="casesDone.png" className=" w-12 md:w-16" />
            <h3 className=" font-bold text-[30px] text-[#252B42] md:text-[40px]">
              3K
            </h3>
            <p className=" text-[#737373] font-bold text-xs md:text-sm">
              CASES DONE
            </p>
          </div>
          <div className=" max-w-[400px] py-6 px-20 bg-[#fff] flex flex-col items-center ">
            <img src="hpCustomers.png" className=" w-12 md:w-16" />
            <h3 className=" font-bold text-[30px] text-[#252B42] md:text-[40px]">
              3K
            </h3>
            <p className=" text-[#737373] font-bold text-xs md:text-sm">
              HAPPY CUSTOMERS
            </p>
          </div>
          <div className=" max-w-[400px] py-6 px-20 bg-[#fff] flex flex-col items-center ">
            <img src="awordIcn.png" className=" w-12 md:w-16" />
            <h3 className=" font-bold text-[30px] text-[#252B42] md:text-[40px]">
              3K
            </h3>
            <p className=" text-[#737373] font-bold text-xs md:text-sm">
              AWARD WINNING
            </p>
          </div>
          <div className=" max-w-[400px] py-6 px-20 bg-[#fff] flex flex-col items-center ">
            <img src="DMVector.png" className=" w-12 md:w-16" />
            <h3 className=" font-bold text-[30px] text-[#252B42] md:text-[40px]">
              3K
            </h3>
            <p className=" text-[#737373] font-bold text-xs md:text-sm">
              CASES DONE
            </p>
          </div>
        </div>
      </div>

      <div className=" mt-24 ">
        <h2 className=" text-xl font-bold text-center md:text-4xl md:font-extrabold">
          Making Difference
        </h2>
        <p className=" text-center text-sm text-[#737373] max-w-[600px] m-auto md:text-base">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>

        <div className=" mt-8 mx-12 grid grid-cols-2 gap-4 place-items-center md:grid-cols-4">
          {/* test */}
          <InfoCardComp
            title="A single source of truth"
            text=" Newton thought that light was made up of particles."
            imgSrc="singleSrc.png"
          />
          <InfoCardComp
            title="Fastest way to organize"
            text="Quantum mechanics is the description of the behaviour of matter"
            imgSrc="organize.png"
          />
          <InfoCardComp
            title="Fastest way to take action"
            text="They describe a universe consisting of bodies moving"
            imgSrc="takeAction.png"
          />
          <InfoCardComp
            title="Work better together"
            text="They finally obtained a consistent description of the behaviour"
            imgSrc="wrkTogenther.png"
          />
          {/* test */}
        </div>
      </div>

      <div className=" mt-24">
        <h2 className=" text-xl font-bold text-center md:text-4xl md:font-extrabold">
          We are providing best business service.
        </h2>
        <p className=" text-center text-sm text-[#737373] max-w-[600px] m-auto md:text-base ">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <div></div>
        <div className=" grid grid-cols-1 md:grid-cols-2 md:mx-10">
          <div className=" mt-5 flex justify-center">
            <VideoPlayer />
          </div>
          <div className=" text-center md:text-left md:mr-16">
            <h2 className=" text-xl font-bold mt-5">
              Most trusted in our field
            </h2>
            <p className=" text-sm text-[#737373] mx-16 md:mx-0">
              Most calendars are designed for teams. Slate is designed for
              freelancers who want a simple way to plan their schedule.
            </p>
            <div className=" mt-10 flex flex-row gap-10 mx-16 text-left md:mx-0">
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
            <div className=" mt-10 flex flex-row gap-10 mx-16 text-left md:mx-0">
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
        </div>
        <div className="mt-10 mx-16 grid grid-cols-3 gap-5 place-items-center md:grid-cols-6">
          <img src="hooli.png" className="w-20 h-20" />
          <img src="lyft.png" className="w-20 h-20" />
          <img src="piperHat.png" className="w-20 h-20" />
          <img src="stripe.png" className="w-20 h-20" />
          <img src="aws.png" className="w-20 h-20" />
          <img src="reddit.png" className="w-20 h-20" />
        </div>
        <div className=" mt-10 mx-14 bg-[#b22222] py-3 px-8 flex flex-col md:flex-row md:justify-between md:py-6">
          <h1 className=" text-center font-bold text-2xl place-content-center text-white">
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
              className=" py-3 px-8 border-2 border-[#00A0C1]  text-white rounded-xl text-sm hover:bg-[#00A0C1] hover:text-white font-semibold"
            />
          </form>
        </div>
      </div>

      <div className=" mt-24 text-center ">
        <h2 className=" text-xl font-bold text-center md:text-4xl md:font-extrabold">
          Get In Touch
        </h2>
        <p className=" text-center text-sm text-[#737373] max-w-[600px] m-auto md:text-base">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>

        {/* need to fix */}
        <div className=" grid grid-cols-1 gap-2 w-full place-items-center mt-7 md:grid-cols-3 md:gap-0 ">
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
