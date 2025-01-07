export default function LeftCard() {
  return (
    <div className="relative w-[414px] h-[828px] bg-blue-500 m-auto rounded-[50px]">
      <div>
        <p></p>
        <h1></h1>
      </div>
      <div>
        <img className="mx-[7vh] py-[17vh]  " src="./faceSun.png" alt="" />
      </div>
      <div className="flex justify-around w-[318px] m-auto  ">
        <img src="/home.svg" alt="" />
        <img src="./location.svg" alt="" />
        <img src="./heart.svg" alt="" />
        <img src="./user.svg" alt="" />
      </div>
    </div>
  );
}
