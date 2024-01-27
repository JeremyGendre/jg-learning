import { useEffect, useState } from "react";

interface CheckboxProps {
  label: string;
  id: string;
  onChange?: (val: boolean) => void;
}

export default function Checkbox({ label, id, onChange }: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if(onChange){
      onChange(checked);
    }
  }, [checked, onChange])

  return (
    <label htmlFor={id} className="flex select-none gap-1.5 items-center ring-1 ring-inset ring-gray-400 rounded-md px-3 py-1 cursor-pointer">
      <input onChange={(e) => setChecked(!!e.target.checked)} type="checkbox" id={id} name="my-checkbox" className="w-4 h-4" />
      { label }
    </label>
  );
}