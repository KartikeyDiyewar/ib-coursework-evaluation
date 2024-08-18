// src/app/pagedetails/[id]/page.tsx
"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useCourseworkStore } from "@/store/courseworkStore";
import DataCard from "@/components/DataCard";
import { Button } from "@/components/ui/button";

const PageDetails: React.FC = () => {
  const params = useParams();
  const id = params.id;
  const coursework = useCourseworkStore(
    (state) => state.courseworkList[Number(id)]
  );

  if (!coursework) {
    return (
      <div className="flex justify-center p-20">
        <h1>Coursework not found!</h1>
      </div>
    );
  }

  return (
    <div className="flex justify-center p-20">
      <div className="w-[80%] flex gap-1">
        <div className="flex flex-col items-start w-[70%] overflow-auto">
          <div className="pdf-container h-screen overflow-hidden">
            <div className="bg-[#FFFFFF7A] px-2 py-2 rounded-t-2xl">
              <div className="bg-white px-2 rounded-2xl inline-block">
                <p>{coursework.name}</p>
              </div>
            </div>
            <div className="p-4 rounded-b-2xl bg-white overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              architecto, corporis, dolore velit illo sapiente aperiam
              exercitationem, recusandae eos eaque dolor! Eum aliquam qui
              assumenda autem optio, aspernatur provident perferendis! Cum
              recusandae repellendus, voluptate illum neque magnam quae est
              cumque porro, minus vero eius placeat reiciendis suscipit velit.
              Ut laborum voluptas quos tempora, tempore vitae velit id molestiae
              error aut! Error delectus, maiores minima quaerat maxime obcaecati
              distinctio, nemo ducimus quibusdam perferendis natus voluptatem
              iure cumque officiis explicabo repellat qui. Consequatur, eaque
              distinctio quia amet quae voluptatem atque maiores doloribus?
              Atque neque et molestiae tenetur, asperiores dolor vel explicabo,
              sunt magnam, deleniti corporis laborum voluptatibus iste veniam
              quia alias eligendi? Eligendi quas provident commodi saepe aperiam
              repudiandae debitis veniam recusandae? Aut optio unde sit eveniet,
              cumque reprehenderit nulla suscipit quos, voluptatem, dignissimos
              ex adipisci laudantium odio. Quasi ipsum perspiciatis doloribus
              incidunt ad eos, explicabo voluptas assumenda. Quas est vitae
              recusandae. Deserunt fugit eos quia consequatur enim alias nemo
              quod laudantium velit laboriosam inventore, doloribus quasi labore
              vitae officia minus, dignissimos illo quo ratione quisquam
              similique quam? Odio rem necessitatibus consequuntur? Quis
              distinctio ducimus maiores iusto! Doloremque dicta maiores
              explicabo incidunt rem? Ipsam magnam, nostrum hic reprehenderit
              aliquid maiores optio ab, explicabo amet debitis nisi voluptatem!
              Id omnis dolor blanditiis incidunt. Est iste harum vel commodi
              illo, eveniet repudiandae, cupiditate ad officiis iure molestias
              dignissimos porro quaerat corrupti, sunt quisquam consequuntur
              reiciendis libero hic neque aut? Tempore repudiandae facilis
              deserunt iste. Quos, reprehenderit consequuntur consequatur,
              aperiam qui totam eos in, rem vitae dolore asperiores sint ipsam
              accusamus a officia non. Minus tempora labore aut consequuntur
              deleniti harum sapiente, voluptatum delectus perferendis? Deserunt
              voluptatibus ipsa impedit ratione? Cupiditate obcaecati non
              dolorem voluptas libero excepturi optio ex? Ad quia sint ipsam
              ducimus quam! Eos odio cumque adipisci! Dignissimos ut provident
              animi consequuntur veritatis!
            </div>
          </div>
        </div>
        <div className="inline-block flex flex-col gap-3">
          <DataCard
            title="Criteria:A"
            description="Random DataCard"
            value={66.66}
            valstring="7/10"
          />
          <DataCard
            title="Criteria:A"
            description="Random DataCard"
            value={50.0}
            valstring="5/10"
          />
          <DataCard
            title="Criteria:A"
            description="Random DataCard with th long text"
            value={33.33}
            valstring="3/10"
          />
          <div className="inline-block">
            <Button variant="secondary">
              <p className="text-purple-700 font-bold">
                Check detailed Evaluation &#9654;
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageDetails;
