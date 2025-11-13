import React from "react";
import Oneimg from "../assets/png/oneimg.png";
import Twoimg from "../assets/png/twoimg.png";
import Threeimg from "../assets/png/threeimg.png";
import Fourimg from "../assets/png/fourimg.png";
import Fiveimg from "../assets/png/five.png";

function Step() {
  return (
    <>
      <div className="bg-[#212121] p-8 pb-16 mt-10">
        <p className="text-center text-white text-[22px] font-bold">
          Steps for Estimation
        </p>
        <p className="text-center text-white text-[18px] font-bold">
          Working Process
        </p>        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  gap-2 container mx-auto mt-16">
          <div class="flip-card-general-1 mx-auto">
            <div class="flip-card-inner-general-1">
              <div class="flip-card-front-general-1 bg-white rounded-lg">
                <img src={Oneimg} alt="" className="mx-auto" />
                <p className="text-[18px] text-[#000000] font-bold text-center mt-2">
                  Project
                </p>
              </div>
              <div class="flip-card-back-general-1">
                <div className="p-3 mt-6">
                  <p className=" text-[18px]">
                    Avail yourself of the option to either upload your plans
                    directly or forward them via email to <br />
                    <a
                      className="underline"
                      href="mailto:Rao@quickbidestimating.com"
                    >
                      Rao@quickbidestimating.
                      <br />
                      com
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card-general-1 mx-auto">
            <div class="flip-card-inner-general-1">
              <div class="flip-card-front-general-1 bg-white rounded-lg">
                <img src={Twoimg} alt="" className="mx-auto" />
                <p className="text-[18px] text-[#000000] font-bold text-center mt-2">
                  Reviewing
                </p>
              </div>
              <div class="flip-card-back-general-1">
                <div className="p-6 text-[18px]">
                  <p>
                    Upon submission of the proposal, our team thoroughly
                    examines the drawings provided by you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card-general-1 mx-auto">
            <div class="flip-card-inner-general-1">
              <div class="flip-card-front-general-1 bg-white rounded-lg">
                <img src={Threeimg} alt="" className="mx-auto" />
                <p className="text-[18px] text-[#000000] font-bold text-center mt-2">
                  Approval
                </p>
              </div>
              <div class="flip-card-back-general-1">
                <div className="p-6 text-[18px]">
                  <p>
                    Following our thorough review, we will furnish you with a
                    comprehensive fee proposal for your careful consideration
                    and approval.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card-general-1 mx-auto">
            <div class="flip-card-inner-general-1">
              <div class="flip-card-front-general-1 bg-white rounded-lg">
                <img src={Fourimg} alt="" className="mx-auto" />
                <p className="text-[18px] text-[#000000] font-bold text-center mt-2">
                  RFI\Clarification
                </p>
              </div>
              <div class="flip-card-back-general-1">
                <div className="p-6 text-[18px]">
                  <p>
                    The RFI email will always be sent to you if anything is
                    unclear in the plans/drawings/notes, or if required with
                    your approval we can complete the job with appropriate
                    assumptions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card-general-1 mx-auto">
            <div class="flip-card-inner-general-1">
              <div class="flip-card-front-general-1 bg-white rounded-lg">
                <img src={Fiveimg} alt="" className="mx-auto" />
                <p className="text-[18px] text-[#000000] font-bold text-center mt-2">
                  Submission
                </p>
              </div>
              <div class="flip-card-back-general-1">
                <div className="p-6 text-[18px]">
                  <p>
                    Our team delivers detailed estimates for materials and labor
                    in EXCEL format, tailored to your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step;
