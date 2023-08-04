import "./FormAddress.css";
import { FormAdressData } from "./FormAdressData";
import { useContext } from "react";
import FormContext from "../FormContext";

function SelectGenderRender({ data }) {
  const { infoUpdateHandler } = useContext(FormContext);
  return (
    <select
      name="title"
      id="title"
      className="selectGender"
      onChange={infoUpdateHandler}
    >
      {data.map((gender, key) => {
        return (
          <option key={key} value={gender.value} name="tilte">
            {gender.type}
          </option>
        );
      })}
    </select>
  );
}

function SelectCityRender({ data }) {
  const { infoUpdateHandler } = useContext(FormContext);
  return (
    <select
      name="city"
      id="city"
      className="selectCity"
      onChange={infoUpdateHandler}
    >
      {data.map((city, key) => {
        return (
          <option key={key} value={city.value} name="cityName">
            {city.name}
          </option>
        );
      })}
    </select>
  );
}

function FormAddress({ isDisplay }) {
  const { infoUpdateHandler } = useContext(FormContext);
  return (
    <div
      className="formAddressWrapper"
      style={{ display: isDisplay ? "block" : "none" }}
    >
      <h3>寄送地址</h3>
      <div className="form">
        <div className="input1">
          <div className="title">
            <label id="title">稱謂</label>
            <SelectGenderRender data={FormAdressData.gender} />
          </div>
          <div className="fullname">
            <label id="name">姓名</label>
            <input
              type="text"
              placeholder="請輸入姓名"
              className="inputFullname"
              name="fullName"
              onChange={infoUpdateHandler}
            />
          </div>
        </div>

        <div className="input2">
          <div className="phone">
            <label id="phone">電話</label>
            <input
              type="number"
              placeholder="請輸入行動電話"
              className="inputPhone"
              name="phoneNumber"
              onChange={infoUpdateHandler}
            />
          </div>
          <div className="email">
            <label id="email">Email</label>
            <input
              type="email"
              placeholder="請輸入電子信箱"
              className="inputEmail"
              name="Email"
              onChange={infoUpdateHandler}
            />
          </div>
        </div>

        <div className="input3">
          <div className="city">
            <label id="city">縣市</label>
            <SelectCityRender data={FormAdressData.city} />
          </div>
          <div className="address">
            <label id="address">地址</label>
            <input
              type="text"
              placeholder="請輸入地址"
              className="inputAddress"
              name="address"
              onChange={infoUpdateHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormAddress;
