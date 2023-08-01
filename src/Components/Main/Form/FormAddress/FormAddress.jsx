import "./FormAddress.css";
import { formAdressData } from "./FormAdressData";

function SelectGenderRender({ data }) {
  return (
    <select name="title" id="title" className="selectGender" required>
      {data.map((gender, key) => {
        return (
          <option key={key} value={gender.value}>
            {gender.type}
          </option>
        );
      })}
    </select>
  );
}

function SelectCityRender({ data }) {
  return (
    <select name="city" id="city" className="selectCity" required>
      {data.map((city, key) => {
        return (
          <option key={key} value={city.value}>
            {city.name}
          </option>
        );
      })}
    </select>
  );
}

function FormAddress() {
  return (
    <div className="formAddressWrapper">
      <h3>寄送地址</h3>
      <form className="form">
        <div className="input1">
          <div className="title">
            <label id="title">稱謂</label>
            <SelectGenderRender data={formAdressData.gender} />
          </div>
          <div className="fullname">
            <label id="name">姓名</label>
            <input
              type="text"
              placeholder="請輸入姓名"
              className="inputFullname"
              required
            />
          </div>
        </div>

        <div className="input2">
          <div className="phone">
            <label id="phone">電話</label>
            <input
              type="number"
              placeholder="請輸入行動電話"
              required
              className="inputPhone"
            />
          </div>
          <div className="email">
            <label id="email">Email</label>
            <input
              type="email"
              placeholder="請輸入電子信箱"
              className="inputEmail"
              required
            />
          </div>
        </div>

        <div className="input3">
          <div className="city">
            <label id="city">縣市</label>
            <SelectCityRender data={formAdressData.city} />
          </div>
          <div className="address">
            <label id="address">地址</label>
            <input
              type="text"
              placeholder="請輸入地址"
              className="inputAddress"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormAddress;
