interface FeatureCardProps{
    title:string,
    description:string
}

export default function FeatureCard({title,description}:FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex h-12 w-12 items-cente justify-center rounded-full bg-green-100 text-green-700 font-bold"> ✓</div>
      <h3 className="mt-5 text-xl font-semibold text-gray-500">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  )
}
