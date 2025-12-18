export default function TimeSlot({ time }: { time: string }) {
  return (
    <div className="h-20 border-t text-sm text-slate-400 flex items-start pt-1">
      <span className="w-14">{time}</span>
    </div>
  );
}
