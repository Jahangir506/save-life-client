import { useEffect, useState } from "react";

const useDistrictsUpazilas = () => {
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);

  useEffect(() => {
    fetch("/districts.json")
      .then((res) => res.json())
      .then((data) => setDistricts(data[2].data));
  }, []);

  useEffect(() => {
    fetch("/upazilas.json")
      .then((res) => res.json())
      .then((data) => setUpazilas(data[2].data));
  }, []);

  return [districts, upazilas];
};
export default useDistrictsUpazilas;
