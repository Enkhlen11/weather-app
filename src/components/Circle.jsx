export default function Circle() {
  return (
    <div className=" absolute  w-[100vw] flex justify-center items-baseline">
      <div className="absolute z-10 h-[1340px]  w-[1340px] rounded-full border-[#e5e7eb] border-[1px] flex justify-center flex justify-center items-center">
        <div className="absolute z-10 h-[940px] w-[940px] border-[#e5e7eb] rounded-full border-[1px] flex justify-center flex justify-center items-center">
          <div className="absolute z-10 h-[540px] w-[540px] border-[#e5e7eb] rounded-full border-[1px] flex justify-center flex justify-center items-center">
            <div className="absolute z-10 h-[340px] w-[340px] border-[#e5e7eb] rounded-full border-[1px] flex justify-center flex justify-center items-center">
              <div className="absolute z-10 h-[140px] w-[140px] border-[#e5e7eb] rounded-full border-[1px] flex justify-center flex justify-center items-center gap-4">
                <img src="pineLeft.svg" alt="" />
                <img src="pineRight.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
