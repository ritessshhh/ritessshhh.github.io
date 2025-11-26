import Image from "next/image";
import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row gap-6">
        {experience.imageUrl ? (
          <div className="w-1/4 min-w-[100px] max-w-[120px] relative">
            <Image
              src={experience.imageUrl}
              alt={experience.company}
              width={120}
              height={120}
              className="rounded-lg object-contain"
            />
          </div>
        ) : (
          <div className="w-1/4 min-w-[100px] max-w-[120px] relative flex items-center justify-center bg-zinc-50 rounded-lg">
            <span className="text-xs text-zinc-400">No Image</span>
          </div>
        )}
        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-base font-serif font-medium">
              {experience.title} —{" "}
              {experience.companyUrl ? (
                <a
                  href={experience.companyUrl}
                  className="hover:text-stanford-red transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience.company}
                </a>
              ) : (
                experience.company
              )}
            </h3>
            <span className="text-xs text-zinc-500 whitespace-nowrap ml-4">
              {experience.date}
            </span>
          </div>
          {experience.advisor && (
            <p
              className="text-sm text-zinc-500 italic [&_a]:underline [&_a]:hover:text-stanford-red [&_a]:transition-colors mt-2"
              dangerouslySetInnerHTML={{ __html: `Principal Investigator: ${experience.advisor}` }}
            />
          )}
          {experience.manager && (
            <p className="text-sm text-zinc-600 leading-relaxed italic mt-2">
              Manager: {experience.manager}
            </p>
          )}
          {experience.description && (
            <p className="text-sm text-zinc-600 leading-relaxed mt-2">
              {experience.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
