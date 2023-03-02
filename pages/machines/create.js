import React from "react";

import CardMachine from "components/Cards/CardMachine.js";

import Admin from "layouts/Admin.js";

export default function CreateMachine() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <CardMachine />
        </div>
      </div>
    </>
  );
}

CreateMachine.layout = Admin;
