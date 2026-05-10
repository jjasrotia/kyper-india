import Image from "next/image";

interface ProjectCardProps {
  title: string;
  location: string;
  capacity: string;
  image: string;
}

export default function ProjectCard({
  title,
  location,
  capacity,
  image,
}: ProjectCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">

      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">
          {title}
        </h3>

        <p className="mt-3 text-sm text-gray-600">
          {location}
        </p>

        <p className="mt-2 text-sm font-medium text-green-700">
          {capacity}
        </p>
      </div>

    </div>
  );
}