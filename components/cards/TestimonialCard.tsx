interface TestimonialCardProps {
  name: string;
  location: string;
  review: string;
}

export default function TestimonialCard({
  name,
  location,
  review,
}: TestimonialCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      
      <p className="text-gray-600 leading-relaxed">
        "{review}"
      </p>

      <div className="mt-6">
        <h3 className="font-semibold text-gray-900">
          {name}
        </h3>

        <p className="text-sm text-gray-500">
          {location}
        </p>
      </div>

    </div>
  );
}