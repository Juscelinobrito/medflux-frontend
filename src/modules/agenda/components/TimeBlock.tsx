interface Props {
  time: string;
  isBooked?: boolean;
}

export default function TimeBlock({ time, isBooked = false }: Props) {
  return (
    <div
      className={`
        border rounded-md p-3 text-sm text-center cursor-pointer
        transition
        ${
          isBooked
            ? "bg-slate-200 text-slate-400 cursor-not-allowed"
            : "bg-white hover:bg-slate-100"
        }
      `}
    >
      {time}
    </div>
  );
}