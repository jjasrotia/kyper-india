interface StatsCardProps{
    number:string,
    label:string
}

export default function StatsCard({number,label}:StatsCardProps) {
  return (
    <div className="rounder-2xl bg-white p-8 text-center shadow-sm border border-gray-200">
        <h3 className="text-4xl font-bold text-green-700">{number} </h3>
        <p className="mt-3 text-sm text-gray-600">{label}</p>
      
    </div>
  )
}
