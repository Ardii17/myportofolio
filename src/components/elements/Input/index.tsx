type types = {
    label: string;
    type: string;
    name: string;
};

export default function Input(props: types) {
  const { label, type, name } = props;
  return (
    <>
      <label className="text-white font-semibold">{label}</label>
      <input
        type={type}
        name={name}
        className="p-1 rounded-sm"
        required
      />
    </>
  );
}
