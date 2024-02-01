interface CheckboxProps {
  label: string;
  id: string;
  checked: boolean;
  onChange: (val: boolean) => void;
}

export default function Checkbox({ label, id, checked, onChange }: CheckboxProps) {

  return (
    <label htmlFor={id} className="flex select-none gap-1.5 items-center ring-1 ring-inset ring-gray-400 rounded-md px-3 py-1 cursor-pointer hover:bg-gray-200 transition duration-150">
      <input checked={checked} onChange={(e) => onChange(!!e.target.checked)} type="checkbox" id={id} name="my-checkbox" className="w-4 h-4 cursor-pointer" />
      { label }
    </label>
  );
}