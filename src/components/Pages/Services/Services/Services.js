import React from "react";
import ServicesBanner from "../ServicesBanner/ServicesBanner";
import ServicesCollection from "../ServicesCollection/ServicesCollection";
import { useState } from "react";

const Services = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-white">
      <ServicesBanner search={search} setSearch={setSearch}></ServicesBanner>
      <ServicesCollection
        search={search}
        setSearch={setSearch}></ServicesCollection>
    </div>
  );
};

export default Services;
