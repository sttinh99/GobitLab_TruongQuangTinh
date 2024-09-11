"use client";
import SelectedFeild from "./SelectedFeild";
import results from "../../../../../data/data.json";

export default function SearchPage({
  data,
  setFormDataSearch,
  setSearchObj,
  searchObj,
  setResults,
}: any) {
  const handleFilter = (e: any) => {
    e.preventDefault();

    const listResult = results.filter((item) => {
      let isMatch = true;
      if (
        searchObj["province"] &&
        !(item.city.toString() === searchObj["province"])
      ) {
        isMatch = false;
      }
      if (
        searchObj["district"] &&
        !(item.district.toString() === searchObj["district"])
      ) {
        isMatch = false;
      }

      if (
        searchObj["priceFrom"] !== "" &&
        !(
          item.price >= searchObj["priceFrom"] &&
          item.price <= searchObj["priceTo"]
        )
      ) {
        isMatch = false;
      }
      if (
        searchObj["areaFrom"] !== "" &&
        !(
          item.area >= searchObj["areaFrom"] && item.area <= searchObj["areaTo"]
        )
      ) {
        isMatch = false;
      }
      return isMatch;
    });
    setResults(listResult);
  };

  return (
    <form onSubmit={handleFilter} className="flex">
      <div className="flex gap-4">
        <SelectedFeild
          label="Tỉnh thành"
          name="province"
          data={data.provinces}
          setFormDataSearch={setFormDataSearch}
          setSearchObj={setSearchObj}
        />
        <SelectedFeild
          label="Quận huyện"
          name="district"
          data={data.districts}
          setSearchObj={setSearchObj}
        />
        <SelectedFeild
          label="Khoảng giá"
          name="prices-range"
          data={data.prices}
          setSearchObj={setSearchObj}
        />
        <SelectedFeild
          label="Diện tích"
          name="acreage"
          data={data.acreage}
          setSearchObj={setSearchObj}
        />
      </div>
      <button
        className="bg-amber-500 flex place-self-end mb-2 py-2 text-white font-bold px-4"
        type="submit"
      >
        Lọc tin
      </button>
    </form>
  );
}
