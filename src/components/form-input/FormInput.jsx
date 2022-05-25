import "./FormInput.scss";

const FormInput = ({ label, inputOptions }) => {
  return (
    <>
      <div className="group">
        <input className="form-input" {...inputOptions} />
        <label
          className={`${
            inputOptions.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label} <span style={{ color: "red" }}>*</span>
        </label>
      </div>
    </>
  );
};

export default FormInput;
