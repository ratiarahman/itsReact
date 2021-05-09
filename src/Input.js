function Input({ type, placeholder, inputValue }) {
  const handleChange = (event) => {
    const value = event.target.value;
    inputValue(value);
  };
  return (
    <>
      <input type={type} placeholder={placeholder} onChange={handleChange}></input>
    </>
  );
}
export default Input;
