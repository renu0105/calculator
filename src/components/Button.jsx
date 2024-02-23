const Button = ({ num, key, inputVal, setInputVal }) => {
  const handleOn = () => {
    if (num === "=") {
      setInputVal(eval(inputVal));
    } else if (num === "AC") {
      setInputVal("");
    } else if (num === "DC") {
      setInputVal(inputVal.slice(0, -1));
    } else if (num === "(") {
      setInputVal(inputVal + "*" + num);
    } else {
      setInputVal(inputVal + num);
    }
  };
  return (
    <>
      <button
        key={key}
        className="text-white  bg-orange-500 font-bold text-xl mx-4 px-6 py-3 my-3"
        onClick={handleOn}
      >
        {num}
      </button>
    </>
  );
};
export default Button;
