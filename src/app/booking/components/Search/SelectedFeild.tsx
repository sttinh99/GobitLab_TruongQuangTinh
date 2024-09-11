import districts from "../../../../../data/quan_huyen.json";
import prices from "../../../../../data/prices.json";
import area from "../../../../../data/area.json";

export default function SelectedFeild({
  label,
  name,
  data,
  setFormDataSearch,
  setSearchObj,
}: any) {
  const handleChangeProvince = (e: any) => {
    const districtsFilterd = Object.values(districts).filter(
      (item) => item.parent_code === e.target.value
    );

    setFormDataSearch((prev: any) => ({
      ...prev,
      districts: [
        { code: "", name_with_type: "--Quận/Huyện--" },
        ...districtsFilterd,
      ],
    }));
    setSearchObj((prev: any) => ({
      ...prev,
      province: e.target.value,
    }));
  };
  const handleChangeDistrict = (e: any) => {
    setSearchObj((prev: any) => ({
      ...prev,
      district: e.target.value,
    }));
  };
  const handleChangePrice = (e: any) => {
    if (e.target.value) {
      const price = prices.data.find((p) => p.id === e.target.value);

      setSearchObj((prev: any) => ({
        ...prev,
        priceFrom: price?.from || 0,
        priceTo: price?.to || 0,
      }));
    } else {
      setSearchObj((prev: any) => ({
        ...prev,
        priceFrom: "",
        priceTo: "",
      }));
    }
  };
  const handleChangeArea = (e: any) => {
    if (e.target.value) {
      const areaItem = area.data.find((a) => a.id === e.target.value);
      areaItem &&
        setSearchObj((prev: any) => ({
          ...prev,
          areaFrom: areaItem?.from || 0,
          areaTo: areaItem?.to || 0,
        }));
    } else {
      setSearchObj((prev: any) => ({
        ...prev,
        areaFrom: "",
        areaTo: "",
      }));
    }
  };

  const getFormSelected = (data: any) => {
    switch (name) {
      case "province":
        return (
          <div>
            <label className="font-bold">{label}:</label>
            <div className="border p-2 bg-white">
              <select name={name} onChange={handleChangeProvince}>
                {data.map((province: any) => (
                  <option
                    className="p-1"
                    key={province.code}
                    value={province.code}
                  >
                    {province.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        );
      case "district":
        return (
          <div>
            <label className="font-bold">{label}:</label>
            <div className="border p-2 bg-white">
              <select name={name} onChange={handleChangeDistrict}>
                {data.map((district: any) => (
                  <option
                    className="p-1"
                    key={district.code}
                    value={district.code}
                  >
                    {district.name_with_type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        );
      case "prices-range":
        return (
          <div>
            <label className="font-bold">{label}:</label>
            <div className="border p-2 bg-white">
              <select name={name} onChange={handleChangePrice}>
                {data.map((price: any) => (
                  <option className="p-1" key={price.id} value={price.id}>
                    {price.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        );
      case "acreage":
        return (
          <div className="">
            <label className="font-bold">{label}:</label>
            <div className="border p-2 bg-white">
              <select name={name} onChange={handleChangeArea}>
                {data.map((item: any) => (
                  <option className="p-1" key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        );

      default:
        <div>Selected Feild</div>;
    }
  };

  return <div className="p-2">{getFormSelected(data)}</div>;
}
