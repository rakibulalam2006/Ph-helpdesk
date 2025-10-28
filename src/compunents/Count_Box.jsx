import React from "react";
import Container from "./Container";
const Count_Box = ({data}) => {
  // console.log(data);

  const pendingData = data.filter((element)=>element.status == "Pending");
  const submittedData = data.filter((element)=>element.status == "Submitted");
  const reviewedData = data.filter((element)=>element.status == "Reviewed")
  // console.log({pendingData,submittedData,reviewedData})

  return (
    <Container>
      <div className="grid grid-cols-3 gap-[20px] my-[50px]">
        <div className="rounded-md p-7 text-white h-[150px] bg-gray-600 flex flex-col items-center justify-center">
          <h2 className="font-bold text-2xl">Pending</h2>
          <p className="font-semibold text-xl">{pendingData.length}</p>
        </div>
        <div className="rounded-md p-7 text-white h-[150px] bg-purple-500 flex flex-col items-center justify-center">
          <h2 className="font-bold text-2xl">Submitted</h2>
          <p className="font-semibold text-xl">{submittedData.length}</p>
        </div>
        <div className="rounded-md p-7 text-white h-[150px] bg-teal-500 flex flex-col items-center justify-center">
          <h2 className="font-bold text-2xl">Reviewed</h2>
          <p className="font-semibold text-xl">{reviewedData.length}</p>
        </div>
      </div>
    </Container>
  );
};

export default Count_Box;
