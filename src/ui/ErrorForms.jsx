function ErrorForms({
  errors,
  fault1,
  message1,
  fault2,
  message2,
  fault3,
  message3,
  fault4,
  message4,
}) {
  return (
    <p
      className={`text-red-600 sm:text-xs text-[10px] font-semibold ${
        errors?.type ? "visible" : "invisible"
      } `}
    >
      {(errors?.type === fault1 && message1) ||
        (errors?.type === fault2 && message2) ||
        (errors?.type === fault3 && message3) ||
        (errors?.type === fault4 && message4) ||
        "change this field"}
    </p>
  );
}

export default ErrorForms;
