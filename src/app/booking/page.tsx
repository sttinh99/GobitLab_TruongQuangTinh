"use client";
import ResultsPage from "./components/Results/page";
import SearchPage from "./components/Search/page";
import provinces from "../../../data/tinh_tp.json";
import prices from "../../../data/prices.json";
import area from "../../../data/area.json";
import cards from "../../../data/data.json";
import { useState } from "react";

export default function BookingPage() {
  const convertProvinceData = Object.values(provinces).map((item) => {
    return {
      name: item.name,
      code: item.code,
    };
  });

  const data = {
    provinces: [{ code: "", name: "--Tỉnh--" }, ...convertProvinceData],
    districts: [{ code: "", name_with_type: "--Quận/Huyện--" }],
    prices: [{ id: "", label: "Chọn mức giá" }, ...prices.data],
    acreage: [{ id: "", label: "Chọn diện tích" }, ...area.data],
  };

  const [formDataSearch, setFormDataSearch] = useState(data);
  const [results, setResults] = useState(cards);
  const [searchObj, setSearchObj] = useState({
    province: "",
    district: "",
    priceFrom: "",
    priceTo: "",
    areaFrom: "",
    areaTo: "",
  });

  return (
    <div className="container w-100 lg:w-[80%] mt-4">
      <div className="bg-amber-200">
        <SearchPage
          data={formDataSearch}
          setFormDataSearch={setFormDataSearch}
          setSearchObj={setSearchObj}
          searchObj={searchObj}
          setResults={setResults}
        />
      </div>
      <ResultsPage results={results} />
    </div>
  );
}
