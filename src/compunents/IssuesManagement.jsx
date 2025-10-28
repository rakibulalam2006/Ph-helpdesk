import React from "react";
import Container from "./Container";
import { use, useState } from "react";
import Toggle_Btns from "./Toggle_Btns";
import Count_Box from "./Count_Box";
import Card from "./Card";
const IssuesManagement = ({ fetchPromise }) => {
  const [toggleStatus, setToggleStatus] = useState("All");
  const initialData = use(fetchPromise);
  // console.log(initialData);
  const [data, setData] = useState(initialData);
  // console.log(data)
  const filteredData =
    toggleStatus == "All"
      ? data
      : data.filter((element) => element.status == toggleStatus);
  // console.log({toggleStatus})
  // console.log(filteredData)

  return (
    <div>
      {/* Box */}

      <Count_Box data={data} />
      {/* Toggle_btns */}
      <Toggle_Btns
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      />

      {/* Cards */}
      <Container>
        {filteredData.length == 0 ? (
          <h2 className="font-bold text-3xl text-purple-500 text-shadow-2xs text-center my-9">No Data</h2>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-[12px] mt-4">
            {filteredData.map((issue, ind) => {
              // console.log(issue);
              return (
                <Card key={ind} issue={issue} data={data} setData={setData} />
              );
            })}
          </div>
        )}
      </Container>
    </div>
  );
};

export default IssuesManagement;
